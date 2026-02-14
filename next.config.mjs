const nextConfig = {
  webpack: (config) => { ... },

  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  output: "standalone",

  experimental: {
    serverMinification: false,
  },
};
