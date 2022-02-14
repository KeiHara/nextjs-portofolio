import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../comps/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className="flex w-full justify-center bg-neutral-300 dark:bg-zinc-900">
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
