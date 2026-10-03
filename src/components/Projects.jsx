import { useState } from "react"
import projects from "../data/projects"
import background2 from "../assets/background2.png"
import HomeButton from "./HomeButton"

function Projects() {
  const [flippedCards, setFlippedCards] = useState({})

  const toggleCard = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <>
      <section
        id="projects"
        className="projects-section"
        style={{ backgroundImage: `url(${background2})` }}
      >
        <div className="projects-container">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
                <button
                key={project.id}
                type="button"
                className={`project-card ${
                    flippedCards[project.id] ? "flipped" : ""
                }`}
                onClick={() => toggleCard(project.id)}
                >
                <div className="project-card-inner">

                    <div className="project-card-front">
                    <span className="project-number">
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{project.title}</h3>
                    <p>{project.tech}</p>
                    </div>

                    <div className="project-card-back">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <span className="flip-hint">
                        ← Back
                    </span>
                    </div>

                </div>
                </button>
            ))}
            </div>
        </div>
      </section>

      <HomeButton />
    </>
  )
}

export default Projects