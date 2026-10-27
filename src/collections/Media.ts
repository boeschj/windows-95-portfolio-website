import type { CollectionConfig } from 'payload';

const ALLOWED_UPLOAD_MIME_TYPES = [
    'image/png',
    'image/jpeg',
    'image/gif',
    'image/webp',
    'image/avif',
    'video/mp4',
    'video/webm',
];

const UPLOAD_GUIDANCE =
    "PNG, JPEG, GIF, WebP, AVIF, MP4, or WebM. Export screen recordings as MP4: they're a fraction of a GIF's size and start playing right away.";

export const Media: CollectionConfig = {
    slug: 'media',
    admin: {
        description: UPLOAD_GUIDANCE,
    },
    upload: {
        mimeTypes: ALLOWED_UPLOAD_MIME_TYPES,
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
