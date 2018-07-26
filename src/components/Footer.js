const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__logo">
        <ul className="footer__social">
          <li>
            <a title="Nous écrire un mail">
              <svg className="icon icon-mail">
                <use xlinkHref="#icon-mail" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <ul className="footer__links">
        <li>
          <h2>emjpm.beta.gouv.fr</h2>
        </li>
      </ul>
      <ul className="footer__links" />
    </div>
  </footer>
);

export default Footer;
