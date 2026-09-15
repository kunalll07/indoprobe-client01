/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // `next build`'s bundled ESLint integration is deprecated (removed in
    // Next.js 16) and is incompatible with this project's ESLint version.
    // Lint separately via `npm run lint`, which runs the ESLint CLI directly.
    ignoreDuringBuilds: true,
  },
  // Ensure trailing slashes are handled consistently
  trailingSlash: false,
  // Optimize for Vercel deployment
  swcMinify: true,
  // Handle static asset optimization
  images: {
    unoptimized: false,
  },
};

module.exports = nextConfig;
