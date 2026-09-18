import { useState } from "react";
import Reveal from "./Reveal.jsx";
import { productCategories, products } from "../data/content.js";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

const categoryLabel = Object.fromEntries(productCategories.map((c) => [c.key, c.label]));

function ProductGlyph({ category }) {
  // A small distinguishing mark per category, drawn as SVG rather than a
  // stock photo — keeps every card visually consistent and on-brand.
  const stroke = "#223945";
  if (category === "api") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="17" fill="none" stroke={stroke} strokeWidth="1.4" />
        <circle cx="24" cy="24" r="3.2" fill="#00bf63" />
        <circle cx="24" cy="7" r="2.4" fill={stroke} />
        <circle cx="38.7" cy="32.5" r="2.4" fill={stroke} />
        <circle cx="9.3" cy="32.5" r="2.4" fill={stroke} />
      </svg>
    );
  }
  if (category === "reagent") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M18 6h12M20 6v12l-9 18a4 4 0 0 0 3.6 5.8h19a4 4 0 0 0 3.5-5.8L28 18V6" fill="none" stroke={stroke} strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M14.5 32h19" stroke="#319dbc" strokeWidth="1.4" />
      </svg>
    );
  }
  if (category === "intermediate") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <polygon points="24,6 39,15 39,33 24,42 9,33 9,15" fill="none" stroke={stroke} strokeWidth="1.4" />
        <polygon points="24,16 32,21 32,29 24,34 16,29 16,21" fill="none" stroke="#00bf63" strokeWidth="1.1" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <polygon points="24,5 40,14.5 40,33.5 24,43 8,33.5 8,14.5" fill="none" stroke={stroke} strokeWidth="1.4" />
      <line x1="24" y1="5" x2="24" y2="43" stroke="#319dbc" strokeWidth="1" strokeDasharray="2 4" />
    </svg>
  );
}

export default function Products() {
  const [active, setActive] = useState("all");
  const [openCard, setOpenCard] = useState(null);
  const visible = active === "all" ? products : products.filter((p) => p.category === active);

  return (
    <section className="products section" id="products">
      <div className="wrap">
        <Reveal className="section-head">
          <h2>Our products</h2>
          <span className="section-head__index">{String(products.length).padStart(2, "0")} in catalogue</span>
        </Reveal>

        <div className="products__filter" role="group" aria-label="Filter products by category">
          {productCategories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              aria-pressed={active === cat.key}
              className={`products__filter-btn ${active === cat.key ? "is-active" : ""}`}
              onClick={() => setActive(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <p className="sr-only" role="status">
          Showing {visible.length} of {products.length} products
          {active === "all" ? "" : ` in ${categoryLabel[active]}`}.
        </p>

        <div className="products__grid">
          {visible.map((product) => (
            <article className="products__card" key={product.name}>
              <div className="products__glyph">
                <ProductGlyph category={product.category} />
              </div>
              <span className="products__category">{categoryLabel[product.category]}</span>
              <h3>{product.name}</h3>
              <p className="products__formula">{product.formula}</p>
              <p className="products__note">{product.note}</p>

              <button
                type="button"
                className="products__toggle"
                aria-expanded={openCard === product.name}
                aria-controls={`desc-${slug(product.name)}`}
                onClick={() =>
                  setOpenCard((cur) => (cur === product.name ? null : product.name))
                }
              >
                {openCard === product.name ? "Hide description" : "See description"}
                <span className="products__chev" aria-hidden="true" />
              </button>

              <div
                id={`desc-${slug(product.name)}`}
                className={`products__detail ${openCard === product.name ? "is-open" : ""}`}
                hidden={openCard !== product.name}
              >
                <p>{product.description}</p>
                {product.applications?.length > 0 && (
                  <>
                    <h4>Typical applications</h4>
                    <ul>
                      {product.applications.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </>
                )}
                <a href="#request-specification" className="products__link">
                  Request specification
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
