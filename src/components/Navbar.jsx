import { useEffect, useState } from "react";
import { navLinks } from "../data/content.js";
import { useScrollSpy } from "../hooks/useMotion.js";

const spyIds = navLinks
  .map((l) => l.href.replace("#", ""))
  .filter((id) => id !== "top");

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useScrollSpy(spyIds);

  // Shrink/shadow the bar once the page has moved.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scrolling while the mobile drawer is open, and allow Esc.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="wrap">
          <div className="topbar__contact">
            <a href="tel:+919669139115">+91 96691 39115</a>
            <a className="topbar__email" href="mailto:admin@achlifes.com">
              admin@achlifes.com
            </a>
          </div>
          <div className="topbar__social">
            <a
              href="https://www.linkedin.com/company/qualitroth-pharma/"
              aria-label="ACHLIFE Solutions on LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.5 8.65 22 11 22 14v7h-4v-6.2c0-1.48-.03-3.38-2.06-3.38-2.07 0-2.39 1.6-2.39 3.27V21h-4V9Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <nav className={`navbar ${scrolled ? "is-scrolled" : ""}`} aria-label="Main">
        <div className="wrap">
          <a href="#top" className="navbar__brand" onClick={close} aria-label="ACHLIFE Solutions Pvt Ltd — home">
            <img
              src="/logo.png"
              alt="ACHLIFE"
              className="navbar__logo"
              width="230"
              height="92"
            />
            <span className="navbar__tagline">Solutions Pvt Ltd</span>
          </a>

          {/* Desktop links */}
          <ul className="navbar__links">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = id === "top" ? activeId === null : activeId === id;
              return (
                <li key={link.label}>
                  <a href={link.href} className={isActive ? "is-active" : ""}>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <a href="#request-specification" className="btn btn--primary navbar__cta">
            Request a quote
          </a>

          <button
            className="navbar__toggle"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`navbar__burger ${open ? "is-open" : ""}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`navdrawer__backdrop ${open ? "is-open" : ""}`}
        onClick={close}
        aria-hidden="true"
      />
      <div id="mobile-menu" className={`navdrawer ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <ul className="navdrawer__links">
          {navLinks.map((link, i) => {
            const id = link.href.replace("#", "");
            const isActive = id === "top" ? activeId === null : activeId === id;
            return (
              <li key={link.label} style={{ transitionDelay: open ? `${60 + i * 45}ms` : "0ms" }}>
                <a href={link.href} className={isActive ? "is-active" : ""} onClick={close}>
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="navdrawer__foot">
          <a href="#request-specification" className="btn btn--primary" onClick={close}>
            Request a quote
          </a>
          <a href="tel:+919669139115" className="navdrawer__phone">
            +91 96691 39115
          </a>
          <a href="mailto:admin@achlifes.com" className="navdrawer__phone">
            admin@achlifes.com
          </a>
        </div>
      </div>
    </header>
  );
}
