import '../styles/globals.css';
import Layout from '../components/layout/layout';

import { Provider } from 'next-auth/client';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};

export default MyApp;
