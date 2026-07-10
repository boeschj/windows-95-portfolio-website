import 'server-only';

import { createHighlighterCoreSync } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';
import css from 'shiki/langs/css.mjs';
import javascript from 'shiki/langs/javascript.mjs';
import json from 'shiki/langs/json.mjs';
import python from 'shiki/langs/python.mjs';
import rust from 'shiki/langs/rust.mjs';
import tsx from 'shiki/langs/tsx.mjs';
import typescript from 'shiki/langs/typescript.mjs';
import yaml from 'shiki/langs/yaml.mjs';
import githubLight from 'shiki/themes/github-light.mjs';

import type { ThemedToken } from 'shiki';

export type HighlightedCode = ThemedToken[][];

const THEME = 'github-light';
const FALLBACK_LANGUAGE = 'text';
const SUPPORTED_LANGUAGES = new Set([
    'css',
    'javascript',
    'json',
    'python',
    'rust',
    'tsx',
    'typescript',
    'yaml',
]);
const LANGUAGE_ALIASES: Record<string, string> = {
    js: 'javascript',
    py: 'python',
    rs: 'rust',
    ts: 'typescript',
    yml: 'yaml',
};

const highlighter = createHighlighterCoreSync({
    engine: createJavaScriptRegexEngine(),
    langs: [css, javascript, json, python, rust, tsx, typescript, yaml],
    themes: [githubLight],
});

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
    const lang = LANGUAGE_ALIASES[normalized] ?? normalized;

    return SUPPORTED_LANGUAGES.has(lang) ? lang : FALLBACK_LANGUAGE;
}

function plaintextTokens(code: string): HighlightedCode {
    let offset = 0;

    return code.split('\n').map((line) => {
        const token = { content: line, offset };
        offset += line.length + 1;
        return [token];
    });
}
