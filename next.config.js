/** @type {import('next').NextConfig} */

const nextConfig = {
    typescript: {
      ignoreBuildErrors: false // workaround with slotprops data type error, in dev mode should be -> false
    },

    output: 'standalone', 
    distDir: "build",
  };
  
  module.exports = nextConfig;
  