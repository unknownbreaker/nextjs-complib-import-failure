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
How to import the named exports from the component, like types and enums.


### FAILURES

* **Apply SASS loader**: [Sass Support](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support)'s documentation suggests adding `sass` package and adding `sassOptions` to `next.config.js`.

* **Apply style, css, and sass loaders through Webpack config**: This is just the more manual way of doing what Next.js already does for you--it results in the same error.
