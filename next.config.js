const withTM = require('next-transpile-modules')([
  '@kargo/component-library-react.krg-shared-kargo-test',
  '@kargo/component-library-react.krg-header-kargo-test'
]);

const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withTM(nextConfig);;
