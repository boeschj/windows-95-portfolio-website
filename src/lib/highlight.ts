import 'server-only';

import { createHighlighterCoreSync } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import css from 'shiki/langs/css.mjs';
import diff from 'shiki/langs/diff.mjs';
import go from 'shiki/langs/go.mjs';
import html from 'shiki/langs/html.mjs';
import javascript from 'shiki/langs/javascript.mjs';
import json from 'shiki/langs/json.mjs';
import markdown from 'shiki/langs/markdown.mjs';
import python from 'shiki/langs/python.mjs';
import rust from 'shiki/langs/rust.mjs';
import shellscript from 'shiki/langs/shellscript.mjs';
import sql from 'shiki/langs/sql.mjs';
import tsx from 'shiki/langs/tsx.mjs';
import typescript from 'shiki/langs/typescript.mjs';
import yaml from 'shiki/langs/yaml.mjs';
import githubLight from 'shiki/themes/github-light.mjs';

import type { HighlightedCodeLanguage } from '@/config/codeLanguages';
import type { LanguageRegistration, ThemedToken } from 'shiki';

export type HighlightedCode = ThemedToken[][];

const THEME = 'github-light';
const FALLBACK_LANGUAGE = 'text';

const GRAMMARS_BY_LANGUAGE = {
    typescript,
    tsx,
    javascript,
    json,
    html,
    css,
    shell: shellscript,
    sql,
    python,
    go,
    rust,
    yaml,
    markdown,
    diff,
} satisfies Record<HighlightedCodeLanguage, LanguageRegistration[]>;

const highlighter = createHighlighterCoreSync({
    engine: createJavaScriptRegexEngine(),
    langs: Object.values(GRAMMARS_BY_LANGUAGE),
    themes: [githubLight],
});

const LOADED_LANGUAGES = new Set(highlighter.getLoadedLanguages());

export function highlightCode(
    code: string,
    language: string | undefined
): HighlightedCode {
    const lang = normalizeLanguage(language);

    if (lang === FALLBACK_LANGUAGE) {
        return plaintextTokens(code);
    }

    try {
        return highlighter.codeToTokens(code, { lang, theme: THEME }).tokens;
    } catch {
        return plaintextTokens(code);
    }
}

function normalizeLanguage(language: string | undefined): string {
    const normalized = language?.trim().toLowerCase() ?? '';

    return LOADED_LANGUAGES.has(normalized) ? normalized : FALLBACK_LANGUAGE;
}

function plaintextTokens(code: string): HighlightedCode {
    let offset = 0;

    return code.split('\n').map((line) => {
        const token = { content: line, offset };
        offset += line.length + 1;
        return [token];
    });
}
