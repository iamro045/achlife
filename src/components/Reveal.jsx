import { useReveal } from "../hooks/useMotion.js";

/**
 * Wraps content so it fades and lifts into view the first time it's scrolled
 * to. `delay` staggers siblings; `as` keeps semantic markup intact.
 * Honours prefers-reduced-motion via the shared hook.
 */
export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  ...rest
}) {
  const [ref, shown] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
