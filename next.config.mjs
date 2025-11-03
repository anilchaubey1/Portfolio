/** @type {import('next').NextConfig} */
const nextConfig = {
  // Export static HTML with `next export` (produces `out/`)
  output: 'export',
  // Use trailing slashes so exported pages become directories with index.html
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
