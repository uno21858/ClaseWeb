import { Link } from "react-router";

const HeroText = () => {
    return (
        <div className="hero-left">
            <p className="main-text">
                Crafting Code as <span className="digital-art">Digital Artifacts</span>
            </p>
            <p className="hero-subtitle">
                Full-stack developer specializing in building high-performance, visually
                stunning web experiences that live at the intersection of design and data.
            </p>
            <div className="btn-container">
                <button className="btn"><Link to={'/Projects'}>View Projects</Link></button>
                <button className="btn"><Link to={'/AboutMe'}>About Me</Link></button>
            </div>
        </div>
    );
};

export default HeroText;
