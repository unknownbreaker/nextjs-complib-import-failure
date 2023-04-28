# Kargo-Next.js Package Error Demo
## Setup

Install the packages and build the app.

```bash
yarn
yarn build
```

## Result

<img width="706" alt="image" src="https://user-images.githubusercontent.com/6026454/233450178-9d9ff11b-2e25-4c21-8d39-e8fb16a18b98.png">

## Troubleshooting Attempts

### WORKAROUND

**Setup**

Install next transpile modules
```bash
yarn add next-transpile-modules
```

Update `next.config.js`
```javascript
// Apply transpiler to component package
const withTM = require('next-transpile-modules')([
  '@kargo/component-library-react.krg-shared'
]);

const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// Wrap the export
module.exports = withTM(nextConfig);;
```


**Dynamic imports**

```javascript
import dynamic from 'next/dynamic';

const KrgHeader = dynamic(() => import('@kargo/component-library-react.krg-header'), {
  ssr: false,
});

export default function TopNav(props: any) {
  return <KrgHeader />;
}
```
**Challenges**

* How to import the named exports from the component, like the types and enums?


### OTHER ATTEMPTS (UNSUCCESSFUL)

* **Apply SASS loader**: [Sass Support](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support)'s documentation suggests adding `sass` package and adding `sassOptions` to `next.config.js`.

* **Apply style, css, and sass loaders through Webpack config**: This is just the more manual way of doing what Next.js already does for you--it results in the same error.
