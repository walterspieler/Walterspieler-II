
/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    domains: [],
    unoptimized: true,
  },
  assetPrefix: isProd ? '/Walterspieler-II/' : '',
}

module.exports = nextConfig
