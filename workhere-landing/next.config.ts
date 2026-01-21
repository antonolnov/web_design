import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/web_design',
  assetPrefix: '/web_design/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
