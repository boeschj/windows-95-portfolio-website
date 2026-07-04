import localFont from 'next/font/local';
import { SITE_URL } from '@/constants/application.constants';
import { PERSON_SCHEMA } from '@/data/seoSchema';
import { JsonLd } from '@/components/JsonLd';
import '@react95/fonts/serif/10pt';
import '@react95/fonts/serif/14pt';
import '@/styles/globals.css';

import type { Metadata, Viewport } from 'next';

const msSansSerif = localFont({
    src: [
        { path: '../../../public/fonts/MS-Sans-Serif.woff2', weight: '400' },
        { path: '../../../public/fonts/MS-Sans-Serif.woff', weight: '400' },
    ],
    variable: '--font-ms-sans-serif',
    display: 'swap',
});

const fixedsys = localFont({
    src: [
        {
            path: '../../../public/fonts/Fixedsys-Excelsior.woff',
            weight: '400',
        },
        { path: '../../../public/fonts/Fixedsys-Excelsior.ttf', weight: '400' },
    ],
    variable: '--font-fixedsys',
    display: 'swap',
});

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

const SITE_TITLE = "Jordan's Portfolio Site";
const SITE_DESCRIPTION = "Jordan's portfolio site.";
const SITE_CREATOR = 'Jordan Boesch';
const FAVICON_PATH = 'favicons/favicon-32x32.png';

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: SITE_CREATOR,
    icons: {
        icon: FAVICON_PATH,
        shortcut: FAVICON_PATH,
        apple: 'favicons/apple-touch-icon.png',
        other: {
            rel: 'icon',
            url: FAVICON_PATH,
        },
    },
    twitter: {
        card: 'summary_large_image',
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        creator: SITE_CREATOR,
    },
    openGraph: {
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        authors: [SITE_CREATOR],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${msSansSerif.variable} ${fixedsys.variable}`}
        >
            <body>
                <JsonLd data={PERSON_SCHEMA} />
                {children}
            </body>
        </html>
    );
}
