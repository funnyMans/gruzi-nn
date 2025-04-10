import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'jkkm.info',
        port: '',
        pathname: '/ui/images/awards/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-1502980426475-b83966705988',
        search:
          '?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/api/graphql',
        headers: [
          {
            key: 'access-control-allow-origin',
            value: '*',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
