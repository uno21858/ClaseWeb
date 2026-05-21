// src/components/TechStack.jsx
import './TechStack.css';

const TECHS = [
    { name: 'Python',      color: '#3776ab' },
    { name: 'JavaScript',  color: '#f7df1e' },
    { name: 'TypeScript',  color: '#3178c6' },
    { name: 'C++',         color: '#00599c' },
    { name: 'Dart',        color: '#00b4ab' },
    { name: 'React',       color: '#61dafb' },
    { name: 'Next.js',     color: '#ffffff' },
    { name: 'Flutter',     color: '#54c5f8' },
    { name: 'Tailwind',    color: '#06b6d4' },
    { name: 'WXT',         color: '#67d7b6' },
    { name: 'Node.js',     color: '#68a063' },
    { name: 'FastAPI',     color: '#009688' },
    { name: 'PyTorch',     color: '#ee4c2c' },
    { name: 'NumPy',       color: '#4dabcf' },
    { name: 'Pandas',      color: '#130754' },
    { name: 'PostgreSQL',  color: '#336791' },
    { name: 'SQLite',      color: '#003b57' },
    { name: 'Supabase',    color: '#3ecf8e' },
    { name: 'Firebase',    color: '#ffca28' },
    { name: 'AWS',         color: '#ff9900' },
    { name: 'Docker',      color: '#2496ed' },
    { name: 'Proxmox',     color: '#e57000' },
    { name: 'RHEL',        color: '#ee0000' },
    { name: 'Cloudflare',  color: '#f38020' },
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
