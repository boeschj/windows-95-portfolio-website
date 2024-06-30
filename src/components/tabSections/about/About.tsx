import Image from 'next/image';
import React from 'react';
import { TabContentLayout } from '../../welcomeView/TabContentLayout';
import { aboutConfig } from '../../../config/aboutMe';
import { IMAGE_PATH } from '../../../constants/application.constants';

const IMAGE_SIZE_PX = 300;

export const About: React.FC = (): JSX.Element => {
    return (
        <TabContentLayout className="flex h-auto grow flex-col overflow-auto">
            <div className="flex w-full flex-col items-center justify-center md:h-screen">
                <div className="m-4">
                    <Image
                        src={`${IMAGE_PATH}/portfolioPhoto.png`}
                        alt="It's me!"
                        width={IMAGE_SIZE_PX}
                        height={IMAGE_SIZE_PX}
                        className="size-[150px] object-contain xs:size-[200px] md:size-[300px]"
                    />
                </div>
                <div className="flex w-full flex-col justify-center p-4 md:px-6">
                    <div className="space-y-6 text-center text-lg sm:text-xl md:text-2xl">
                        <p>{aboutConfig.p1}</p>
                        <p>{aboutConfig.p2}</p>
                        <p>{aboutConfig.p3}</p>
                    </div>
                </div>
            </div>
        </TabContentLayout>
    );
};
