import type { Access } from 'payload';

export const PUBLISH_STATUS = {
    DRAFT: 'draft',
    PUBLISHED: 'published',
} as const;

export const PUBLISH_STATUS_OPTIONS = [
    { label: 'Draft', value: PUBLISH_STATUS.DRAFT },
    { label: 'Published', value: PUBLISH_STATUS.PUBLISHED },
];

export const readPublishedOrAuthenticated: Access = ({ req }) => {
    const isAuthenticated = Boolean(req.user);

    if (isAuthenticated) {
        return true;
    }

    return {
        status: {
            equals: PUBLISH_STATUS.PUBLISHED,
        },
    };
};
