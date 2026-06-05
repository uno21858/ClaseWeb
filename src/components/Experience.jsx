// src/components/Experience.jsx
import Reveal, { SectionHead } from './Reveal.jsx';
import { timeline } from '../data.js';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHead index="03" kicker="Experience" title="Deployment" accent="history." />
      <div className="timeline">
        {timeline.map((item, i) => (
          <Reveal key={item.index} delay={i * 60} className={`tl ${item.current ? 'tl--current' : ''}`}>
            <div className="tl__left">
              <span className="tl__period">{item.period}</span>
              <span className="tl__status">{item.current ? 'Current' : 'Education'}</span>
            </div>
            <div className="tl__node"><span /></div>
            <div className="tl__right">
              <div className="tl__role-row">
                <h3 className="tl__role">{item.role}</h3>
                <span className="tl__company">{item.company}</span>
              </div>
              <p className="tl__desc">{item.description}</p>
              <div className="tags">
                {item.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
