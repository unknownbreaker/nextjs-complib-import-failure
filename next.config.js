const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['src', 'node_modules/@kargo/component-library-react.krg-shared/dist/styles'].map(dir => path.join(__dirname, dir)),
  },
}

module.exports = nextConfig
