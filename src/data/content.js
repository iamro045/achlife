// Every link targets a section that actually exists on this page. The old
// site pointed at /about-us, /all-products etc. — separate WordPress pages
// that don't exist in this single-page build, so those links went nowhere.
export const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Manufacturing", href: "#contract-manufacturing" },
  { label: "Blog", href: "#blogs" },
  { label: "Contact", href: "#request-specification" },
];

export const credentials = [
  { value: "150+", label: "Products manufactured" },
  { value: "100+", label: "Customers, 10 countries" },
  { value: "10+", label: "Years of GMP expertise" },
];

export const aboutFacts = [
  { value: "cGMP", label: "Every batch adheres to current Good Manufacturing Practice." },
  { value: "10+", label: "Years supplying chemicals, intermediates and APIs." },
  { value: "150+", label: "Products in active production and distribution." },
];

export const whyChooseUs = [
  {
    title: "Industry-leading customer service",
    body: "A dedicated technical contact from enquiry to delivery, not a ticket queue.",
  },
  {
    title: "Technical & regulatory support",
    body: "DMF, CoA and regulatory documentation prepared alongside every shipment.",
  },
  {
    title: "Open-door policy",
    body: "Direct access to our production and quality teams for partners who need it.",
  },
  {
    title: "Ahead of legislation",
    body: "Formulations and processes reviewed against evolving pharmacopeial standards.",
  },
  {
    title: "Focused on customer value",
    body: "Pricing and batch sizes structured around your production schedule, not ours.",
  },
  {
    title: "Open to customer-led audits",
    body: "Our facility and records are available for inspection on request.",
  },
  {
    title: "Track record of delivery",
    body: "A consistent supply history across regulated and semi-regulated markets.",
  },
  {
    title: "Streamlined supply chain",
    body: "Vertically coordinated sourcing keeps lead times short and predictable.",
  },
];

// Placeholder labels — swap in the client's actual certification names/artwork
// once supplied; kept generic here rather than asserting unverified claims.
export const certifications = [
  "ISO 9001:2015",
  "WHO-GMP",
  "cGMP Compliant",
  "ISO 14001:2015",
  "Drug Manufacturing License",
];

// ---------- Part 2 ----------

export const productCategories = [
  { key: "all", label: "All products" },
  { key: "precursor", label: "Precursors" },
  { key: "reagent", label: "Reagents" },
  { key: "intermediate", label: "Intermediates" },
  { key: "api", label: "APIs" },
];

export const products = [
  { name: "Meta Hydroxybenzaldehyde", category: "precursor", formula: "C7H6O2", note: "Aromatic aldehyde building block for downstream synthesis." },
  { name: "Meta Nitrobenzaldehyde", category: "precursor", formula: "C7H5NO3", note: "Nitro-substituted aldehyde used in multi-step API routes." },
  { name: "2-Cyanoacetamide", category: "precursor", formula: "C3H4N2O", note: "Versatile precursor for heterocycle and API synthesis." },
  { name: "4-Hydroxybenzonitrile", category: "precursor", formula: "C7H5NO", note: "Phenolic nitrile feedstock for agrochemical and API routes." },
  { name: "Thiophene", category: "precursor", formula: "C4H4S", note: "Sulfur heterocycle used across pharma and fine-chemical synthesis." },
  { name: "N-Bromosuccinimide", category: "reagent", formula: "C4H4BrNO2", note: "Brominating reagent for radical and electrophilic reactions." },
  { name: "7-(4-Bromobenzoyl)indole", category: "intermediate", formula: "C15H10BrNO", note: "Key intermediate on the route to bromfenac." },
  { name: "Apixaban", category: "api", formula: "C25H25N5O4", note: "Factor Xa inhibitor anticoagulant API." },
  { name: "Brinzolamide", category: "api", formula: "C12H21N3O5S3", note: "Carbonic anhydrase inhibitor used in ophthalmic formulations." },
  { name: "Bromfenac Sodium", category: "api", formula: "C15H11BrNNaO3", note: "NSAID API used in post-operative ophthalmic care." },
  { name: "Dorzolamide", category: "api", formula: "C10H16N2O4S3", note: "Topical carbonic anhydrase inhibitor for intraocular pressure." },
  { name: "Moxifloxacin", category: "api", formula: "C21H24FN3O4", note: "Fourth-generation fluoroquinolone antibacterial API." },
  { name: "Nepafenac", category: "api", formula: "C15H14N2O2", note: "Prodrug NSAID API for ophthalmic inflammation." },
  { name: "Pregabalin", category: "api", formula: "C8H17NO2", note: "GABA-analogue API used in neuropathic pain management." },
];

export const strengthStats = [
  { value: "100+", label: "Customers across 10 countries" },
  { value: "150+", label: "Products available today" },
  { value: "10+", label: "Years of technical & GMP expertise" },
  { value: "1", label: "Dedicated point of contact per account" },
];

export const contractSteps = [
  {
    title: "Enquiry & feasibility",
    body: "Share your molecule and volumes; our technical team reviews route feasibility and quotes turnaround.",
  },
  {
    title: "Technology transfer",
    body: "Process documentation, analytical methods and safety data are transferred and verified in our labs.",
  },
  {
    title: "Scale-up & validation",
    body: "Pilot batches are run and validated against your specification before committing to commercial scale.",
  },
  {
    title: "Commercial supply",
    body: "Ongoing production with batch-consistent CoAs, DMF support and a fixed supply schedule.",
  },
];

// ---------- Part 3 ----------

// Placeholder partner names — the live site shows generic logo marks with
// no company names attached, so real logos/names should replace these.
export const clientPartners = [
  "Partner 01",
  "Partner 02",
  "Partner 03",
  "Partner 04",
  "Partner 05",
  "Partner 06",
];

export const blogPosts = [
  {
    title: "Why India is called the \u2018pharmacy of developing world\u2019",
    excerpt:
      "A look at the manufacturing base and skilled workforce behind India's role supplying affordable medicines globally.",
    href: "https://achlifes.com/why-india-is-called-the-pharmacy-of-developing-world/",
    tag: "Industry",
  },
  {
    title: "What are active pharmaceutical ingredients?",
    excerpt:
      "A plain-language introduction to APIs: what they are, how they're regulated, and why sourcing quality matters.",
    href: "https://achlifes.com/what-are-active-pharmaceutical-ingredients-things-you-need-to-know/",
    tag: "Explainer",
  },
  {
    title: "Advantages of pharmaceutical contract manufacturing",
    excerpt:
      "Why outsourcing production can lower risk and cost for pharma companies operating in a tightly regulated sector.",
    href: "https://achlifes.com/advantages-of-pharmaceutical-contract-manufacturing/",
    tag: "Manufacturing",
  },
];

export const productOptions = [
  "General enquiry",
  "Chemical / Precursor",
  "Chemical / Reagent",
  "Intermediate",
  "API",
];

export const gradeOptions = ["Research grade", "Pilot scale", "GMP / Commercial"];

export const footerProductLinks = [
  { label: "Chemical / Precursor", href: "#products" },
  { label: "Chemical / Reagent", href: "#products" },
  { label: "Intermediate", href: "#products" },
  { label: "API", href: "#products" },
];

export const footerQuickLinks = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Certifications", href: "#certifications" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact Us", href: "#request-specification" },
];
