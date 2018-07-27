import Link from "next/link";

const Header = () => (
  <header className="navbar">
    <div className="navbar__container">
      <Link href="/">
        <a className="navbar__home">
          <img src="/static/images/emjpm.png" style={{ maxHeight: 50 }} />
        </a>
      </Link>
      <nav>
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
