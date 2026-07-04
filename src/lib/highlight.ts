import 'server-only';

import { codeToHtml } from 'shiki';

const THEME = 'github-light';
const FALLBACK_LANGUAGE = 'text';

export async function highlightCode(
    code: string,
    language: string
): Promise<string> {
    const lang = language.trim().toLowerCase() || FALLBACK_LANGUAGE;

    try {
        return await codeToHtml(code, { lang, theme: THEME });
    } catch {
        return await highlightAsPlainText(code);
    }
}

// Never throws: an unknown language retries as plain text, and if Shiki itself
// fails to load we degrade to escaped markup so one bad block can't 500 the
// whole post.
async function highlightAsPlainText(code: string): Promise<string> {
    try {
        return await codeToHtml(code, {
            lang: FALLBACK_LANGUAGE,
            theme: THEME,
        });
    } catch {
        return `<pre><code>${escapeHtml(code)}</code></pre>`;
    }
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
