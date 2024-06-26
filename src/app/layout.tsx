import { Provider } from 'jotai';
import '../styles/globals.css';

export function generateMetadata() {
    const title = "Jordan's Portfolio Site";
    const description = "Jordan's portfolio site.";
    const creator = 'Jordan Boesch';

    return {
        title,
        description,
        creator,
        icons: {
            icon: 'favicons/favicon-32x32.png',
            shortcut: 'favicons/favicon-32x32.png',
            apple: 'favicons/apple-touch-icon.png',
            other: {
                rel: 'favicons/favicon-32x32.png',
                url: 'favicons/favicon-32x32.png',
            },
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            creator,
        },
        openGraph: {
            title,
            description,
            type: 'website',
            authors: [creator],
        },
    };
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
