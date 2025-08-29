// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",  // ya "http"
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
  },
};
