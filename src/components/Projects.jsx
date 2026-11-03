
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
            {projects.map((project, index) => {
              const isFlipped = !!flippedCards[project.id]

              return (
                <div
                  key={project.id}
                  className={`project-card ${isFlipped ? "flipped" : ""}`}
                >
                  <div className="project-card-inner">

                    {/* FRONT */}
                    <button
                      type="button"
                      className="project-card-front"
                      onClick={() => toggleCard(project.id)}
                      tabIndex={isFlipped ? -1 : 0}
                      aria-hidden={isFlipped}
                      aria-label={`View details for ${project.title}`}
                    >
                      <span className="project-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3>{project.title}</h3>
                      <p>{project.tech}</p>
                    </button>

                    {/* BACK */}
                    <div
                      className="project-card-back"
                      aria-hidden={!isFlipped}
                    >
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>

                      <div className="project-links">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            tabIndex={isFlipped ? 0 : -1}
                          >
                            GitHub ↗
                          </a>
                        )}

                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            tabIndex={isFlipped ? 0 : -1}
                          >
                            Live Website ↗
                          </a>
                        )}
                      </div>

                      <button
                        type="button"
                        className="flip-hint"
                        onClick={() => toggleCard(project.id)}
                        tabIndex={isFlipped ? 0 : -1}
                      >
                        ← Back
                      </button>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <HomeButton />
    </>
  )
}

export default Projects
