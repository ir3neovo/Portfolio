import backgroundImg from "../assets/background.png"

function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <NavbarContent />
    </section>
  )
}

function NavbarContent() {
  return (
    <div className="hero-inner">
      <div className="hero-text">
        <h1 className="intro-text">Hi, I’m Irene</h1>

        <h2 className="welcome-text typing-text">
            Welcome to my Portfolio
        </h2>

        <a href="#about" className="get-started-button">
          <span className="button-circle">→</span>
          <span>Get Started</span>
        </a>
      </div>
    </div>
  )
}

export default Hero