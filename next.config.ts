import { withPayload } from '@payloadcms/next/withPayload';

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    reactCompiler: true,
    experimental: {
        globalNotFound: true,
    },
};

export default withPayload(nextConfig);
