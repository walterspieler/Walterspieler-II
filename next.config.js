/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: true,
  },
  assetPrefix: isProd ? '/Walterspieler-II/' : '',
};

module.exports = nextConfig;
