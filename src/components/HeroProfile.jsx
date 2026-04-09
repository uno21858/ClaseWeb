// Imagen de pues nose un gato

const HeroProfile = () => {

    return (
        <div className="hero-right">
            <div className="hero-image-wrapper">
                <img
                    className="hero-image"
                    src="https://prueba-bucket-erick.s3.us-east-1.amazonaws.com/clippyuzi.png"
                    alt="Profile pfp"
                />
                <div className="hero-image-border"></div>
            </div>
            <div className="hero-location">
                <span className="hero-location-dot">◉</span>
                <span>Guadalajara Jalisco</span>
            </div>
        </div>
    );
};

export default HeroProfile;
