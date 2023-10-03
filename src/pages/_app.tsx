import React from 'react';
import 'tailwindcss/tailwind.css';
import App from 'next/app';

type Props = {
  Component: any,
  pageProps: any,
};

class MyApp extends App<Props> {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <Component {...pageProps} />
    );
  }
}

export default MyApp;
