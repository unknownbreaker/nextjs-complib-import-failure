import TopNav from './TopNav';

type Props = {
  children: any;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <TopNav />
      <main>{children}</main>
    </>
  );
}
