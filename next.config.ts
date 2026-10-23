import { withPayload } from '@payloadcms/next/withPayload';
import {
    HOME_ROUTE,
    MEDIA_ORIGIN,
    MEDIA_PREFIX,
} from './src/constants/application.constants';
import { LEGACY_TAB_QUERY_PARAM, TABS } from './src/config/tabs';

import type { NextConfig } from 'next';
import type { Tab } from './src/config/tabs';

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

const LEGACY_TAB_REDIRECTS = TABS.filter(hasOwnPath).map(toLegacyTabRedirect);

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
    redirects() {
        return Promise.resolve(LEGACY_TAB_REDIRECTS);
    },
};

export default withPayload(nextConfig);

function hasOwnPath(tab: Tab): boolean {
    return tab.href !== HOME_ROUTE;
}

function toLegacyTabRedirect(tab: Tab) {
    return {
        source: HOME_ROUTE,
        has: [
            {
                type: 'query' as const,
                key: LEGACY_TAB_QUERY_PARAM,
                value: tab.route,
            },
        ],
        destination: tab.href,
        permanent: true,
    };
}
