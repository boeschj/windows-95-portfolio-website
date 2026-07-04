import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/data/posts';
import { BLOG_AUTHOR, postFilename } from '@/data/postView';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = `${BLOG_AUTHOR} — Blog`;

const FONT_PATH = join(process.cwd(), 'public', 'fonts', 'MS-Sans-Serif.woff');

interface OgImageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostOgImage({ params }: OgImageProps) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);
    const title = post?.title ?? 'Blog';
    const windowTitle = `${post ? postFilename(post) : 'post.md'} - Notepad`;
    const fontData = await readFile(FONT_PATH);

    return new ImageResponse(
        <div
            style={{
                display: 'flex',
                height: '100%',
                width: '100%',
                padding: '64px',
                background: '#55aaaa',
                fontFamily: 'MS Sans Serif',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    padding: '4px',
                    background: '#c0c4c8',
                    borderTop: '3px solid #fff',
                    borderLeft: '3px solid #fff',
                    borderRight: '3px solid #000',
                    borderBottom: '3px solid #000',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '12px 18px',
                        background: '#0000a8',
                        color: '#fff',
                        fontSize: 30,
                        fontWeight: 700,
                    }}
                >
                    {windowTitle}
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: 1,
                        justifyContent: 'center',
                        padding: '64px',
                        background: '#fff',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            fontSize: 72,
                            fontWeight: 800,
                            lineHeight: 1.1,
                            color: '#000',
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            marginTop: 36,
                            fontSize: 32,
                            color: '#555',
                        }}
                    >
                        {BLOG_AUTHOR}
                    </div>
                </div>
            </div>
        </div>,
        {
            ...size,
            fonts: [
                {
                    name: 'MS Sans Serif',
                    data: fontData,
                    style: 'normal',
                    weight: 400,
                },
            ],
        }
    );
}
