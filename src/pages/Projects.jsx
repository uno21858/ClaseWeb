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
        name: 'Traffic Sign CNN',
        subtitle: 'Convolutional Neural Network for Traffic Signs',
        tags: ['Python', 'Pytorch', 'Jupyter', 'CNN', 'ML'],
        description: 'Convolutional Neural Network for traffic sign recognition and classification. Built as part of a scholarship research service program.',
        badge: 'IN PROGRESS',
        year: '2026',
        github: 'https://github.com/uno21858/traffic-sign-cnn',
        featured: false,
    },
    {
        id: '03',
        name: 'ClaseWeb',
        subtitle: 'Personal Portfolio Website',
        tags: ['React', 'Vite', 'Resend', 'Vercel', 'CSS'],
        description: 'This portfolio. Built with React and vanilla CSS, serverless contact form with Resend, deployed on Vercel. No CSS frameworks.',
        badge: null,
        year: '2026',
        github: 'https://github.com/uno21858/ClaseWeb',
        featured: false,
    },
    {
        id: '04',
        name: 'Hack2Dawn',
        subtitle: 'CTF Competition Infrastructure',
        tags: ['Docker', 'GitHub Actions', 'CTFd', 'OSINT'],
        description: 'CI/CD pipeline using GitHub Actions and Docker to provision CTFd infrastructure for an internal jeopardy-style CTF competition. Developed OSINT challenge labs including GitHub forensics and Google dorking exercises.',
        badge: 'PAWNGUARD — ITESM',
        year: 'OCT. 2025',
        github: 'https://github.com/uno21858',
        featured: false,
    },
    {
        id: '05',
        name: 'FlowCast',
        subtitle: 'Streaming Service Modeling System',
        tags: ['C++', 'OOP', 'CMake'],
        description: 'Object-oriented streaming platform model with films and series classification, user satisfaction ratings, and data analysis report generation. Demonstrates inheritance, polymorphism, and operator overloading.',
        badge: null,
        year: 'JUN. 2025',
        github: 'https://github.com/uno21858/FlowCast',
        featured: false,
    },
    {
        id: '06',
        name: 'FDM',
        subtitle: 'Invoice Automation Tool',
        tags: ['Python', 'PySide6', 'Selenium'],
        description: 'Desktop automation tool that streamlines invoice retrieval from Mexico\'s National Tax Authority (SAT). Reduced manual workload by 50% with real-time logging and error handling.',
        badge: null,
        year: 'AUG. 2022',
        github: 'https://github.com/uno21858/FacturaDieselManager',
        featured: false,
    },
];

const Projects = () => {
    return (
        <div className="projects-page">
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

                {/* Featured project - full width */}
                <div className="project-card project-featured">
                    <div className="project-featured-inner">
                        <div className="project-featured-left">
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
                            </div>
                        </div>
                        <div className="project-featured-right">
                            <p className="project-desc">{projects[0].description}</p>
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
                    </div>
                </div>

                {/* Project grid */}
                <div className="projects-grid">
                    {projects.slice(1).map(p => (
                        <div key={p.id} className="project-card project-small">
                            <div className="project-card-top">
                                <span className="project-id">{p.id}</span>
                                {p.badge && (
                                    <span className={p.badge === 'IN PROGRESS' ? 'project-badge-progress' : 'project-badge-sm'}>
                                        {p.badge}
                                    </span>
                                )}
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
    );
};

export default Projects;
