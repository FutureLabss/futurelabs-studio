/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack: true,
  webpack: (config) => {
    config.resolve.fallback = {fs: false}
    return config
  },
}

module.exports = nextConfig
