import { useState } from "react"
import HomeButton from "./HomeButton"
import background2 from "../assets/background2.png"
import { Link } from "react-router-dom"

function Experience() {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <section
        id="experience"
        className="experience-section"
        style={{ backgroundImage: `url(${background2})` }}
    >
      <div className="experience-container">
        <h2>Experience</h2>

        <div className="experience-menu">

          <div className="experience-item">
            <button
              className="experience-header"
              onClick={() => toggleSection("professional")}
            >
              <span>Professional</span>
              <span className="dropdown-icon">
                {openSection === "professional" ? "−" : "+"}
              </span>
            </button>

            {openSection === "professional" && (
              <div className="experience-content">
                <div className="experience-entry">
                <h3>Digital Marketing & Social Media Intern</h3>
                <p>
                    Canadian Rheumatology Association (CRA), Toronto, ON
                </p>
                <span>Jun. 2026 – Jul. 2026</span>
                </div>

                <div className="experience-entry">
                <h3>Project Assistant Intern</h3>
                <p>
                    Huawei Canada
                </p>
                <span>Jul. 2024 – Sep. 2024</span>
                </div>

              </div>
            )}
          </div>

          <div className="experience-item">
            <button
              className="experience-header"
              onClick={() => toggleSection("academia")}
            >
              <span>Academia</span>
              <span className="dropdown-icon">
                {openSection === "academia" ? "−" : "+"}
              </span>
            </button>

            {openSection === "academia" && (
              <div className="experience-content">
                <div className="experience-entry">
                    <h3>Teaching Assistant</h3>
                    <p>ECE244 Programming Fundamentals (Fall 2026)</p>
                </div>
              </div>
            )}
          </div>

          <div className="experience-item">
            <button
              className="experience-header"
              onClick={() => toggleSection("extracurricular")}
            >
              <span>Extracurricular</span>
              <span className="dropdown-icon">
                {openSection === "extracurricular" ? "−" : "+"}
              </span>
            </button>

            {openSection === "extracurricular" && (
              <div className="experience-content">
                <div className="experience-entry">
                <h3>Vice President, Communications & Marketing</h3>
                <p>
                    Electrical & Computer Engineering Graduate Student Society (ECEGSS),
                    University of Toronto
                </p>
                <span>Sep. 2026 – Present</span>
                </div>

                <div className="experience-entry">
                <h3>Program Support / Visual Graphics Designer</h3>
                <p>
                    International Education Help Organisation (IEHO)
                </p>
                <span>Feb. 2026 – Present</span>
                </div>

                <div className="experience-entry">
                <h3>Vice President, Media</h3>
                <p>
                    Chinese Students & Scholars Association (CSSA), McGill University
                </p>
                <span>May 2025 – Apr. 2026</span>
                </div>
              </div>
            )}
          </div>

        </div>

        
      </div>
      <HomeButton />
    </section>
  )
}

export default Experience