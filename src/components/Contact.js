import Navbar from "./Navbar";
import githubImg from "./assets/github-icon.png";
import linkedinImg from "./assets/linkedin-icon.png";
import emailImg from "./assets/email-icon.png";
import alissaImg from "./assets/alissa-foto.jpeg";
import edgarImg from "./assets/edgar-foto.jpeg";
import "./Contact.css";
import { ExternalLink } from "react-external-link";

function Contact() {
  return (
    <>
      <Navbar />
      <h1 className="mt-5 mb-4">Contact Us</h1>
      <p style={{width: "800px"}} className="mx-auto mb-5 mt-5 gift-text-description">Gift It Yourself is a web application built using React JS, Router-Dom, and Axios. It was made as the second project of Ironhack's Bootcamp of Web Development.</p>
      <div className="contact-container">
        <section id="first-contact" className="contact-section">
          
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
            <img alt="alissa" className="picture" style={{height: "120px"}} src={alissaImg} />
          </div>
        </section>

        <section id="second-contact" className="contact-section">
          
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
            <img alt="edgar" className="picture" style={{height: "120px"}} src={edgarImg} />
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
