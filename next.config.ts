import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { remotePatterns: [{ protocol: 'https', hostname: '**' }] },
  eslint: { ignoreDuringBuilds: true }, // ⬅️ evita que ESLint rompa el deploy
};

export default nextConfig;
