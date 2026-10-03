import profileImg from "../assets/profile.jpg"
import background2 from "../assets/background2.png"

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
            <span>B.Sc., Major in Computer Science</span>
            Minor in Statistics
            <br />
            McGill University
            <br />
            2022 – 2026
            </p>
            <p>
              <span>MEng, Electrical & Computer Engineering</span>
              University of Toronto
              <br />
              2026 – Present
            </p>
          </div>
        </div>

        <div className="about-right">
          <h2>About</h2>

          <p className="about-intro">
            With an undergraduate background spanning computer science and
            statistics, I became increasingly interested in understanding the
            bigger picture behind the technologies we build—how data,
            intelligent systems, and software can work together to solve
            complex problems.
          </p>

          <p className="about-intro">
            With the goal of developing deeper expertise in analytics and artificial
            intelligence, I chose to pursue an MEng in Electrical and Computer
            Engineering at the University of Toronto. My coursework and projects have
            focused on areas including full-stack development, large language model
            evaluation, cloud computing, machine learning, and software systems.
          </p>
        </div>

        <a href="#experience" className="about-next-button">
            <span>Explore My Experience</span>
            <span className="about-arrow">→</span>
        </a>

      </div>
    </section>
  )
}

export default About