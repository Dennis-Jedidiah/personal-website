import picture from "../assets/cool_selfie.jpeg";

const AboutMe = () => {
  return (
    <div className="about-me" id="about_me">
      <div className="about-me-text">
        <h2 className="purple_subheader">About Me</h2>
        <p>
          I'm a computer science student and full-stack developer based in
          Ontario, Canada. I love solving problems with code and turning
          concepts into working applications. Outside of programming, you'll
          find me gaming, reading, or planning the next hackathon project with
          friends.
        </p>
      </div>
      <div className="about-me-image">
        <img src={picture} alt="A cool selfie" />
      </div>
    </div>
  );
};

export default AboutMe;
