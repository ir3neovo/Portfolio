import { useState } from "react"
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

  const projects = [
    {
      id: 1,
      title: "Full-Stack Booking Platform",
      tech: "PHP • MySQL • JavaScript • HTML/CSS",
      description:
        "A scheduling platform for students and professors featuring role-based accounts, recurring office hours, booking requests, notifications, dashboards, and appointment management.",
    },
    {
      id: 2,
      title: "Quantifier Reasoning in LLMs",
      tech: "Python • BERT • Llama 3 • GPT-4",
      description:
        "Evaluated large language models on commonsense truth judgment, quantifier reasoning, and scope ambiguity to explore differences in logical reasoning across model families.",
    },
    {
    id: 3,
        title: "Online Ordering Database System",
        tech: "Java • SQL • Relational Databases",
        description:
        "Built an online ordering database with inventory, coupons, billing, and reporting features, using SQL procedures and a Java application to automate ordering and inventory workflows.",

    },
    {
      id: 4,
      title: "Operating System Simulation",
      tech: "C • Linux • Pthreads",
      description:
        "Developed systems projects including a command-line shell, process scheduling simulator, PCB and ready-queue management, and concurrent programming exercises.",
    },
  ]

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
            {projects.map((project) => (
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
                      0{project.id}
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