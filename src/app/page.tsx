import { Footer } from '@/components/footer/Footer';
import { WelcomeView } from '@/components/welcomeView/WelcomeView';

export default function Page() {
    return (
        <div className="bg-windows-bg flex min-h-screen w-full flex-col items-center justify-center">
            <div
                className={
                    'flex h-dvh max-w-screen-2xl grow flex-col items-center justify-center md:h-36 md:p-12'
                }
            >
                <WelcomeView />
            </div>
            <div className="w-full pt-0 md:pt-(--spacing-taskbar-height)">
                <Footer />
            </div>
        </div>
    );
}
