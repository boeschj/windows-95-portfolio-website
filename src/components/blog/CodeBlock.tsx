import { CopyButton } from './CopyButton';
import { highlightCode } from '@/lib/highlight';

import type { HighlightedCode } from '@/lib/highlight';

const CODE_FONT = 'var(--font-fixedsys), "Courier New", monospace';

interface CodeBlockProps {
    code: string;
    language?: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
    const highlightedCode = highlightCode(code, language);

    return (
        <div className="win95-border-sunken relative mb-4.5 bg-[#f4f4f4]">
            <CopyButton code={code} />
            <pre
                className="m-0 overflow-x-auto bg-transparent px-4.5 py-4 text-[17px] leading-normal [-webkit-font-smoothing:none]"
                style={{ fontFamily: CODE_FONT }}
            >
                <code style={{ fontFamily: 'inherit' }}>
                    <HighlightedLines lines={highlightedCode} />
                </code>
            </pre>
        </div>
    );
}

function HighlightedLines({ lines }: { lines: HighlightedCode }) {
    return lines.map((line, lineIndex) => (
        <span key={lineIndex} style={{ fontFamily: 'inherit' }}>
            {line.map((token) => (
                <span
                    key={token.offset}
                    style={{ color: token.color, fontFamily: 'inherit' }}
                >
                    {token.content}
                </span>
            ))}
            {lineIndex === lines.length - 1 ? null : '\n'}
        </span>
    ));
}
