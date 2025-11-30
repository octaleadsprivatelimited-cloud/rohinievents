/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  async redirects() {
    return [
      // Redirect removed interior design pages to services page
      {
        source: '/residential-design',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/commercial-design',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/space-planning',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/color-consultation',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/furniture-selection',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/renovation-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/interior-design-hyderabad',
        destination: '/services',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
