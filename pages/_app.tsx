import { AppProps } from 'next/app';
import Layout from '../hoc/LayOut';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
