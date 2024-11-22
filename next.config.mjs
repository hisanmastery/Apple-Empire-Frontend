/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "static.thenounproject.com",
      "t4.ftcdn.net",
      "example.com",
      "snapstore.nusaiba.com.bd",
      "img.freepik.com",
      "www.iamekarting.com",
      "i.ibb.co",
      "i.ibb.co.com",
      "34.121.66.25",
      "cdn.pixabay.com" 
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
