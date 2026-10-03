import { Link } from "react-router-dom"
import homeIcon from "../assets/home.png"

function HomeButton() {
  return (
    <Link to="/" className="home-button" aria-label="Back to home">
      <img src={homeIcon} alt="Home" />
    </Link>
  )
}

export default HomeButton