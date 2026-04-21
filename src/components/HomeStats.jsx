import './HomeStats.css';

const HomeStats = () => (
    <section className="stats-section">
        <p className="stats-label">$ stats --user uno21858</p>
        <div className="stats-grid">
            <div className="stat-card">
                <div className="stat-value green">10+</div>
                <div className="stat-desc">Tecnologías</div>
            </div>
            <div className="stat-card">
                <div className="stat-value purple">AWS</div>
                <div className="stat-desc">Cloud</div>
            </div>
            <div className="stat-card">
                <div className="stat-value blue">GDL</div>
                <div className="stat-desc">Jalisco, MX</div>
            </div>
        </div>
    </section>
);

export default HomeStats;