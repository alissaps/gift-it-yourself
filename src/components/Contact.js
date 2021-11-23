import Navbar from "./Navbar";
import redLineImg from "./assets/red-line.png";
import githubImg from "./assets/github-icon.png";
import linkedinImg from "./assets/linkedin-icon.png";
import emailImg from "./assets/email-icon.png";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />
      <h1 className="mt-5">Contact Us</h1>
      <div className="contact-container">
        <section className="contact-section">
          <img alt="red line" className="red-line random-image-position" src={redLineImg} />
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="first-contact">Alissa Seixas</h2>
            <div className="d-flex">
              <img alt="github" src={githubImg} />
              <img alt="linkedin" src={linkedinImg} />
              <img alt="email" src={emailImg} />
            </div>
          </div>
        </section>

        <section className="contact-section">
          <img alt="red line" className="red-line random-image-position" src={redLineImg} />
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h2 className="second-contact">Edgar Azevedo</h2>
            <div className="d-flex">
              <img alt="github" src={githubImg} />
              <img alt="linkedin" src={linkedinImg} />
              <img alt="email" src={emailImg} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
