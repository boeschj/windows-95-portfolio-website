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
const ALL_ROUTES = '/:path*';
const CONTENT_SECURITY_POLICY = [
    "frame-ancestors 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
].join('; ');
const PERMISSIONS_POLICY =
    'camera=(), microphone=(), geolocation=(), browsing-topics=()';

const SECURITY_HEADERS = [
    { key: 'Content-Security-Policy', value: CONTENT_SECURITY_POLICY },
    { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    { key: 'Permissions-Policy', value: PERMISSIONS_POLICY },
];

const nextConfig: NextConfig = {
    poweredByHeader: false,
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
                source: ALL_ROUTES,
                headers: SECURITY_HEADERS,
            },
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
