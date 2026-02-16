import Image from 'next/image';
import { TabContentLayout } from '@/components/welcomeView/TabContentLayout';
import { aboutConfig } from '@/config/aboutMe';
import { IMAGE_PATH } from '@/constants/application.constants';

const IMAGE_SIZE_PX = 300;

export function About() {
    return (
        <TabContentLayout className="flex h-auto grow flex-col overflow-auto">
            <div className="flex w-full flex-col items-center justify-center md:min-h-full">
                <div className="m-4">
                    <Image
                        src={`${IMAGE_PATH}/portfolio-photo.png`}
                        alt="It's me!"
                        width={IMAGE_SIZE_PX}
                        height={IMAGE_SIZE_PX}
                        className="xs:size-[200px] size-[150px] object-contain md:size-[300px]"
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
}
