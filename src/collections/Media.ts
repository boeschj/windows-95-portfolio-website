import type { CollectionConfig } from 'payload';

const ALLOWED_IMAGE_MIME_TYPES = [
    'image/png',
    'image/jpeg',
    'image/gif',
    'image/webp',
    'image/avif',
];

const MAX_INPUT_PIXELS_ACROSS_ALL_FRAMES = 1_000_000_000;

export const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        mimeTypes: ALLOWED_IMAGE_MIME_TYPES,
        constructorOptions: {
            limitInputPixels: MAX_INPUT_PIXELS_ACROSS_ALL_FRAMES,
        },
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
        },
    ],
};
