import { SITE_AUTHOR, SITE_URL } from '@/constants/application.constants';
import { postDescription } from './postView';
import { experienceDescription } from './experienceView';

import type { Experience, Post } from '@/payload-types';

const SCHEMA_CONTEXT = 'https://schema.org';
const AUTHOR_JOB_TITLE = 'Software Engineer';

interface BreadcrumbSection {
    name: string;
    tab: string;
}

const BLOG_SECTION: BreadcrumbSection = { name: 'Blog', tab: 'blog' };
const EXPERIENCE_SECTION: BreadcrumbSection = {
    name: 'Experience',
    tab: 'experience',
};

const AUTHOR_NODE = { '@type': 'Person', name: SITE_AUTHOR, url: SITE_URL };

export function buildPersonSchema(
    githubUrl: string,
    linkedinUrl: string
): Record<string, unknown> {
    return {
        '@context': SCHEMA_CONTEXT,
        '@type': 'Person',
        name: SITE_AUTHOR,
        url: SITE_URL,
        jobTitle: AUTHOR_JOB_TITLE,
        sameAs: [githubUrl, linkedinUrl],
    };
}

export function buildExperienceSchema(
    experience: Experience
): Record<string, unknown> {
    const experienceUrl = `${SITE_URL}/experience/${experience.slug}`;

    return {
        '@context': SCHEMA_CONTEXT,
        '@graph': [
            {
                '@type': 'Article',
                headline: `${experience.company} — ${experience.role}`,
                description: experienceDescription(experience),
                datePublished: experience.startDate,
                dateModified: experience.updatedAt,
                author: AUTHOR_NODE,
                mainEntityOfPage: { '@type': 'WebPage', '@id': experienceUrl },
                url: experienceUrl,
            },
            buildBreadcrumbs(
                EXPERIENCE_SECTION,
                experience.company,
                experienceUrl
            ),
        ],
    };
}

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
                author: AUTHOR_NODE,
                mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
                url: postUrl,
            },
            buildBreadcrumbs(BLOG_SECTION, post.title, postUrl),
        ],
    };
}

function buildBreadcrumbs(
    section: BreadcrumbSection,
    itemName: string,
    itemUrl: string
): Record<string, unknown> {
    return {
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            {
                '@type': 'ListItem',
                position: 2,
                name: section.name,
                item: `${SITE_URL}/?tab=${section.tab}`,
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: itemName,
                item: itemUrl,
            },
        ],
    };
}
