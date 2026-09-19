/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // https://picsum.photos/seed/javascript/800/500
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '**',
        search: '',
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
