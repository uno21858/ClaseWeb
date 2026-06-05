// src/App.jsx — single-page portfolio
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Experience from './components/Experience.jsx';
import Stack from './components/Stack.jsx';
import GitHubActivity from './components/GitHubActivity.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Stack />
      <GitHubActivity />
      <Contact />
      <div className="tail" />
    </>
  );
}
