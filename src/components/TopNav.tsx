// import dynamic from 'next/dynamic';
// const KrgHeader = dynamic(() => import('@kargo/component-library-react.krg-header-kargo-test'), {
//   ssr: false,
// });

import KrgHeader from '@kargo/component-library-react.krg-header-kargo-test';

export default function TopNav(props: any) {
  return <KrgHeader theme={KrgHeader.THEME_ENUM.v2} headerType={KrgHeader.HEADER_TYPE_ENUM.pegasus} />;
}
