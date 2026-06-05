// src/components/GitHubActivity.jsx
import { GitHubCalendar } from 'react-github-calendar';
import Reveal, { SectionHead } from './Reveal.jsx';
import { identity, learning } from '../data.js';
import './GitHubActivity.css';

// Aurora-purple heatmap scale (low → high contributions)
const AURORA_THEME = {
  dark: ['#140f1f', '#2c2046', '#5e2682', '#8b5cf6', '#a78bfa'],
};

export default function GitHubActivity() {
  return (
    <section className="section" id="activity">
      <SectionHead index="05" kicker="Activity" title="Commit" accent="graph." />
      <div className="activity">
        <Reveal className="activity__heatmap">
          <p className="activity__cmd">$ git contributions --year 2026</p>
          <p className="activity__title">
            GitHub Activity — <span>@{identity.githubUser}</span>
          </p>
          <div className="activity__cal">
            <GitHubCalendar
              username={identity.githubUser}
              year={2026}
              colorScheme="dark"
              theme={AURORA_THEME}
              fontSize={12}
              blockSize={11}
              blockMargin={3}
            />
          </div>
        </Reveal>
        <Reveal className="activity__learning" delay={80}>
          <p className="activity__learning-title">// currently_learning</p>
          <ul className="activity__learning-list">
            {learning.map((item) => (
              <li key={item} className="activity__learning-item">{item}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
