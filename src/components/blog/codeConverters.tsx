import { CodeBlock } from './CodeBlock';

import type { JSXConvertersFunction } from '@payloadcms/richtext-lexical/react';

interface CodeNode {
    type?: string;
    language?: unknown;
    root?: unknown;
    children?: unknown[];
    text?: unknown;
}

const asNode = (value: unknown): CodeNode | null =>
    typeof value === 'object' && value !== null ? value : null;

export function collectCodeText(node: CodeNode): string {
    let text = '';

    for (const child of node.children ?? []) {
        const childNode = asNode(child);

        if (childNode?.type === 'linebreak') {
            text += '\n';
        } else if (typeof childNode?.text === 'string') {
            text += childNode.text;
        }
    }

    return text;
}

export function createCodeConverters(): JSXConvertersFunction {
    return ({ defaultConverters }) => ({
        ...defaultConverters,
        code: ({ node }) => {
            const codeNode = asNode(node) ?? {};
            const language =
                typeof codeNode.language === 'string'
                    ? codeNode.language
                    : undefined;

            return (
                <CodeBlock
                    code={collectCodeText(codeNode)}
                    language={language}
                />
            );
        },
    });
}
