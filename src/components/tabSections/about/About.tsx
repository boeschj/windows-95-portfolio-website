import Image from 'next/image';
import { Win95ScrollArea } from '@/components/Win95ScrollArea';
import { PostArticle } from '@/components/blog/PostArticle';
import { getAboutPost } from '@/data/posts';
import { IMAGE_PATH } from '@/constants/application.constants';

const PHOTO_SIZE_PX = 300;

export async function About() {
    const post = await getAboutPost();

    return (
        <div className="bg-windows-gray flex min-h-0 flex-1 flex-col">
            <Win95ScrollArea viewportClassName="h-full w-full bg-white px-6 py-8 md:px-12 md:py-9">
                <div className="mb-6 flex justify-center md:mb-8">
                    <Image
                        src={`${IMAGE_PATH}/portfolio-photo.png`}
                        alt="It's me!"
                        width={PHOTO_SIZE_PX}
                        height={PHOTO_SIZE_PX}
                        preload
                        className="xs:size-50 size-37.5 object-contain md:size-75"
                    />
                </div>
                <PostArticle content={post?.content ?? null} />
            </Win95ScrollArea>
        </div>
    );
}
