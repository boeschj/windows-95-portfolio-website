import { TabContentContainer } from './TabContentContainer';
import { LinkButtonRow } from '../buttons/LinkButtonRow';
import { Header } from './Header';

export const WelcomeView: React.FC = (): JSX.Element => {
    return (
        <div className="win95-border-raised h-full bg-windows-gray pb-6">
            <Header />
            <div className="flex h-full grow flex-col justify-between gap-5 p-2 md:p-5">
                <TabContentContainer />
                <LinkButtonRow />
            </div>
        </div>
    );
};
