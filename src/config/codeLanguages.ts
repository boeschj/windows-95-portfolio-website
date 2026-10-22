export const CODE_LANGUAGES = {
    typescript: 'TypeScript',
    tsx: 'TSX',
    javascript: 'JavaScript',
    json: 'JSON',
    css: 'CSS',
    python: 'Python',
    rust: 'Rust',
    yaml: 'YAML',
    plaintext: 'Plain Text',
} as const satisfies Record<string, string>;

export const DEFAULT_CODE_LANGUAGE =
    'typescript' satisfies keyof typeof CODE_LANGUAGES;

export const CODE_BLOCK_SLUG = 'Code';
