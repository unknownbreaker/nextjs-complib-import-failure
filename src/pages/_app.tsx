import '@/styles/globals.css'
import dynamic from 'next/dynamic';

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
