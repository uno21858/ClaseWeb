// src/components/Contact.jsx
import { useState } from 'react';
import { SectionHead } from './Reveal.jsx';
import { identity } from '../data.js';

function ContactLink({ k, v, href }) {
  return (
    <a className="clink" href={href} target="_blank" rel="noreferrer">
      <span className="clink__k">{k}</span>
      <span className="clink__v">{v}</span>
      <span className="clink__arrow">↗</span>
    </a>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'error'

  const ch = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/server', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // subject defaults to a label if you drop the field from the form
        body: JSON.stringify({ subject: 'Portfolio contact', ...form }),
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section section--contact" id="contact">
      <div className="contact">
        <div className="contact__left">
          <SectionHead index="06" kicker="Contact" title="Let’s build" accent="something." />
          <p className="contact__lead">
            Open to internships, freelance work and collaborations. The fastest way to reach me
            is email — I usually reply within a day.
          </p>
          <div className="contact__links">
            <ContactLink k="Email" v={identity.email} href={`mailto:${identity.email}`} />
            <ContactLink k="GitHub" v={identity.github} href={identity.githubUrl} />
            <ContactLink k="LinkedIn" v={identity.linkedin} href={identity.linkedinUrl} />
            <ContactLink k="Résumé" v="Erick_Sanchez_Resume.pdf" href={identity.resume} />
          </div>
        </div>

        <form className="contact__form" onSubmit={submit}>
          <div className="field">
            <label className="field__label">Name</label>
            <input className="field__input" name="name" value={form.name} onChange={ch} placeholder="Your name" required maxLength={80} />
          </div>
          <div className="field">
            <label className="field__label">Email</label>
            <input className="field__input" name="email" type="email" value={form.email} onChange={ch} placeholder="you@domain.com" required maxLength={254} />
          </div>
          <div className="field">
            <label className="field__label">Message</label>
            <textarea className="field__input field__textarea" name="message" value={form.message} onChange={ch} rows={5} placeholder="What are you working on?" required maxLength={2000} />
          </div>
          {status === 'success' && <span className="form-status success">Message sent ✓</span>}
          {status === 'error' && <span className="form-status error">Something failed — try again</span>}
          <button className="btn btn--primary btn--block" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending…' : 'Send message'} <span className="btn__arrow">→</span>
          </button>
        </form>
      </div>

      <footer className="footer">
        <span>© 2026 {identity.name}</span>
        <span className="footer__mono">Designed &amp; built from scratch · No frameworks</span>
      </footer>
    </section>
  );
}
