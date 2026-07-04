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
        // Unknown/unsupported language falls back to plain text.
        return await codeToHtml(code, {
            lang: FALLBACK_LANGUAGE,
            theme: THEME,
        });
    }
}
