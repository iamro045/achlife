import { footerQuickLinks, footerProductLinks } from "../data/content.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div className="site-footer__brand">
          <img
            src="/logo-light.png"
            alt="ACHLIFE Solutions Pvt Ltd"
            className="site-footer__logo"
            width="230"
            height="92"
          />
          <p>
            Manufacturing and supplying cGMP-compliant chemicals,
            intermediates and APIs to pharma partners worldwide.
          </p>
        </div>

        <div className="site-footer__col">
          <h3>Quick links</h3>
          <ul>
            {footerQuickLinks.map((link) => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>Products</h3>
          <ul>
            {footerProductLinks.map((link) => (
              <li key={link.label}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>Get in touch</h3>
          <ul>
            <li><a href="tel:9669139115">+91 96691 39115</a></li>
            <li><a href="mailto:admin@achlifes.com">admin@achlifes.com</a></li>
            <li className="site-footer__address">
              A/8, Naradana, MIDC Area, Bhabla Fata,
              <br />
              Tal. Sindhkheda, Dist. Dhule &ndash; 425404
            </li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="wrap site-footer__bottom-row">
          <p>Copyright &copy; {year} ACHLIFE Solutions Pvt Ltd. All rights reserved.</p>
          <a
            href="https://www.linkedin.com/company/qualitroth-pharma/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
