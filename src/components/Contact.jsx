import InputBar from "./InputBar";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.init({publicKey:"drmXlNHR3x1JH_-nI"})
    emailjs.sendForm(
        "service_b8fu4my",
        "template_cwl0gla",
        e.target,
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert(`Failed to send message, please try again.\nError: ${error.text}`);
        }
      );
  };

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
      <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
        <InputBar placeholder="Name" islong={false} />

        <InputBar placeholder="Email" islong={false} isEmail={true}/>

        <InputBar placeholder="Message" islong={true} />

        <button className="submit-button" type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
