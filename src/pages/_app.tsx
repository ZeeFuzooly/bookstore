import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { createTheme, MantineProvider } from '@mantine/core';

// const theme = createTheme({
//     fontFamily: 'Open Sans, sans-serif',
//     primaryColor: 'cyan',
//   });
  

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MantineProvider>
  );
}
