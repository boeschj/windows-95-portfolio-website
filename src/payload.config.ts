import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { s3Storage } from '@payloadcms/storage-s3';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { Media } from './collections/Media';
import { Posts } from './collections/Posts';
import { Users } from './collections/Users';
import { env } from './env';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default buildConfig({
    editor: lexicalEditor(),
    collections: [Users, Posts, Media],
    secret: env.PAYLOAD_SECRET,
    db: postgresAdapter({
        pool: {
            connectionString: env.DATABASE_URL,
        },
    }),
    sharp,
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
                    prefix: 'blog-assets',
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
