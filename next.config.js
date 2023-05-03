// const withTM = require('next-transpile-modules')([
//   '@kargo/component-library-react.krg-shared'
// ]);

const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = withTM(nextConfig);;

// module.exports = {
//   transpilePackages: ['@acme/ui', 'lodash-es'],
// }

module.exports = nextConfig;