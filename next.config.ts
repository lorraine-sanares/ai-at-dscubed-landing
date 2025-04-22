import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // This will bypass the image optimization step
  }
};

export default nextConfig;
