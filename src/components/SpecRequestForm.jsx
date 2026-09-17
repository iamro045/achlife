import { useState } from "react";
import { productOptions, gradeOptions } from "../data/content.js";

const emptyForm = {
  product: productOptions[0],
  name: "",
  company: "",
  phone: "",
  email: "",
  grade: gradeOptions[0],
  quantity: "",
};

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function SpecRequestForm() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function validate() {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your full name.";
    if (!form.company.trim()) next.company = "Enter your company name.";
    if (!form.phone.trim()) next.phone = "Enter a contact number.";
    if (!isValidEmail(form.email)) next.email = "Enter a valid email address.";
    if (!form.quantity.trim()) next.quantity = "Enter an approximate quantity.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      return;
    }
    // Send focus to the first field that failed so keyboard and screen
    // reader users aren't left guessing why nothing happened.
    const firstBad = ["name", "company", "phone", "email", "quantity"].find((k) => next[k]);
    if (firstBad) document.getElementById(`spec-${firstBad}`)?.focus();
  }

  function reset() {
    setForm(emptyForm);
    setErrors({});
    setSubmitted(false);
  }

  return (
    <section className="spec section" id="request-specification">
      <div className="wrap spec__grid">
        <div className="spec__intro">
          <p className="about__label">Product specification request</p>
          <h2>Get a spec sheet &amp; quote.</h2>
          <p className="spec__body">
            Tell us what you need and our technical team will follow up with
            a specification sheet, CoA sample and a quote sized to your
            quantity.
          </p>
          <div className="spec__contact-line">
            <span>Prefer to call?</span>
            <a href="tel:9669139115">+91 96691 39115</a>
          </div>
        </div>

        <div className="spec__form-wrap">
          {submitted ? (
            <div className="spec__success" role="status">
              <h3>Request received.</h3>
              <p>
                Thanks, {form.name.split(" ")[0]} — our technical team will
                reach out to {form.email} shortly with a specification sheet
                for {form.product.toLowerCase()}.
              </p>
              <button type="button" className="btn btn--ghost" onClick={reset}>
                Send another request
              </button>
            </div>
          ) : (
            <form className="spec__form" onSubmit={handleSubmit} noValidate>
              <div className="spec__field">
                <label htmlFor="spec-product">Product category</label>
                <select id="spec-product" value={form.product} onChange={update("product")}>
                  {productOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="spec__row">
                <div className="spec__field">
                  <label htmlFor="spec-name">Full name</label>
                  <input id="spec-name" type="text" value={form.name} onChange={update("name")} aria-invalid={!!errors.name} aria-describedby={errors.name ? "spec-name-error" : undefined} />
                  {errors.name && (
                    <span className="spec__error" id="spec-name-error">{errors.name}</span>
                  )}
                </div>
                <div className="spec__field">
                  <label htmlFor="spec-company">Company</label>
                  <input id="spec-company" type="text" value={form.company} onChange={update("company")} aria-invalid={!!errors.company} aria-describedby={errors.company ? "spec-company-error" : undefined} />
                  {errors.company && (
                    <span className="spec__error" id="spec-company-error">{errors.company}</span>
                  )}
                </div>
              </div>

              <div className="spec__row">
                <div className="spec__field">
                  <label htmlFor="spec-phone">Contact number</label>
                  <input id="spec-phone" type="tel" value={form.phone} onChange={update("phone")} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "spec-phone-error" : undefined} />
                  {errors.phone && (
                    <span className="spec__error" id="spec-phone-error">{errors.phone}</span>
                  )}
                </div>
                <div className="spec__field">
                  <label htmlFor="spec-email">Email</label>
                  <input id="spec-email" type="email" value={form.email} onChange={update("email")} aria-invalid={!!errors.email} aria-describedby={errors.email ? "spec-email-error" : undefined} />
                  {errors.email && (
                    <span className="spec__error" id="spec-email-error">{errors.email}</span>
                  )}
                </div>
              </div>

              <div className="spec__row">
                <div className="spec__field">
                  <label htmlFor="spec-grade">Grade required</label>
                  <select id="spec-grade" value={form.grade} onChange={update("grade")}>
                    {gradeOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div className="spec__field">
                  <label htmlFor="spec-quantity">Approximate quantity</label>
                  <input id="spec-quantity" type="text" placeholder="e.g. 25 kg / month" value={form.quantity} onChange={update("quantity")} aria-invalid={!!errors.quantity} aria-describedby={errors.quantity ? "spec-quantity-error" : undefined} />
                  {errors.quantity && (
                    <span className="spec__error" id="spec-quantity-error">{errors.quantity}</span>
                  )}
                </div>
              </div>

              <button type="submit" className="btn btn--primary spec__submit">
                Send request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
