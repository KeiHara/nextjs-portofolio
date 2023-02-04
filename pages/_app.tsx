import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../comps/Layout";
import { AnimatePresence } from "framer-motion";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <>
          <AnimatePresence exitBeforeEnter initial={true}>
          <div className="mb-4 flex w-full justify-center">
            <Component {...pageProps} />
          </div>
          </AnimatePresence>
          <Analytics />
        </>
      </Layout>
  );
}

export default MyApp;
