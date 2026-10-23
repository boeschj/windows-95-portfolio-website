export const PLAIN_TEXT_LANGUAGE = 'plaintext';

export const CODE_LANGUAGES = {
    typescript: 'TypeScript',
    tsx: 'TSX',
    javascript: 'JavaScript',
    json: 'JSON',
    html: 'HTML',
    css: 'CSS',
    shell: 'Shell',
    sql: 'SQL',
    python: 'Python',
    go: 'Go',
    rust: 'Rust',
    yaml: 'YAML',
    markdown: 'Markdown',
    diff: 'Diff',
    [PLAIN_TEXT_LANGUAGE]: 'Plain Text',
} as const satisfies Record<string, string>;

export type CodeLanguage = keyof typeof CODE_LANGUAGES;

export type HighlightedCodeLanguage = Exclude<
    CodeLanguage,
    typeof PLAIN_TEXT_LANGUAGE
>;

export const DEFAULT_CODE_LANGUAGE = 'typescript' satisfies CodeLanguage;

export const CODE_BLOCK_SLUG = 'Code';

export const CODE_BLOCK_INTERFACE_NAME = 'CodeBlockFields';
