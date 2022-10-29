/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["images.unsplash.com", "randomuser.me", "cdn.dribbble.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
