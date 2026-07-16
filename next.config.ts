import { withPayload } from '@payloadcms/next/withPayload';
import { MEDIA_PREFIX } from './src/constants/application.constants';

import type { NextConfig } from 'next';

const ONE_YEAR_SECONDS = 31536000;
const MEDIA_FILE_ROUTE = '/api/media/file/:path*';
const MEDIA_FILE_PATHNAME = '/api/media/file/**';
const MEDIA_FILE_SEARCH = `?prefix=${MEDIA_PREFIX}`;
const STATIC_IMAGE_PATHNAME = '/images/**';
const NO_SEARCH = '';
const IMMUTABLE_CACHE_CONTROL = `public, max-age=${ONE_YEAR_SECONDS}, immutable`;

const nextConfig: NextConfig = {
    reactStrictMode: true,
    reactCompiler: true,
    experimental: {
        globalNotFound: true,
    },
    images: {
        minimumCacheTTL: ONE_YEAR_SECONDS,
        localPatterns: [
            {
                pathname: STATIC_IMAGE_PATHNAME,
                search: NO_SEARCH,
            },
            {
                pathname: MEDIA_FILE_PATHNAME,
                search: MEDIA_FILE_SEARCH,
            },
        ],
    },
    headers() {
        return Promise.resolve([
            {
                source: MEDIA_FILE_ROUTE,
                headers: [
                    {
                        key: 'Cache-Control',
                        value: IMMUTABLE_CACHE_CONTROL,
                    },
                ],
            },
        ]);
    },
};

export default withPayload(nextConfig);
