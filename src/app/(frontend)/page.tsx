import { Footer } from '@/components/footer/Footer';
import { WelcomeView } from '@/components/welcomeView/WelcomeView';

export const revalidate = 3600;

interface PageProps {
    searchParams: Promise<{ tab?: string }>;
}

export default async function Page({ searchParams }: PageProps) {
    const { tab } = await searchParams;

    return (
        <div className="bg-windows-bg flex min-h-screen w-full flex-col items-center justify-center">
            <div
                className={
                    'flex h-dvh w-full max-w-screen-2xl grow flex-col items-center justify-center md:h-36 md:p-12'
                }
            >
                <WelcomeView initialRoute={tab ?? null} />
            </div>
            <div className="md:pt-taskbar-height w-full pt-0">
                <Footer />
            </div>
        </div>
    );
}
