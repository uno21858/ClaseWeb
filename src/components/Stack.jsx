// src/components/Stack.jsx
import Reveal, { SectionHead } from './Reveal.jsx';
import { skills, techs } from '../data.js';

export default function Stack() {
  return (
    <section className="section" id="stack">
      <SectionHead index="04" kicker="Capabilities" title="Technical" accent="stack." />
      <div className="stack">
        <div className="stack__cards">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={i * 60} className="skill">
              <div className="skill__head">
                <span className="skill__mod">Module_{String(i + 1).padStart(2, '0')}</span>
                <h3 className="skill__title">{s.group}</h3>
              </div>
              <div className="tags">
                {s.items.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="marquee" delay={120}>
          <div className="marquee__track">
            {[...techs, ...techs].map((t, i) => (
              <span key={i} className="marquee__item">{t}<span className="marquee__sep">/</span></span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
