import emailIcon from "../assets/email.png"
import linkedinIcon from "../assets/linkedin.png"
import githubIcon from "../assets/github.png"
import background2 from "../assets/background2.png"
import HomeButton from "./HomeButton"

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="contact-section"
        style={{ backgroundImage: `url(${background2})` }}
      >
        <div className="contact-container">
          <h2>Contact</h2>

          <div className="contact-links">
            <a
              href="mailto:ireneyuyao.wang@mail.utoronto.ca"
              className="contact-item"
            >
              <img src={emailIcon} alt="Email" />
              <span>Email</span>
            </a>

            <a
              href="https://www.linkedin.com/in/irenew564311"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <img src={linkedinIcon} alt="LinkedIn" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/ir3neovo"
              target="_blank"
              rel="noreferrer"
              className="contact-item"
            >
              <img src={githubIcon} alt="GitHub" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      <HomeButton />
    </>
  )
}

export default Contact