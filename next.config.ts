import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["picsum.photos"], // Use picsum.photos instead of via.placeholder.com
    unoptimized: process.env.NODE_ENV === 'development', // Optional: Disable optimization in development
  },
};

export default nextConfig;