import KrgHeader from '@kargo/component-library-react.krg-header-kargo-test';

export default function TopNav(props: any) {
  return (
    <KrgHeader
      productName={'demo'}
      position={KrgHeader.POSITION_ENUM.absolute}
      theme={KrgHeader.THEME_ENUM.v2}
      onLogoClick={() => console.info}
    />
  );
}
