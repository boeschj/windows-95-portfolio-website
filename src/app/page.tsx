import { Footer } from '../components/footer/Footer';
import { NavMenuModal } from '../components/footer/NavMenuModal';
import { WelcomeView } from '../components/welcomeView/WelcomeView';
import { links } from '../config/aboutMe';

export default function Page() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-windows-bg">
            <div
                className={
                    'flex h-dvh max-w-screen-2xl grow flex-col items-center justify-center md:h-36 md:p-12'
                }
            >
                <WelcomeView />
            </div>
            <div className="w-full pt-0 md:pt-[35px]">
                <NavMenuModal links={links} />
                <Footer />
            </div>
        </div>
    );
}
