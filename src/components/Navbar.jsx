import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-line"></div>

      <div className="nav-links">
        <Link to="/about">ABOUT</Link>
        <Link to="/experience">EXPERIENCE</Link>
        <Link to="/projects">PROJECT</Link>
        <Link to="/contact">CONTACT</Link>
      </div>

      <div className="nav-line"></div>
    </nav>
  )
}

export default Navbar