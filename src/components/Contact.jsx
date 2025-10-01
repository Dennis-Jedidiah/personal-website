import InputBar from "./InputBar";

const Contact = () => {
  return (
    <div id="contact" className="contact-me">
      <div className="contact-me-text">
        <h2 className="purple_subheader">Get in Touch</h2>
        <p>
          I'm currently open to freelancing, internships and entry-level
          developer positions. Let's connect if you're working on something
          interesting or need help bringing an idea to life.
        </p>
      </div>
      <form className="contact-form">
        <InputBar placeholder="Your Name" islong={false} />

        <InputBar placeholder="Your Email" islong={false} />

        <InputBar placeholder="Your Message" islong={true} />

        <button className="submit-button" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
