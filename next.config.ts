import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // remove later. only for placeholder
    dangerouslyAllowSVG: true,
    remotePatterns: [
      // allows images from all sources
      {
        protocol: 'https',
        hostname: '*',
      }
    ]
  },
  experimental: {
    ppr: "incremental",
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  }
};

export default nextConfig;
