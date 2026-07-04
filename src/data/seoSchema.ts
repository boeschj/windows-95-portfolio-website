import { SITE_URL } from '@/constants/application.constants';
import { links } from '@/config/aboutMe';
import { BLOG_AUTHOR, postDescription } from './postView';

import type { Post } from '@/payload-types';

const SCHEMA_CONTEXT = 'https://schema.org';
const AUTHOR_JOB_TITLE = 'Software Engineer';

export const PERSON_SCHEMA: Record<string, unknown> = {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Person',
    name: BLOG_AUTHOR,
    url: SITE_URL,
    jobTitle: AUTHOR_JOB_TITLE,
    sameAs: [links.github, links.linkedIn],
};

export function buildPostSchema(post: Post): Record<string, unknown> {
    const postUrl = `${SITE_URL}/blog/${post.slug}`;

    return {
        '@context': SCHEMA_CONTEXT,
        '@graph': [
            {
                '@type': 'BlogPosting',
                headline: post.title,
                description: postDescription(post),
                datePublished: post.publishedAt ?? post.createdAt,
                dateModified: post.updatedAt,
                author: { '@type': 'Person', name: BLOG_AUTHOR, url: SITE_URL },
                mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
                url: postUrl,
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: SITE_URL,
                    },
                    {
                        '@type': 'ListItem',
                        position: 2,
                        name: 'Blog',
                        item: `${SITE_URL}/?tab=blog`,
                    },
                    {
                        '@type': 'ListItem',
                        position: 3,
                        name: post.title,
                        item: postUrl,
                    },
                ],
            },
        ],
    };
}
