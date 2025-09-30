import cool_graphic from "../assets/cool_graphic.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_text_box">
        <h1 className="zalando-sans-expanded" id="hero_header">
          Hi! <br /> My name is
          <span className="zalando-sans-expanded purple_header" id="hero_header">
            <br />Jedidiah
          </span>
        </h1>

        <p className="inter">
          A full-stack developer creating practical solutions to real problems.
        </p>
      </div>
      <img className="hero_image" src={cool_graphic} alt="Hero Image" />
    </div>
  );
};

export default Hero;
