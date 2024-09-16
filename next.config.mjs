/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    //domains: ["maccity.com.my", "www.peacocks.com.bd", "i.ibb.co","png.pngtree.com", "d61s2hjse0ytn.cloudfront.net", "i.ibb.co.com"],
    remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'appleempirebd.com',
//         port: '',
//         pathname: '/wp-content/uploads/2023/07/**',
//       },
//     ],
//   },
// }

export default nextConfig;
