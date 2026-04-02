/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'out',
  assetPrefix: '.',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig