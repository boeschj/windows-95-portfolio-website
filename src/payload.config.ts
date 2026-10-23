import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { postgresAdapter } from '@payloadcms/db-postgres';
import {
    BlocksFeature,
    CodeBlock,
    lexicalEditor,
} from '@payloadcms/richtext-lexical';
import { s3Storage } from '@payloadcms/storage-s3';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { Experiences } from './collections/Experiences';
import { Media } from './collections/Media';
import { Posts } from './collections/Posts';
import { Users } from './collections/Users';
import { About } from './globals/About';
import { SiteSettings } from './globals/SiteSettings';
import {
    MEDIA_PREFIX,
    SITE_URL,
    WWW_SITE_URL,
} from './constants/application.constants';
import {
    CODE_BLOCK_SLUG,
    CODE_LANGUAGES,
    DEFAULT_CODE_LANGUAGE,
} from './config/codeLanguages';
import { env } from './env';

import type { SharpInput, SharpOptions } from 'sharp';

const currentDir = dirname(fileURLToPath(import.meta.url));

const IS_DEPLOYED_ON_VERCEL = Boolean(env.VERCEL);
const DEPLOYMENT_HOSTNAMES = [env.VERCEL_URL, env.VERCEL_BRANCH_URL];
const DEPLOYMENT_ORIGINS =
    DEPLOYMENT_HOSTNAMES.filter(isDefined).map(toHttpsOrigin);
const ALLOWED_ADMIN_ORIGINS = [SITE_URL, WWW_SITE_URL, ...DEPLOYMENT_ORIGINS];
const CSRF_ORIGINS = IS_DEPLOYED_ON_VERCEL ? ALLOWED_ADMIN_ORIGINS : [];

const MAX_INPUT_PIXELS_ACROSS_ALL_FRAMES = 1_000_000_000;

const codeBlock = CodeBlock({
    slug: CODE_BLOCK_SLUG,
    languages: CODE_LANGUAGES,
    defaultLanguage: DEFAULT_CODE_LANGUAGE,
});

export default buildConfig({
    editor: lexicalEditor({
        features: ({ defaultFeatures }) => [
            ...defaultFeatures,
            BlocksFeature({ blocks: [codeBlock] }),
        ],
    }),
    collections: [Users, Posts, Experiences, Media],
    globals: [SiteSettings, About],
    secret: env.PAYLOAD_SECRET,
    csrf: CSRF_ORIGINS,
    db: postgresAdapter({
        pool: {
            connectionString: env.DATABASE_URL,
        },
        push: false,
    }),
    sharp: sharpWithAnimationPixelLimit,
    plugins: [
        s3Storage({
            bucket: env.R2_BUCKET,
            config: {
                endpoint: env.R2_ENDPOINT,
                region: 'auto',
                forcePathStyle: true,
                credentials: {
                    accessKeyId: env.R2_ACCESS_KEY_ID,
                    secretAccessKey: env.R2_SECRET_ACCESS_KEY,
                },
            },
            collections: {
                media: {
                    disableLocalStorage: true,
                    prefix: MEDIA_PREFIX,
                },
            },
        }),
    ],
    typescript: {
        outputFile: dirname(currentDir) + '/src/payload-types.ts',
    },
    admin: {
        importMap: {
            baseDir: currentDir,
        },
    },
});

function sharpWithAnimationPixelLimit(
    input?: SharpInput,
    options?: SharpOptions
) {
    return sharp(input, {
        ...options,
        limitInputPixels: MAX_INPUT_PIXELS_ACROSS_ALL_FRAMES,
    });
}

function isDefined(value: string | undefined): value is string {
    return value !== undefined;
}

function toHttpsOrigin(hostname: string): string {
    return `https://${hostname}`;
}
