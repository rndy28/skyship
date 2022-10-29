/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.unsplash.com", "randomuser.me", "cdn.dribbble.com", "cdn.sanity.io"],
  },
};

module.exports = nextConfig;
