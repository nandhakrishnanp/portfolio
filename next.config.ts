import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allow all domains
      },
      {
        protocol: "http",
        hostname: "**", // Allow all domains (non-secure)
      },
    ],
  // Allow all image formats including AVIF, WebP, and others
  },
};

export default nextConfig;
