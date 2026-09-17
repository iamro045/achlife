import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import Certifications from "./components/Certifications.jsx";
import Products from "./components/Products.jsx";
import OurStrength from "./components/OurStrength.jsx";
import ContractManufacturing from "./components/ContractManufacturing.jsx";
import Clients from "./components/Clients.jsx";
import Blog from "./components/Blog.jsx";
import SpecRequestForm from "./components/SpecRequestForm.jsx";
import Footer from "./components/Footer.jsx";

// PART 1 — Navigation, Hero, About, Why Choose Us, Certifications.
// PART 2 — Products showcase, Our Strength stats, Contract Manufacturing.
// PART 3 (this drop) — Clients marquee, Blog, spec-request form, Footer.

export default function App() {
  return (
    <>
      <div id="top" aria-hidden="true" />
      <a href="#main" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <WhyChooseUs />
        <Certifications />
        <Products />
        <OurStrength />
        <ContractManufacturing />
        <Clients />
        <Blog />
        <SpecRequestForm />
      </main>
      <Footer />
    </>
  );
}
