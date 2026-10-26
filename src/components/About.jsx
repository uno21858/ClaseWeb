// src/components/About.jsx
import Reveal, { SectionHead } from './Reveal.jsx';
import { identity } from '../data.js';

function Fact({ k, v }) {
  return (
    <div className="fact">
      <span className="fact__k">{k}</span>
      <span className="fact__v">{v}</span>
    </div>
  );
}

export default function About() {
  return (
    <section className="section" id="about">
      <SectionHead index="01" kicker="About" title="Engineer who" accent="ships." />
      <div className="about">
        <Reveal className="about__lead">
          <p>
            I’m a Computer Science student at Tecnológico de Monterrey who likes turning
            messy real-world problems into software that runs in production.
          </p>
          <p className="about__muted">
            My work spans a mobile app live on both stores, ESP32/ESP8266 firmware and telemetry
            for research rigs, PyTorch models trained on my own GPU server, automation tools that
            save real hours, and CTF infrastructure. I care about systems that are reliable,
            observable, and a little over-engineered in the right places.
          </p>
        </Reveal>
        <Reveal className="about__facts" delay={80}>
          <Fact k="Based in" v={identity.location} />
          <Fact k="Focus" v={identity.focus} />
          <Fact k="Certified" v="AWS Cloud Practitioner" />
          <Fact k="Currently" v="Research Assistant @ ITESM" />
        </Reveal>
      </div>
    </section>
  );
}
