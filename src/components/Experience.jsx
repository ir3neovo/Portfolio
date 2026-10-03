import { useState } from "react"
import HomeButton from "./HomeButton"
import background2 from "../assets/background2.png"

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
                <p>Professional experience content goes here.</p>
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
                <p>Academic experience content goes here.</p>
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
                <p>Extracurricular experience content goes here.</p>
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