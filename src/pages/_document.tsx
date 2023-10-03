import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

type Props = {
  pageProps: any
};

class MyDocument extends Document<Props> {
  render(): JSX.Element {
    return (
      <Html style={{ fontSize: '62.5%' }}>
        <Head>
          <meta name="theme-color" />
          <meta name="keywords" content="sora union assignment" />
          <meta name="description" content="sora union assignment" />
          <meta charSet="utf-8" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
