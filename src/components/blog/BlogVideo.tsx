interface BlogVideoProps {
    src: string;
    label: string;
}

export function BlogVideo({ src, label }: BlogVideoProps) {
    return (
        <video src={src} aria-label={label} autoPlay loop muted playsInline />
    );
}
