import Link from "next/link";

const links = [
  {
    title: "Mandataires individuels",
    href: "/individuels"
  },
  {
    title: "Mandataires préposés",
    href: "/preposes"
  },
  {
    title: "Mandataires en service",
    href: "/services"
  },
  {
    title: "Magistrats",
    href: "/magistrats"
  }
];

const Header = () => (
  <header className="navbar">
    <div className="navbar__container">
      <Link href="/">
        <a className="navbar__home">emjpm-doc</a>
      </Link>
      <nav>
        <ul className="nav__links">
          {links.map(link => (
            <li className="nav__item" key={link.href}>
              <Link href={link.href}>
                <a>{link.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
