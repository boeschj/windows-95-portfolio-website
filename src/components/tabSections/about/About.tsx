import Image from 'next/image';
import React from 'react';
import { TabContentLayout } from '../../welcomeView/TabContentLayout';
import { aboutConfig } from '../../../config/aboutMe';

export const About: React.FC = (): JSX.Element => {
    return (
        <TabContentLayout className="h-auto flex flex-col overflow-auto grow">
            <div className="flex flex-col items-center justify-center w-full h-screen">
                <div className="flex-shrink-0 m-4">
                    <Image
                        src={'/images/portfolioPhoto.png'}
                        alt="It's me!"
                        width={300}
                        height={300}
                        className="w-auto h-auto max-w-full max-h-[300px] object-contain"
                    />
                </div>
                <div className="w-full flex flex-col justify-center p-4 md:px-6">
                    <div className="text-lg sm:text-xl md:text-2xl space-y-6 text-center">
                        <p>{aboutConfig.p1}</p>
                        <p>{aboutConfig.p2}</p>
                        <p>{aboutConfig.p3}</p>
                    </div>
                </div>
            </div>
        </TabContentLayout>
    );
};
