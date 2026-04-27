/** @type {import('next').NextConfig} */
// CDN отключён: CORS/404 на Selectel. Включить: NEXT_PUBLIC_CDN_URL=https://...
const CDN_URL = process.env.NEXT_PUBLIC_CDN_URL || ''

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  assetPrefix: CDN_URL,
  async redirects() {
    // Один канонический URL фида — иначе дубликат контента (GSC: другой canonical)
    return [
      {
        source: '/feeds/rooms.yml',
        destination: '/feeds/rooms',
        permanent: true,
      },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: 'https', hostname: 'framerusercontent.com' },
    ],
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    return [
      // CORS для CDN: браузер с priboy1.ru запрашивает шрифты/статику с selcdn.net
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://priboy1.ru' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.(jpg|jpeg|png|gif|ico|svg|webp|avif|woff|woff2|ttf|eot)',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://priboy1.ru' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.(css|js)',
        headers: [
          { key: 'Access-Control-Allow-Origin', value: 'https://priboy1.ru' },
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
}

export default nextConfig
