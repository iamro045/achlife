import { strengthStats } from "../data/content.js";
import { useCountUp } from "../hooks/useMotion.js";
import Reveal from "./Reveal.jsx";

function Stat({ value, label }) {
  const [ref, display] = useCountUp(value);
  return (
    <div className="strength__item" ref={ref}>
      <strong>{display}</strong>
      <p>{label}</p>
    </div>
  );
}

export default function OurStrength() {
  return (
    <section className="strength" id="strength">
      <div className="wrap">
        <Reveal className="section-head">
          <h2>Our strength</h2>
          <span className="section-head__index">By the numbers</span>
        </Reveal>
        <div className="strength__grid">
          {strengthStats.map((stat) => (
            <Stat key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
