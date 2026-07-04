import { getPayload } from 'payload';
import config from '@payload-config';
import {
    convertMarkdownToLexical,
    editorConfigFactory,
} from '@payloadcms/richtext-lexical';

console.log('>>> seed-showcase module loaded');

const SLUG = 'inside-an-mpc-wallet';
const TITLE = 'Inside a Multi-Party Computation Wallet';
const SHOWCASE_MEDIA_ID = 4;

const markdown = `As engineering hire #1 at a crypto startup, one of the first hard problems I owned was custody: how do you let a user *sign* a transaction without any single machine ever holding a full private key? The answer we shipped was a **multi-party computation (MPC) wallet**, and building it rewired how I think about security, failure, and shipping under real constraints.

This post is the version I wish I'd read before starting — the concepts, the moving parts, and the mistakes worth avoiding. It's educational, not a blueprint of anything proprietary.

## Why split the key at all?

A traditional wallet stores one private key in one place. That's a single point of failure: steal the key, drain the funds. MPC replaces "one key in one place" with **threshold signatures** — the key is split into *shares*, and a valid signature is produced collaboratively without any party ever reconstructing the whole thing.

The mental model that finally made it click for me:

> The moment I watched a valid on-chain transaction get signed by a key that had never existed in one place, the whole model stopped being abstract.

You never assemble the key. You assemble a *signature*. That distinction is the entire point.

## The moving parts

At a high level, an MPC wallet has three responsibilities, and it's worth keeping them cleanly separated in your head (and your codebase):

- **Distributed key generation (DKG)** — create the shares such that no party sees the full key, ever.
- **Threshold signing** — combine \`t\` of \`n\` shares into one signature through a short round of coordination.
- **Share lifecycle** — rotate, back up, and recover shares when a device is lost.

The requirements we locked in before writing a line of protocol code:

1. No full key on any single device, **ever** — including ours.
2. Sub-second signing, so the UX still felt instant.
3. Recoverable shares, so a lost phone didn't mean lost funds.

### Key generation

DKG is where the guarantees are born. Each participant generates a secret, contributes to a shared public key, and ends up holding exactly one share. Conceptually:

\`\`\`ts
// Each party runs this independently; no one sees the others' secrets.
const share = dkg.generateShare({ parties: 3, threshold: 2 });
// The group agrees on a single public key: the wallet address.
const publicKey = dkg.aggregatePublicKey(share.commitments);
\`\`\`

The subtle part isn't the math, it's the *transport*: every message between parties has to be authenticated and replay-protected, or an attacker who can reorder packets can grief the ceremony.

### Signing

Signing is a coordinated round between the parties that hold shares. Simplified, it looks like this:

1. The coordinator broadcasts the transaction hash to the signers.
2. Each signer produces a partial signature from its share.
3. The partials are combined and **verified against the public key** before anything touches the chain.

\`\`\`ts
const partials = await Promise.all(
    signers.map((s) => s.sign(txHash)),
);
const signature = threshold.combine(partials);
if (!verify(signature, txHash, publicKey)) {
    throw new Error('invalid aggregate signature');
}
return broadcast(signature);
\`\`\`

That \`verify\` call is not optional. A malformed or malicious partial should fail *loudly and locally*, long before it becomes an on-chain transaction you can't take back.

## Failure modes we designed for

Most of the engineering wasn't the happy path — it was everything that can go wrong mid-ceremony:

- A signer goes offline between rounds → the round times out cleanly and nothing half-signs.
- A device is lost → recovery reconstructs a *replacement* share from a threshold of the others, and the old share is rotated out.
- A single machine is compromised → the attacker holds one share, which is worthless below the signing threshold.

You can run \`npm run test:chaos\` all day; the ceremonies that matter are the ones that get interrupted.

## What I'd tell my past self

Two things, mostly:

> Boring, explicit protocols beat clever ones. The version you can reason about at 2am during an incident is the version that keeps funds safe.

And: write the threat model *first*, in prose, before any code. If you can't describe in plain English what an attacker can and can't do at each step, you don't understand the system yet. The [NIST guidance on threshold schemes](https://csrc.nist.gov/projects/threshold-cryptography) and the [Lindell paper on fast threshold ECDSA](https://eprint.iacr.org/2020/540) were the two references I kept open the entire time.

---

The result shipped to production and now sits under a security-focused browser extension and a trading-focused mobile wallet. If you're building in this space and want to compare notes, I'm easy to find on [GitHub](https://github.com/boeschj) and [LinkedIn](https://www.linkedin.com/in/jordan-boesch-39570b20b).`;

const run = async () => {
    const payload = await getPayload({ config });
    const editorConfig = await editorConfigFactory.default({
        config: payload.config,
    });

    const content = convertMarkdownToLexical({
        editorConfig,
        markdown: markdown.replace(/—/g, '-'),
    });
    convertFencedParagraphs(content);
    insertImagesAfterHeadings(content, [
        'The moving parts',
        'Failure modes',
    ]);

    const existing = await payload.find({
        collection: 'posts',
        where: { slug: { equals: SLUG } },
        limit: 1,
    });

    const data = {
        title: TITLE,
        slug: SLUG,
        status: 'published' as const,
        publishedAt: new Date().toISOString(),
        content,
    };

    if (existing.docs[0]) {
        await payload.update({
            collection: 'posts',
            id: existing.docs[0].id,
            data,
        });
        console.log(`Updated post: ${SLUG}`);
    } else {
        await payload.create({ collection: 'posts', data });
        console.log(`Created post: ${SLUG}`);
    }

    process.exit(0);
};

interface LexicalNode {
    type: string;
    text?: string;
    children?: LexicalNode[];
    [key: string]: unknown;
}

// convertMarkdownToLexical does not understand fenced code blocks, so it leaves
// them as paragraphs whose text starts with ```lang. Rebuild those as real
// Lexical `code` nodes.
function convertFencedParagraphs(content: {
    root: { children: LexicalNode[] };
}) {
    content.root.children = content.root.children.map((node) => {
        const first = node.children?.[0];
        const isFence =
            node.type === 'paragraph' &&
            typeof first?.text === 'string' &&
            first.text.startsWith('```');

        if (!isFence || !node.children) {
            return node;
        }

        const language = (first.text ?? '').replace(/^```/, '').trim() || 'text';
        const codeChildren = node.children
            .slice(1)
            .filter((child) => !(child.type === 'text' && child.text === '```'));

        while (codeChildren[0]?.type === 'linebreak') {
            codeChildren.shift();
        }
        while (codeChildren[codeChildren.length - 1]?.type === 'linebreak') {
            codeChildren.pop();
        }

        return {
            type: 'code',
            language,
            children: codeChildren,
            direction: null,
            format: '',
            indent: 0,
            version: 1,
        };
    });
}

function figureNode(): LexicalNode {
    return {
        type: 'upload',
        relationTo: 'media',
        value: SHOWCASE_MEDIA_ID,
        fields: null,
        format: '',
        version: 3,
    };
}

function insertImagesAfterHeadings(
    content: { root: { children: LexicalNode[] } },
    headings: string[]
) {
    // Splice back-to-front so earlier inserts don't shift later indices.
    const insertions = headings
        .map((headingText) => ({
            headingText,
            index: content.root.children.findIndex(
                (node) =>
                    node.type === 'heading' &&
                    Boolean(node.children?.[0]?.text?.includes(headingText))
            ),
        }))
        .filter((entry) => entry.index >= 0)
        .sort((a, b) => b.index - a.index);

    for (const { index } of insertions) {
        content.root.children.splice(index + 1, 0, figureNode());
    }
}

await run();
