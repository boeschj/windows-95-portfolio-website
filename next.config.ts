import { withPayload } from '@payloadcms/next/withPayload';
import {
    MEDIA_ORIGIN,
    MEDIA_PREFIX,
} from './src/constants/application.constants';

import type { NextConfig } from 'next';

const ONE_YEAR_SECONDS = 31536000;
const MEDIA_URL_PATTERN = new URL(`${MEDIA_ORIGIN}/${MEDIA_PREFIX}/**`);
const STATIC_IMAGE_PATHNAME = '/images/**';
const NO_SEARCH = '';
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
    { key: 'X-Content-Type-Options', value: 'nosniff' },
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
        remotePatterns: [MEDIA_URL_PATTERN],
        localPatterns: [
            {
                pathname: STATIC_IMAGE_PATHNAME,
                search: NO_SEARCH,
            },
        ],
    },
    headers() {
        return Promise.resolve([
            {
                source: ALL_ROUTES,
                headers: SECURITY_HEADERS,
            },
        ]);
    },
};

export default withPayload(nextConfig);
