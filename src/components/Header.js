import Link from "next/link";

const Header = () => (
  <header className="navbar">
    <div className="navbar__container" style={{ display: "flex" }}>
      <div style={{ flex: "1 0 150px" }} />
      <img src="/static/images/emjpm.png" style={{ maxHeight: 50 }} />
      <nav style={{ flex: "1 0 150px", textAlign: "right" }}>
        <Link href="/">
          <a>Assistance</a>
        </Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://emjpm.num.social.gouv.fr">Se connecter</a>
      </nav>
    </div>
  </header>
);

export default Header;
