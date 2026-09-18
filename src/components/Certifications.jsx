import { certifications } from "../data/content.js";
import Reveal from "./Reveal.jsx";

function SealIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="22" stroke="#00bf63" strokeWidth="1.4" />
      <circle cx="32" cy="32" r="16" stroke="#f2f5f7" strokeWidth="1" opacity="0.5" />
      <path d="M24 33.5 29 38.5 41 25.5" stroke="#f2f5f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Certifications() {
  return (
    <section className="certs section" id="certifications">
      <div className="wrap">
        <Reveal className="section-head">
          <h2>Certifications</h2>
          <span className="section-head__index">Quality &amp; compliance</span>
        </Reveal>
        <p className="certs__note">
          Placeholder credentials shown below — swap in your scanned
          certificates and registration numbers when ready.
        </p>
        <div className="certs__row">
          {certifications.map((name) => (
            <div className="certs__badge" key={name}>
              <SealIcon />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
