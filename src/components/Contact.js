import Navbar from "./Navbar";
import redLineImg from "./assets/red-line.png";
import githubImg from "./assets/github-icon.png";
import linkedinImg from "./assets/linkedin-icon.png";
import emailImg from "./assets/email-icon.png";
import "./Contact.css";
import { ExternalLink } from "react-external-link";

function Contact() {
  return (
    <>
      <Navbar />
      <h1 className="mt-5">Contact Us</h1>
      <div className="contact-container">
        <section id="first-contact" className="contact-section">
          <img
            alt="red line"
            className="first-contact-red-line"
            src={redLineImg}
          />
          <div className="d-flex flex-column-reverse justify-content-center align-items-center">
            
            <div className="link-effect d-flex">
              <ExternalLink href="https://github.com/alissaps">
                <img alt="github" src={githubImg} />
              </ExternalLink>

              <ExternalLink href="https://www.linkedin.com/in/alissaseixas/">
                <img alt="linkedin" src={linkedinImg} />
              </ExternalLink>

              <ExternalLink href="mailto:alissaps@gmail.com">
                <img alt="email" src={emailImg} />
              </ExternalLink>
            </div>
            <h2 className="first-contact">Alissa Seixas</h2>
          </div>
        </section>

        <section id="second-contact" className="contact-section">
          <img
            alt="red line"
            className="second-contact-red-line"
            src={redLineImg}
          />

          <div className="d-flex flex-column-reverse justify-content-center align-items-center">

            <div className="link-effect d-flex">
              <ExternalLink href="https://github.com/edgarvazevedo">
                <img alt="github" src={githubImg} />{" "}
              </ExternalLink>

              <ExternalLink href="https://www.linkedin.com/in/edgarvazevedo/">
                <img alt="linkedin" src={linkedinImg} />
              </ExternalLink>

              <ExternalLink href="mailto:edgarvazevedo@gmail.com">
                <img alt="email" src={emailImg} />
              </ExternalLink>
            </div>
            <h2 className="second-contact">Edgar Azevedo</h2>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
