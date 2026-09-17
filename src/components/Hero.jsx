import { credentials } from "../data/content.js";

function MoleculeFigure() {
  // A stylised benzaldehyde-family ring (the company's own product line
  // includes meta-hydroxy/nitro benzaldehydes), used as the hero's
  // characteristic image rather than a generic stock illustration.
  return (
    <svg viewBox="0 0 420 420" role="img" aria-label="Aromatic ring diagram of a benzaldehyde-family compound">
      <g fill="none" stroke="#101b27" strokeWidth="1.6">
        <polygon points="210,70 300,122 300,226 210,278 120,226 120,122" />
        <polygon
          points="210,96 278,135 278,213 210,252 142,213 142,135"
          stroke="#1f6f6b"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
        <line x1="300" y1="122" x2="360" y2="88" />
        <line x1="360" y1="88" x2="360" y2="40" />
        <line x1="120" y1="122" x2="60" y2="88" />
        <line x1="120" y1="226" x2="60" y2="260" />
        <line x1="210" y1="278" x2="210" y2="330" />
      </g>
      <g fill="#101b27">
        <circle cx="210" cy="70" r="4.5" />
        <circle cx="300" cy="122" r="4.5" />
        <circle cx="300" cy="226" r="4.5" />
        <circle cx="210" cy="278" r="4.5" />
        <circle cx="120" cy="226" r="4.5" />
        <circle cx="120" cy="122" r="4.5" />
      </g>
      <circle cx="360" cy="40" r="7" fill="#c68a1d" />
      <circle cx="60" cy="88" r="7" fill="#1f6f6b" />
      <circle cx="60" cy="260" r="7" fill="#1f6f6b" />
      <circle cx="210" cy="330" r="7" fill="#c68a1d" />
      <text x="373" y="35" fontFamily="IBM Plex Mono" fontSize="13" fill="#101b27">O</text>
      <text x="30" y="83" fontFamily="IBM Plex Mono" fontSize="13" fill="#101b27">OH</text>
      <text x="30" y="266" fontFamily="IBM Plex Mono" fontSize="13" fill="#101b27">NO₂</text>
      <text x="196" y="354" fontFamily="IBM Plex Mono" fontSize="13" fill="#101b27">H</text>
      <text
        x="210"
        y="400"
        textAnchor="middle"
        fontFamily="IBM Plex Mono"
        fontSize="12"
        fill="#5b6b78"
        letterSpacing="0.5"
      >
        C7H5NO4 · reference structure
      </text>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero__content">
          <p className="hero__eyebrow">cGMP-compliant manufacturing</p>
          <h1>Chemicals, intermediates &amp; APIs built for regulated markets.</h1>
          <p className="hero__lede">
            ACHLIFE Solutions manufactures and supplies high-purity chemicals,
            intermediates and active pharmaceutical ingredients to pharma
            partners across ten countries, with the documentation and
            consistency regulated buyers need.
          </p>
          <div className="hero__actions">
            <a href="#products" className="btn btn--primary">
              Explore our products
            </a>
            <a href="#request-specification" className="btn btn--ghost">
              Talk to our technical team
            </a>
          </div>
          <div className="hero__credentials">
            {credentials.map((item) => (
              <div className="hero__credential" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__figure">
          <MoleculeFigure />
        </div>
      </div>
    </section>
  );
}
