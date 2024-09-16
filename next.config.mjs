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

  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'appleempirebd.com',
      port: '',
     // pathname: '/wp-content/uploads/2023/07/**',
    },
    {
      protocol: 'https',
      hostname: 'www.peacocks.com.bd',
      port: '',
     // pathname: '/wp-content/uploads/2023/07/**',
    },
    // {
    //   protocol: 'https',
    //   hostname: 'i.ibb.co.com',
    //   port: '',
    //  // pathname: '/wp-content/uploads/2023/07/**',
    // },
    {
      protocol: 'https',
      hostname: 'png.pngtree.com',
      port: '',
     // pathname: '/wp-content/uploads/2023/07/**',
    },
    {
      protocol: 'https',
      hostname: 'd61s2hjse0ytn.cloudfront.net',
      port: '',
     // pathname: '/wp-content/uploads/2023/07/**',
    },
    {
      protocol: 'https',
      hostname: 'i.ibb.co.com',
      port: '',
     // pathname: '/wp-content/uploads/2023/07/**',
    },
  ],
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
