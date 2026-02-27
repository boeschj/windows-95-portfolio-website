import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    server: {
        DATABASE_URL: z.url(),
        PAYLOAD_SECRET: z.string().min(1),
        R2_BUCKET: z.string().min(1),
        R2_ENDPOINT: z.url(),
        R2_ACCESS_KEY_ID: z.string().min(1),
        R2_SECRET_ACCESS_KEY: z.string().min(1),
    },
    experimental__runtimeEnv: {},
});
