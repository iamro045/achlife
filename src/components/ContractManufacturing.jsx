import { contractSteps } from "../data/content.js";

export default function ContractManufacturing() {
  return (
    <section className="contract section" id="contract-manufacturing">
      <div className="wrap contract__grid">
        <div className="contract__intro">
          <p className="about__label">Contract manufacturing</p>
          <h2>Your molecule, our capacity.</h2>
          <p className="contract__body">
            Contract manufacturing with ACHLIFE gives you the freedom to
            expand without building capacity of your own — backed by our
            technical expertise, quality systems and a supply record our
            partners can plan around.
          </p>
          <a href="#request-specification" className="btn btn--primary">
            Start a conversation
          </a>
        </div>

        <ol className="contract__steps">
          {contractSteps.map((step, i) => (
            <li className="contract__step" key={step.title}>
              <span className="contract__step-index">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
