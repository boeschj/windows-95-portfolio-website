import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

const FONT_PATH = join(process.cwd(), 'public', 'fonts', 'MS-Sans-Serif.woff');
const FONT_FAMILY = 'MS Sans Serif';
const OG_PADDING = '64px';

const WIN95_DESKTOP = '#55aaaa';
const WIN95_GRAY = '#c0c4c8';
const WIN95_BLUE = '#0000a8';
const WIN95_WHITE = '#fff';
const WIN95_BLACK = '#000';
const WIN95_META = '#555';

interface NotepadOgConfig {
    windowTitle: string;
    title: string;
    metaLine: string;
}

export async function renderNotepadOg({
    windowTitle,
    title,
    metaLine,
}: NotepadOgConfig) {
    const fontData = await readFile(FONT_PATH);

    return new ImageResponse(
        <div
            style={{
                display: 'flex',
                height: '100%',
                width: '100%',
                padding: OG_PADDING,
                background: WIN95_DESKTOP,
                fontFamily: FONT_FAMILY,
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    padding: '4px',
                    background: WIN95_GRAY,
                    borderTop: `3px solid ${WIN95_WHITE}`,
                    borderLeft: `3px solid ${WIN95_WHITE}`,
                    borderRight: `3px solid ${WIN95_BLACK}`,
                    borderBottom: `3px solid ${WIN95_BLACK}`,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '12px 18px',
                        background: WIN95_BLUE,
                        color: WIN95_WHITE,
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
                        padding: OG_PADDING,
                        background: WIN95_WHITE,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            fontSize: 72,
                            fontWeight: 800,
                            lineHeight: 1.1,
                            color: WIN95_BLACK,
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            marginTop: 36,
                            fontSize: 32,
                            color: WIN95_META,
                        }}
                    >
                        {metaLine}
                    </div>
                </div>
            </div>
        </div>,
        {
            ...OG_SIZE,
            fonts: [
                {
                    name: FONT_FAMILY,
                    data: fontData,
                    style: 'normal',
                    weight: 400,
                },
            ],
        }
    );
}
