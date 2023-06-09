import dynamic from 'next/dynamic';
const KrgHeader = dynamic(() => import('@kargo/component-library-react.krg-header'), {
  ssr: false,
});

export default function TopNav(props: any) {
  return <KrgHeader />;
}
