import './Experience.css';

const skills = {
    languages: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Dart', 'Java', 'SQL'],
    frameworks: ['Next.js', 'React', 'Flutter', 'PySide6', 'Selenium', 'Pygame'],
    cloud: ['AWS', 'Firebase', 'PostgreSQL', 'Supabase', 'Docker', 'GitHub Actions'],
    security: ['Hack The Box', 'CTFd', 'Nmap', 'Wireshark', 'SHODAN'],
};

const timeline = [
    {
        index: '01',
        period: '2022 — PRES',
        role: 'Software Developer',
        company: 'Transportes Sánchez Barcelata',
        description: 'Built FDM, a Python automation tool using PySide6 and Selenium to streamline invoice retrieval from Mexico\'s SAT, reducing manual workload by 50%. Integrated real-time logging and error handling for financial operations.',
        tags: ['Python', 'Selenium', 'PySide6'],
        current: true,
    },
    {
        index: '02',
        period: 'OCT. 2025 — PRES',
        role: 'Infrastructure Staff',
        company: 'PawnGuard — ITESM Guadalajara',
        description: 'Built CI/CD pipeline using GitHub Actions and Docker to provision CTFd infrastructure for Hack2Dawn, an internal CTF competition. Developed OSINT challenge labs including GitHub forensics and Google dorking exercises.',
        tags: ['Docker', 'GitHub Actions', 'CTFd'],
        current: true,
    },
    {
        index: '03',
        period: 'AUG. 2024 — 2028',
        role: 'B.S. Computer Science & Technology',
        company: 'Tecnológico de Monterrey — ITESM',
        description: 'Bachelor\'s degree in Computer Science and Technology. AWS Certified Cloud Practitioner (Aug. 2025).',
        tags: ['AWS Certified', 'Cloud Practitioner'],
        current: false,
    },
];

const Experience = () => {
    return (
        <div className="about-page">
            <div className="about-inner">

                <header className="about-header">
                    <div className="about-header-label">
                        <span className="header-line"></span>
                        <span className="header-tag">System Capabilities</span>
                    </div>
                    <h1 className="about-title">
                        Technological<br /><span className="about-title-accent">Architecture.</span>
                    </h1>
                </header>

                {/* Skills bento */}
                <div className="skills-grid">
                    <div className="skill-card skill-card-large">
                        <div className="skill-card-header">
                            <span className="skill-module">Module_01</span>
                            <span className="skill-icon">⬡</span>
                        </div>
                        <h3 className="skill-title">Languages</h3>
                        <p className="skill-desc">Core programming languages across systems, web, and mobile development.</p>
                        <div className="skill-tags">
                            {skills.languages.map(s => (
                                <span key={s} className="skill-tag">{s}</span>
                            ))}
                        </div>
                    </div>

                    <div className="skill-card skill-card-medium">
                        <div className="skill-card-header">
                            <span className="skill-module skill-module-secondary">Module_02</span>
                        </div>
                        <h3 className="skill-title">Frameworks</h3>
                        <div className="skill-list">
                            {skills.frameworks.map(s => (
                                <div key={s} className="skill-list-item">
                                    <span>{s}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skill-card skill-card-medium">
                        <div className="skill-card-header">
                            <span className="skill-module skill-module-secondary">Module_03</span>
                        </div>
                        <h3 className="skill-title">Cloud & Backend</h3>
                        <div className="skill-list">
                            {skills.cloud.map(s => (
                                <div key={s} className="skill-list-item">
                                    <span>{s}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="skill-card skill-card-full">
                        <div className="skill-card-header">
                            <span className="skill-module">Module_04</span>
                        </div>
                        <h3 className="skill-title">Security & Tools</h3>
                        <div className="skill-tags">
                            {skills.security.map(s => (
                                <span key={s} className="skill-tag">{s}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Timeline */}
                <section className="timeline-section">
                    <div className="timeline-header">
                        <h2 className="timeline-title">Deployment_History</h2>
                        <div className="timeline-line"></div>
                    </div>

                    <div className="timeline-list">
                        {timeline.map(item => (
                            <div key={item.index} className={`timeline-item ${item.current ? 'timeline-current' : ''}`}>
                                <div className="timeline-left">
                                    <span className="timeline-period">{item.period}</span>
                                    <span className="timeline-index">{item.index}_{item.current ? 'CURRENT' : 'EDUCATION'}</span>
                                </div>
                                <div className="timeline-right">
                                    <div className="timeline-role-row">
                                        <h4 className="timeline-role">{item.role}</h4>
                                        <span className="timeline-company">{item.company}</span>
                                    </div>
                                    <p className="timeline-desc">{item.description}</p>
                                    <div className="timeline-tags">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="timeline-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Experience;
