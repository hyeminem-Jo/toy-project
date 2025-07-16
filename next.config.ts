import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: '',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/assets': require('path').resolve(__dirname, 'public/assets'),
    };
    return config;
  },
};

export default nextConfig;
