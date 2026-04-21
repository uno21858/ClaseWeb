// src/components/GitHubActivity.jsx
import { GitHubCalendar } from 'react-github-calendar';
import './GitHubActivity.css';

const LEARNING = [
    'TypeScript / TSX',
    'Next.js',
    'PyTorch',
    'SQL — Normalización (NF)',
];

const GitHubActivity = () => (
    <section className="activity-section">
        <p className="activity-label">$ git contributions --year 2026</p>
        <div className="activity-row">
            <div className="activity-heatmap">
                <p className="heatmap-title">
                    GitHub Activity — <span>uno21858</span>
                </p>
                <GitHubCalendar
                    username="uno21858"
                    year={2026}
                    colorScheme="dark"
                    fontSize={12}
                    blockSize={11}
                    blockMargin={3}
                />
            </div>
            <div className="activity-learning">
                <p className="learning-title">// currently_learning</p>
                <ul className="learning-list">
                    {LEARNING.map(item => (
                        <li key={item} className="learning-item">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);

export default GitHubActivity;
