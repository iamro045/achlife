import { aboutFacts } from "../data/content.js";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="wrap">
        <div>
          <p className="about__label">About the industry</p>
          <h2>A steady, documented source for regulated buyers.</h2>
          <div className="about__body">
            <p>
              ACHLIFE Solutions manufactures, distributes and trades
              chemicals, intermediates and APIs, holding every batch to
              current Good Manufacturing Practice as the market's needs and
              standards evolve.
            </p>
            <p>
              Customers and partners rely on us for chemicals, intermediates
              and API products that behave the same way on delivery two
              hundred as they did on delivery one — our aim is to be a
              dependable global source for the pharmaceutical and chemical
              industries.
            </p>
          </div>
          <a href="#why-us" className="about__link">
            Why partners choose us
          </a>
        </div>

        <div className="about__facts">
          {aboutFacts.map((fact) => (
            <div className="about__fact" key={fact.label}>
              <strong>{fact.value}</strong>
              <p>{fact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
