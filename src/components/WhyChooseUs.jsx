import { whyChooseUs } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function WhyChooseUs() {
  return (
    <section className="why section" id="why-us">
      <div className="wrap">
        <Reveal className="section-head">
          <h2>Why partners choose ACHLIFE</h2>
          <span className="section-head__index">
            {String(whyChooseUs.length).padStart(2, "0")} reasons
          </span>
        </Reveal>

        <div className="why__list">
          {whyChooseUs.map((item, i) => (
            <div className="why__item" key={item.title}>
              <span className="why__index">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
