import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    domains: [], // Add any external image domains you need
    unoptimized: false,
  },
};

export default nextConfig;
