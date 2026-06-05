// src/components/Hero.jsx
import Reveal from './Reveal.jsx';
import { identity, stats } from '../data.js';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero__grid">
        <div className="hero__main">
          <div className="eyebrow">
            <span className="eyebrow__dot" />
            <span className="eyebrow__text">Available for work · {identity.location}</span>
          </div>
          <h1 className="hero__title">
            {identity.headline.map((line, i) => (
              <span key={i} className="hero__line"><span>{line}</span></span>
            ))}
          </h1>
          <p className="hero__intro">{identity.intro}</p>
          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">View work <span className="btn__arrow">→</span></a>
            <a href="#contact" className="btn btn--ghost">Get in touch</a>
          </div>
        </div>
        <div className="hero__aside">
          <div className="idcard">
            <div className="idcard__top">
              <div className="idcard__mark">ES</div>
              <div className="idcard__status">
                <span className="idcard__pulse" />
                <span>Open to work</span>
              </div>
            </div>
            <div className="idcard__rows">
              <div className="idcard__row"><span className="idcard__k">Role</span><span className="idcard__v">{identity.role}</span></div>
              <div className="idcard__row"><span className="idcard__k">Based</span><span className="idcard__v">{identity.location}</span></div>
              <div className="idcard__row"><span className="idcard__k">Focus</span><span className="idcard__v">Backend · Cloud</span></div>
              <div className="idcard__row"><span className="idcard__k">Cert</span><span className="idcard__v">AWS Cloud Practitioner</span></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero__stats">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 70} className="stat">
            <div className="stat__value">{s.value}</div>
            <div className="stat__label">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </header>
  );
}
