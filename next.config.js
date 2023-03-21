/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [82, 110, 140, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]
  },
  i18n: {
    locales: ["de"],
    defaultLocale: "de"
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      },
      {
        source: '/profil',
        destination: '/',
        permanent: true
      },
      {
        source: '/maler-lackierer',
        destination: '/',
        permanent: true
      },
      {
        source: '/sterne',
        destination: '/',
        permanent: true
      },
      {
        source: '/angebote',
        destination: '/',
        permanent: true
      },
      {
        source: '/kontakt',
        destination: '/',
        permanent: true
      },
      {
        source: '/partnerlinks',
        destination: '/',
        permanent: true
      },
      {
        source: '/impressum',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
