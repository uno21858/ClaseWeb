// src/components/Projects.jsx
import Reveal, { SectionHead } from './Reveal.jsx';
import { projects } from '../data.js';

export default function Projects() {
  const featured = projects.find((p) => p.featured) || projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <section className="section" id="work">
      <SectionHead index="02" kicker="Selected Work" title="Project" accent="archive." />

      <Reveal className="card card--feature">
        <a className="card__hit" href={featured.url || undefined} target={featured.url ? '_blank' : undefined} rel="noreferrer">
          <div className="card__top">
            <span className="card__id">{featured.id}</span>
            {featured.badge && <span className="card__badge card__badge--hot">{featured.badge}</span>}
          </div>
          <div className="card--feature__body">
            <div>
              <span className="card__year">{featured.year}</span>
              <h3 className="card__name card__name--xl">{featured.name}</h3>
              <p className="card__subtitle">{featured.subtitle}</p>
            </div>
            <div className="card--feature__right">
              <p className="card__desc">{featured.description}</p>
              <div className="card__foot">
                <div className="tags">
                  {featured.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                {featured.url && <span className="card__link">View source →</span>}
              </div>
            </div>
          </div>
        </a>
      </Reveal>

      <div className="grid">
        {rest.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 60} className="card">
            <a className="card__hit" href={p.url || undefined} target={p.url ? '_blank' : undefined} rel="noreferrer">
              <div className="card__top">
                <span className="card__id">{p.id}</span>
                {p.badge && <span className="card__badge">{p.badge}</span>}
              </div>
              <div className="card__body">
                <span className="card__year">{p.year}</span>
                <h3 className="card__name">{p.name}</h3>
                <p className="card__subtitle">{p.subtitle}</p>
                <p className="card__desc">{p.description}</p>
              </div>
              <div className="card__foot">
                <div className="tags">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                {p.url && <span className="card__link">Source →</span>}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


