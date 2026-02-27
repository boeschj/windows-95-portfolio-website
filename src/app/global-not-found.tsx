import localFont from 'next/font/local';
import '@/styles/globals.css';

const msSansSerif = localFont({
    src: [
        { path: '../../public/fonts/MS-Sans-Serif.woff2', weight: '400' },
        { path: '../../public/fonts/MS-Sans-Serif.woff', weight: '400' },
    ],
    variable: '--font-ms-sans-serif',
    display: 'swap',
});

export default function GlobalNotFound() {
    return (
        <html lang="en" className={msSansSerif.variable}>
            <body>
                <div className="bg-windows-bg flex min-h-screen items-center justify-center">
                    <div className="text-center text-2xl font-bold">
                        404 - Page Not Found
                    </div>
                </div>
            </body>
        </html>
    );
}
