import dynamic from 'next/dynamic';
import '@/styles/globals.css';
import '../../public/styles/krg.scss';

// Components
const KrgProvider = dynamic(() => import('@kargo/component-library-react.krg-shared').then((mod) => mod.KrgProvider), {
  ssr: false,
});

// Types
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <KrgProvider>
      <Component {...pageProps} />
    </KrgProvider>
  )
}
