import { useState } from "react"
import { Link } from "react-router-dom"

import experiences from "../data/experiences"
import background2 from "../assets/background2.png"
import HomeButton from "./HomeButton"

function ExperienceEntries({ items }) {
  return (
    <div className="experience-content">
      {items.map((item) => (
        <div className="experience-entry" key={item.id}>
          <h3>{item.role}</h3>

          <p>
            {item.organization}
            {item.location && `, ${item.location}`}
          </p>

          <span>{item.date}</span>
        </div>
      ))}
    </div>
  )
}

function Experience() {
  const [openSection, setOpenSection] = useState(null)

  const toggleSection = (section) => {
    setOpenSection((current) =>
      current === section ? null : section
    )
  }

  return (
    <>
      <section
        id="experience"
        className="experience-section"
        style={{ backgroundImage: `url(${background2})` }}
      >
        <div className="experience-container">
          <h2>Experience</h2>

          <div className="experience-menu">

            {/* PROFESSIONAL */}
            <div className="experience-item">
              <button
                type="button"
                className="experience-header"
                onClick={() => toggleSection("professional")}
                aria-expanded={openSection === "professional"}
              >
                <span>Professional</span>

                <span className="dropdown-icon">
                  {openSection === "professional" ? "−" : "+"}
                </span>
              </button>

              {openSection === "professional" && (
                <ExperienceEntries
                  items={experiences.professional}
                />
              )}
            </div>

            {/* ACADEMIA */}
            <div className="experience-item">
              <button
                type="button"
                className="experience-header"
                onClick={() => toggleSection("academia")}
                aria-expanded={openSection === "academia"}
              >
                <span>Academia</span>

                <span className="dropdown-icon">
                  {openSection === "academia" ? "−" : "+"}
                </span>
              </button>

              {openSection === "academia" && (
                <ExperienceEntries
                  items={experiences.academia}
                />
              )}
            </div>

            {/* EXTRACURRICULAR */}
            <div className="experience-item">
              <button
                type="button"
                className="experience-header"
                onClick={() => toggleSection("extracurricular")}
                aria-expanded={openSection === "extracurricular"}
              >
                <span>Extracurricular</span>

                <span className="dropdown-icon">
                  {openSection === "extracurricular" ? "−" : "+"}
                </span>
              </button>

              {openSection === "extracurricular" && (
                <ExperienceEntries
                  items={experiences.extracurricular}
                />
              )}
            </div>

          </div>

          <Link
            to="/projects"
            className="experience-next-button"
          >
            <span>Explore My Projects</span>
            <span className="experience-arrow">→</span>
          </Link>
        </div>
      </section>

      <HomeButton />
    </>
  )
}

export default Experience