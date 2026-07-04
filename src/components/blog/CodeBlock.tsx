import { CopyButton } from './CopyButton';

interface CodeBlockProps {
    html: string;
    code: string;
}

export function CodeBlock({ html, code }: CodeBlockProps) {
    return (
        <div className="notepad-code">
            <CopyButton code={code} />
            <div
                className="notepad-code-scroll"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    );
}
