// src/components/Navbar.jsx
import { useEffect, useState } from 'react';
import { identity } from '../data.js';

const LINKS = [
  { to: '#about', label: 'About' },
  { to: '#work', label: 'Work' },
  { to: '#experience', label: 'Experience' },
  { to: '#stack', label: 'Stack' },
  { to: '#activity', label: 'Activity' },
  { to: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#top" className="nav__logo">
        <span className="nav__logo-mark">ES</span>
        <span className="nav__logo-text">{identity.name}</span>
      </a>
      <div className="nav__links">
        {LINKS.map((l) => (
          <a key={l.to} href={l.to} className="nav__link">{l.label}</a>
        ))}
      </div>
      <a href={identity.resume} className="nav__cta" target="_blank" rel="noreferrer">Résumé</a>
    </nav>
  );
}
