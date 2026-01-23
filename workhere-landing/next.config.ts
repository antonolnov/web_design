import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/web_design/workhere-landing',
  assetPrefix: '/web_design/workhere-landing/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
