import { clientPartners } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Clients() {
  // Duplicate the list once so the CSS animation can loop seamlessly.
  const track = [...clientPartners, ...clientPartners];

  return (
    <section className="clients section" id="clients">
      <div className="wrap">
        <Reveal className="section-head">
          <h2>Our clients</h2>
          <span className="section-head__index">
            {clientPartners.length} partners shown
          </span>
        </Reveal>
      </div>
      <p className="clients__note wrap">
        Placeholder marks — swap in real client logos once you have
        permission to display them.
      </p>
      <div className="clients__marquee" role="list" aria-label="Client partners">
        <div className="clients__track">
          {track.map((name, i) => (
            <div className="clients__mark" role="listitem" key={`${name}-${i}`} aria-hidden={i >= clientPartners.length}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
