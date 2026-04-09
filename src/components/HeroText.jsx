import { Link } from "react-router";

const HeroText = () => {
    return (
        <div className="hero-left">
            <p className="main-text">
                Crafting Code as <span className="digital-art">Digital Artifacts</span>
            </p>
            <p className="hero-subtitle">
                Computer Science student building real-world software — from automation tools to AWS deployments.
            </p>
            <div className="btn-container">
                <button className="btn"><Link to={'/Projects'}>View Projects</Link></button>
                <button className="btn"><Link to={'/experience'}>About Me</Link></button>
            </div>
        </div>
    );
};

export default HeroText;
