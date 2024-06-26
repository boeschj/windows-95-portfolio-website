import { Footer } from '../components/footer/Footer';
import { NavMenuModal } from '../components/footer/NavMenuModal';
import { WelcomeView } from '../components/welcomeView/WelcomeView';
import { links } from '../config/aboutMe';

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen justify-center items-center w-full bg-windows-bg">
            <div className="flex grow flex-col md:p-12 h-36 items-center justify-center max-w-screen-2xl">
                <WelcomeView />
            </div>
            <div className="w-full pt-[35px]">
                <NavMenuModal links={links} />
                <Footer />
            </div>
        </div>
    );
}
