import { Header, Footer } from ".";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  },
  header: {
    flex: "0 0 50px",
    backgroundColor: "silver"
  },
  center: {
    flex: "1 0 auto",
    backgroundColor: "white",
    maxWidth: "800px",
    width: "80%",
    margin: "20px auto 0 auto"
  },
  footer: {
    flex: "0 0 50px",
    backgroundColor: "silver"
  }
};

const Layout = ({ children }) => (
  <div style={styles.container}>
    <div style={styles.header}>
      <Header />
    </div>
    <div className="panel" style={styles.center}>
      {children}
    </div>
    <div style={styles.footer}>
      <Footer />
    </div>
  </div>
);

export default Layout;
