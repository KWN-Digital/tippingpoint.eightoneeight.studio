module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.it',
      },
      {
        protocol: 'https',
        hostname: 'ucarecdn.com',
      },
    ],
  },
  rewrites: async () => [
    {
      source: '/healthcheck',
      destination: '/api/health',
    },
    {
      source: '/manifest.json',
      destination: '/api/manifest.json',
    },
    {
      source: '/siteman.xml',
      destination: '/api/sitemap.xml',
    },
    {
      source: '/robots.txt',
      destination: '/api/robots.txt',
    },
    {
      source: '/favicon/:path*',
      destination: '/public/favicon/:path*',
    },
  ],
}
