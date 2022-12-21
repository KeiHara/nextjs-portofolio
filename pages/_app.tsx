import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../comps/Layout";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <Layout>
        <div className="mb-4 flex w-full justify-center">
          <Component {...pageProps} />
        </div>
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
