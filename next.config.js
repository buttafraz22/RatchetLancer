/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/buttafraz22",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "https://web.facebook.com/ButtAfraz-26",
        permanent: true,
      },
      {
        source: "/youtube",
        destination: "https://www.youtube.com/channel/UCZgxbfhIWfhYua7iPzxiLEA",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://instagram.com/buttafraz",
        permanent: true
      },
      {
        source: "/npm",
        destination: "#",
        permanent: true
      }
    ];
  },
};

module.exports = nextConfig
