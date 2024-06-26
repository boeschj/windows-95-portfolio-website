import { Dispatch, SetStateAction } from 'react';
import { TabContentContainer } from './TabContentContainer';
import { LinkButtonRow } from '../buttons/LinkButtonRow';
import { Header } from './Header';

export const WelcomeView: React.FC = (): JSX.Element => {
    return (
        <div className="win95-border-raised h-full pb-6 bg-windows-gray">
            <Header />
            <div className="flex grow justify-between flex-col p-2 md:p-5 gap-5 h-full">
                <TabContentContainer />
                <LinkButtonRow />
            </div>
        </div>
    );
};
