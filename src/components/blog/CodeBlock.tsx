import { CopyButton } from './CopyButton';

interface CodeBlockProps {
    html: string;
    code: string;
}

export function CodeBlock({ html, code }: CodeBlockProps) {
    const body = html ? (
        <div
            className="notepad-code-scroll"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    ) : (
        <pre className="notepad-code-scroll">{code}</pre>
    );

    return (
        <div className="notepad-code">
            <CopyButton code={code} />
            {body}
        </div>
    );
}
