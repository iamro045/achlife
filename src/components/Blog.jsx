import { blogPosts } from "../data/content.js";
import Reveal from "./Reveal.jsx";

function PostGlyph({ seed }) {
  // A distinct abstract mark per post, generated from a fixed seed so it
  // stays consistent between renders — a substitute for stock photography
  // that still gives each card visual identity.
  const angles = [18, 46, 74];
  const a = angles[seed % angles.length];
  return (
    <svg viewBox="0 0 200 120" preserveAspectRatio="none" aria-hidden="true">
      <rect width="200" height="120" fill="#e7eae4" />
      <line x1="0" y1={a} x2="200" y2={a + 14} stroke="#1f6f6b" strokeWidth="1" opacity="0.55" />
      <line x1="0" y1={a + 30} x2="200" y2={a + 10} stroke="#101b27" strokeWidth="1" opacity="0.25" />
      <circle cx={40 + seed * 45} cy="60" r="26" fill="none" stroke="#c68a1d" strokeWidth="1.2" />
    </svg>
  );
}

export default function Blog() {
  return (
    <section className="blog section" id="blogs">
      <div className="wrap">
        <Reveal className="section-head">
          <h2>Latest from our blog</h2>
          <span className="section-head__index">Reading room</span>
        </Reveal>

        <div className="blog__grid">
          {blogPosts.map((post, i) => (
            <article className="blog__card" key={post.title}>
              <div className="blog__thumb">
                <PostGlyph seed={i} />
              </div>
              <span className="blog__tag">{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href={post.href} target="_blank" rel="noreferrer" className="blog__link">
                Read the post
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
