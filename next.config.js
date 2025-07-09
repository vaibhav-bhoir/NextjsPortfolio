/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
};

module.exports = nextConfig;
