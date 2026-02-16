import { Clock } from './Clock';
import { StartMenu } from './StartMenu';

export function Footer() {
    return (
        <div className="bg-windows-gray fixed bottom-0 mx-auto hidden w-full content-center md:grid">
            <div className="win95-border-top">
                <div className="h-taskbar-height flex items-center justify-between">
                    <StartMenu />
                    <div className="win95-border-sunken-light">
                        <Clock />
                    </div>
                </div>
            </div>
        </div>
    );
}
