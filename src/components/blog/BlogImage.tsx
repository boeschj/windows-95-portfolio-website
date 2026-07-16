import Image from 'next/image';

const BLOG_IMAGE_SIZES = '(max-width: 768px) 100vw, 640px';

interface BlogImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
}

export function BlogImage({ src, alt, width, height }: BlogImageProps) {
    return (
        <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            sizes={BLOG_IMAGE_SIZES}
        />
    );
}
