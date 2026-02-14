import { Clock } from './Clock';
import { StartMenu } from './StartMenu';

export function Footer() {
    return (
        <div className="bg-windows-gray fixed bottom-0 mx-auto hidden w-full content-center md:grid">
            <div className="win95-border-top">
                <div className="flex h-[35px] items-center justify-between">
                    <StartMenu />
                    <div className="win95-border-sunken-light">
                        <Clock />
                    </div>
                </div>
            </div>
        </div>
    );
}
