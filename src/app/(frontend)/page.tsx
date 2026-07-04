import { Footer } from '@/components/footer/Footer';
import { WelcomeView } from '@/components/welcomeView/WelcomeView';

export const revalidate = 3600;

export default function Page() {
    return (
        <div className="bg-windows-bg flex min-h-screen w-full flex-col items-center justify-center">
            <div
                className={
                    'flex h-dvh w-full max-w-screen-2xl grow flex-col items-center justify-center md:h-36 md:p-12'
                }
            >
                <WelcomeView />
            </div>
            <div className="md:pt-taskbar-height w-full pt-0">
                <Footer />
            </div>
        </div>
    );
}
