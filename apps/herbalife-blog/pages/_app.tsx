import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/header';
import '../styles/styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to herbalife-blog!</title>
      </Head>
      <Header />
      <div className="app">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
