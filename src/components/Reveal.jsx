// src/components/Reveal.jsx — fade/rise in on scroll
import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // IntersectionObserver fires on observe with the current state, so elements
    // already in view reveal shortly after mount — no synchronous setState needed.
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect(); } },
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${vis ? 'is-vis' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function SectionHead({ index, kicker, title, accent }) {
  return (
    <Reveal className="sec-head">
      <div className="sec-head__kicker">
        <span className="sec-head__index">{index}</span>
        <span className="sec-head__line" />
        <span className="sec-head__tag">{kicker}</span>
      </div>
      <h2 className="sec-head__title">
        {title} <span className="accent">{accent}</span>
      </h2>
    </Reveal>
  );
}
