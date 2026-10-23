import type { CollectionConfig } from 'payload';

const ALLOWED_IMAGE_MIME_TYPES = [
    'image/png',
    'image/jpeg',
    'image/gif',
    'image/webp',
    'image/avif',
];

export const Media: CollectionConfig = {
    slug: 'media',
    upload: {
        mimeTypes: ALLOWED_IMAGE_MIME_TYPES,
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
