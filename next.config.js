/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/public/index_card_new.html",
        destination: "/pages/:paymentGateway",
      }
    ]
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
};

module.exports = {
  // rewrites: async () => [
  //   {
  //     source: "/public/index_card_new.html",
  //     destination: "/pages/paymentGateway/index.js",
  //   },
  // ],
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  future: { webpack5: true },
  trailingSlash: true,
};
