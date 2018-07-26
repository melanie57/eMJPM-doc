import React from "react";
import App, { Container } from "next/app";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  header: {
    flex: "0 0 50px",
    backgroundColor: "silver"
  },
  menu: {
    flex: "0 0 30px",
    backgroundColor: "#ddd"
  },
  center: {
    flex: "1 0 auto",
    backgroundColor: "white",
    maxWidth: "800px",
    width: "80%",
    margin: "0 auto"
  },
  footer: {
    flex: "0 0 50px",
    backgroundColor: "silver"
  }
};

const Layout = ({ children }) => (
  <div style={styles.container}>
    <div style={styles.header}>HEADER</div>
    <div style={styles.menu}>MENU</div>
    <div style={styles.center}>{children}</div>
    <div style={styles.footer}>FOOTER</div>
  </div>
);

export default class MyApp extends App {
  render() {
    //console.log("MyApp", this.props);
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
