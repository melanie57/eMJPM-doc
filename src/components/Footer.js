import Link from "next/link";

const Footer = () => (
  <footer className="footer">
    <div style={{ textAlign: "center" }}>
      <Link href="https://emjpm.num.beta.gouv.fr">
        <a style={{ color: "white" }}>emjpm.beta.gouv.fr</a>
      </Link>
    </div>
  </footer>
);

export default Footer;
