/** @type {import('next').NextConfig} */

const nextConfig = {
  transpilePackages: ["next-international", "international-types"],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
