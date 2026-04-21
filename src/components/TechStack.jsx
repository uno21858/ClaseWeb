// src/components/TechStack.jsx
import './TechStack.css';

const TECHS = [
    { name: 'Python',      color: '#3776ab' },
    { name: 'JavaScript',  color: '#f7df1e' },
    { name: 'TypeScript',  color: '#3178c6' },
    { name: 'C++',         color: '#00599c' },
    { name: 'Java',        color: '#ed8b00' },
    { name: 'Dart',        color: '#00b4ab' },
    { name: 'React',       color: '#61dafb' },
    { name: 'Next.js',     color: '#ffffff' },
    { name: 'Flutter',     color: '#54c5f8' },
    { name: 'Node.js',     color: '#68a063' },
    { name: 'Qt',          color: '#41cd52' },
    { name: 'NumPy',       color: '#4dabcf' },
    { name: 'Pandas',      color: '#130754' },
    { name: 'PyTorch',     color: '#ee4c2c' },
    { name: 'AWS',         color: '#ff9900' },
    { name: 'Firebase',    color: '#ffca28' },
    { name: 'Supabase',    color: '#3ecf8e' },
    { name: 'PostgreSQL',  color: '#336791' },
    { name: 'MySQL',       color: '#4479a1' },
    { name: 'Docker',      color: '#2496ed' },
    { name: 'Git',         color: '#f05032' },
    { name: 'CMake',       color: '#064f8c' },
    { name: 'Arduino',     color: '#00979d' },
    { name: 'Figma',       color: '#f24e1e' },
];

const TechStack = () => (
    <section className="techstack-section">
        <p className="techstack-label">$ tech-stack --list</p>
        <div className="techstack-grid">
            {TECHS.map(({ name, color }) => (
                <div key={name} className="tech-badge">
                    <span className="tech-dot" style={{ backgroundColor: color }} />
                    {name}
                </div>
            ))}
        </div>
    </section>
);

export default TechStack;
