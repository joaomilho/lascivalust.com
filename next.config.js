/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // basePath: "/gh-pages",
  async redirects() {
    return [
      {
        source: "/twitter",
        destination: "https://twitter.com/lascivalust",
        permanent: false,
      },
      {
        source: "/linktree",
        destination: "https://linktr.ee/lascivalust",
        permanent: false,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/mistress_lasciva",
        permanent: false,
      },
      {
        source: "/ig",
        destination: "https://www.instagram.com/mistress_lasciva",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
