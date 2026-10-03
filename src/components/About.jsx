import profileImg from "../assets/profile.jpg"
import background2 from "../assets/background2.png"
import { Link } from "react-router-dom"
import HomeButton from "./HomeButton"

function About() {
  return (
    <section
        id="about"
        className="about-section"
        style={{ backgroundImage: `url(${background2})` }}
    >
      <div className="about-card">

        <div className="about-left">
          <img
            src={profileImg}
            alt="Irene Wang"
            className="profile-image"
          />

          <div className="education-info">
            <h3>Irene Wang</h3>
            <p>
            <span>B.Sc., Computer Science</span>
            Minor in Statistics
            <br>
            McGill University
            </br>
            2022 – 2026
            </p>
            <p>
              <span>MEng, Electrical & Computer Engineering</span>
              <br>
              University of Toronto
              </br>
              2026 – Present
            </p>
          </div>
        </div>

        <div className="about-right">
          <h2>About</h2>

          <p className="about-intro">
            As AI takes on more of the coding itself, I’ve become increasingly 
            interested in the bigger picture—how data, intelligent systems, and 
            software components fit together, why design decisions matter, and how 
            technology can solve real-world problems.
          </p>

          <p className="about-intro">
            This led me to pursue an MEng in Electrical and Computer Engineering at 
            the University of Toronto, where my coursework and projects have allowed me
            to explore full-stack development, large language model evaluation, cloud 
            computing, machine learning, and performant software systems.
          </p>
        </div>

        <Link to="/experience" className="about-next-button">
            <span>Explore My Experience</span>
            <span className="about-arrow">→</span>
        </Link>

      </div>
      <HomeButton />
    </section>
    
  )
}

export default About