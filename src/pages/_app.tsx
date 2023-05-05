import '@/styles/globals.css';
import '../../public/styles/krg.scss';

import { KrgProvider } from '@kargo/component-library-react.krg-shared-kargo-test';
import Layout from '../components/Layout';

// Types
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <KrgProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </KrgProvider>
  )
}
