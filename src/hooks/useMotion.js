import { useEffect, useRef, useState } from "react";

export function prefersReducedMotion() {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
}

/**
 * Reveals an element once it scrolls into view. Returns a ref to attach and
 * a boolean. If the user prefers reduced motion we report "shown" immediately
 * so nothing is ever hidden from them.
 */
export function useReveal(options = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(() => prefersReducedMotion());

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [shown, options.rootMargin, options.threshold]);

  return [ref, shown];
}

/**
 * Tracks which section is currently in view so the navbar can highlight it.
 */
export function useScrollSpy(ids, offset = 120) {
  const [activeId, setActiveId] = useState(ids[0] ?? null);

  useEffect(() => {
    function onScroll() {
      let current = ids[0] ?? null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      }
      // Pin the last section once we're at the very bottom, otherwise a short
      // final section can never become active.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
        current = ids[ids.length - 1];
      }
      setActiveId(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids.join("|"), offset]);

  return activeId;
}

/**
 * Counts a numeric value up when it first scrolls into view. Non-numeric
 * values (like "cGMP") are passed straight through untouched.
 */
export function useCountUp(value, duration = 1100) {
  const [ref, shown] = useReveal();
  const match = String(value).match(/^(\D*)(\d+)(\D*)$/);
  const target = match ? Number(match[2]) : null;
  const [display, setDisplay] = useState(
    target === null || prefersReducedMotion() ? value : `${match[1]}0${match[3]}`
  );

  useEffect(() => {
    if (!shown || target === null || prefersReducedMotion()) {
      setDisplay(value);
      return;
    }
    let frame;
    const start = performance.now();
    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(`${match[1]}${Math.round(target * eased)}${match[3]}`);
      if (t < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [shown, value, target, duration]);

  return [ref, display];
}
