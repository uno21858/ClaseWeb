import './Hero.css';
import HeroText from './HeroText.jsx';
import HeroProfile from './HeroProfile.jsx';

const Hero = () => {
    return (
        <div className="hero-container">
            <HeroText />
            <HeroProfile />
        </div>
    );
};

export default Hero;
