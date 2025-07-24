import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  /* config options here */
  assetPrefix: '',
  images: {
    remotePatterns: [
      new URL('https://ejxzslfkaxsbcabuiqzs.supabase.co/storage/v1/object/public/**'),
      new URL('https://image.tmdb.org/t/p/**'),
      new URL('http://k.kakaocdn.net/**'),
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/assets': path.resolve(__dirname, 'public/assets'),
    };
    return config;
  },
};

export default nextConfig;
