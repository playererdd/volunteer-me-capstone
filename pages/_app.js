import '../style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import { Helmet } from 'react-helmet';

function MyApp({ Component, pageProps}) {
  return (
    <>
      <Helmet>
        <title>VolunterMe!</title>
      </Helmet>
      {/* Add the favicon */}
      <Head>
        <link rel="shortcut icon" href="https://static.thenounproject.com/png/3637517-200.png" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp