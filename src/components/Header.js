import Link from "next/link";

const Header = () => (
  <header className="navbar">
    <div className="navbar__container">
      <Link href="/">
        <a className="navbar__home">Accueil</a>
      </Link>
      <nav>
        <ul className="nav__links">
          <li className="nav__item">
            <a href="#typography">Typographie</a>
          </li>
          <li className="nav__item">
            <a href="#colors">Couleurs</a>
          </li>
          <li className="nav__item">
            <a href="#form">Form</a>
          </li>
          <li className="nav__item">
            <a href="#documentation">Documentation</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
