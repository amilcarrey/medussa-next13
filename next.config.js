/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      appDir: true,
      typedRoutes:true,
   },
   reactStrictMode: true,
   images: {
      domains: ['medusa-public-images.s3.eu-west-1.amazonaws.com', 'localhost'],
   },
}

module.exports = nextConfig
