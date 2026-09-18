import { boardOfDirectors } from "../data/content.js";
import Reveal from "./Reveal.jsx";

function initials(name) {
  const parts = name.trim().split(/\s+/);
  return (parts[0][0] + (parts[parts.length - 1][0] || "")).toUpperCase();
}

export default function Leadership() {
  return (
    <section className="leadership section" id="leadership">
      <div className="wrap">
        <Reveal className="section-head">
          <h2>Board of directors</h2>
          <span className="section-head__index">
            {String(boardOfDirectors.length).padStart(2, "0")} members
          </span>
        </Reveal>

        <div className="leadership__grid">
          {boardOfDirectors.map((person, i) => (
            <Reveal className="leadership__card" key={person.name} delay={i * 60}>
              <span className="leadership__avatar" aria-hidden="true">
                {initials(person.name)}
              </span>
              <h3>{person.name}</h3>
              <p className="leadership__role">{person.role}</p>
              <p className="leadership__since">On the board since {person.since}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
