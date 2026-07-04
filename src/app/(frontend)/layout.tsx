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

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: "Jordan's Portfolio Site",
    description: "Jordan's portfolio site.",
    creator: 'Jordan Boesch',
    icons: {
        icon: 'favicons/favicon-32x32.png',
        shortcut: 'favicons/favicon-32x32.png',
        apple: 'favicons/apple-touch-icon.png',
        other: {
            rel: 'icon',
            url: 'favicons/favicon-32x32.png',
        },
    },
    twitter: {
        card: 'summary_large_image',
        title: "Jordan's Portfolio Site",
        description: "Jordan's portfolio site.",
        creator: 'Jordan Boesch',
    },
    openGraph: {
        title: "Jordan's Portfolio Site",
        description: "Jordan's portfolio site.",
        authors: ['Jordan Boesch'],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={msSansSerif.variable}>
            <body>
                <JsonLd data={PERSON_SCHEMA} />
                {children}
            </body>
        </html>
    );
}
