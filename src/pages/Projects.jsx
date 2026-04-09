import './Projects.css';

const projects = [
    {
        id: '01',
        name: 'Zenalyse',
        subtitle: 'IoT Environmental Monitoring System',
        tags: ['Raspberry Pi', 'AWS EC2', 'Next.js', 'PostgreSQL', 'Python'],
        description: 'Real-time IoT monitoring system using Raspberry Pi with sensors (DHT11, MQ-135, PIR, LDR) to track air quality, temperature, humidity, light, and movement. Calculates environmental quality scores every 5 seconds.',
        badge: '1ST PLACE — SKILLIKET SYMPOSIUM',
        year: 'NOV. 2025',
        github: 'https://www.linkedin.com/posts/erick-alberto-sanchez_iot-internetofthings-raspberrypi-ugcPost-7404780671338180608-Ht0X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESA6ZoBf7qTW2ZUuHUCXKkfpudjAe2IFd4',
        featured: true,
    },
    {
        id: '02',
        name: 'FDM',
        subtitle: 'Invoice Automation Tool',
        tags: ['Python', 'PySide6', 'Selenium'],
        description: 'Desktop automation tool that streamlines invoice retrieval from Mexico\'s National Tax Authority (SAT). Reduced manual workload by 50% with real-time logging and error handling.',
        badge: null,
        year: 'AUG. 2022',
        github: 'https://github.com/uno21858',
        featured: false,
    },
    {
        id: '03',
        name: 'Hack2Dawn',
        subtitle: 'CTF Competition Infrastructure',
        tags: ['Docker', 'GitHub Actions', 'CTFd', 'OSINT'],
        description: 'CI/CD pipeline using GitHub Actions and Docker to provision CTFd infrastructure for an internal jeopardy-style CTF competition. Developed OSINT challenge labs including GitHub forensics and Google dorking exercises.',
        badge: 'PAWNGUARD — ITESM',
        year: 'OCT. 2025',
        github: 'https://github.com/uno21858',
        featured: false,
    },
];

const Projects = () => {
    return (
        <div className="projects-page blueprint-grid">
            <div className="projects-inner">
                <header className="projects-header">
                    <div className="projects-header-label">
                        <span className="header-line"></span>
                        <span className="header-tag">Selected Work</span>
                    </div>
                    <h1 className="projects-title">
                        Project<br /><span className="projects-title-accent">Archive.</span>
                    </h1>
                </header>

                <div className="projects-grid">
                    {/* Featured project - big */}
                    <div className="project-card project-featured">
                        <div className="project-card-top">
                            <span className="project-id">{projects[0].id}</span>
                            {projects[0].badge && (
                                <span className="project-badge">{projects[0].badge}</span>
                            )}
                        </div>
                        <div className="project-card-body">
                            <span className="project-year">{projects[0].year}</span>
                            <h2 className="project-name">{projects[0].name}</h2>
                            <p className="project-subtitle">{projects[0].subtitle}</p>
                            <p className="project-desc">{projects[0].description}</p>
                        </div>
                        <div className="project-card-bottom">
                            <div className="project-tags">
                                {projects[0].tags.map(tag => (
                                    <span key={tag} className="project-tag">{tag}</span>
                                ))}
                            </div>
                            <a href={projects[0].github} target="_blank" rel="noreferrer" className="project-link">
                                View Source →
                            </a>
                        </div>
                    </div>


                    {/* Smaller cards */}
                    <div className="projects-grid-small">
                        {projects.slice(1).map(p => (
                            <div key={p.id} className="project-card project-small">
                                <div className="project-card-top">
                                    <span className="project-id">{p.id}</span>
                                    {p.badge && <span className="project-badge-sm">{p.badge}</span>}
                                </div>
                                <div className="project-card-body">
                                    <span className="project-year">{p.year}</span>
                                    <h2 className="project-name">{p.name}</h2>
                                    <p className="project-subtitle">{p.subtitle}</p>
                                    <p className="project-desc">{p.description}</p>
                                </div>
                                <div className="project-card-bottom">
                                    <div className="project-tags">
                                        {p.tags.map(tag => (
                                            <span key={tag} className="project-tag">{tag}</span>
                                        ))}
                                    </div>
                                    <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                                        View Source →
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
