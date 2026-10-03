function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <p className="hero-eyebrow">Hello, I’m</p>

        <h1>Irene Wang</h1>

        <h2>
          MEng Electrical & Computer Engineering student focused on
          software, machine learning, and data.
        </h2>

        <p className="hero-description">
          I build software and data-driven projects across full-stack
          development, machine learning, systems programming, and applied
          research.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button">
            View Projects
          </a>

          <a
            href="https://github.com/ir3neovo"
            target="_blank"
            rel="noreferrer"
            className="secondary-button"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero