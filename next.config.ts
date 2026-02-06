import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.onetopup.in',
      },
      {
        protocol: 'https',
        hostname: 'api.zorotopup.com',
      },
      {
        protocol: 'https',
        hostname: 'api.topupmania.com',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
