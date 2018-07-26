import React from "react";
import App, { Container } from "next/app";

import { Layout } from "../src/components";

import Link from "next/link";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}
