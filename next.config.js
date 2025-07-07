/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['images.ctfassets.net'],
  },
  // 🔒 Ensures dynamic routes like [...slug] are allowed (not static-export mode)
  output: undefined,
};

module.exports = nextConfig;
