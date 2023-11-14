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
  ],
}
