import './Nav.css'
import tainted from '../../assets/tainted.jpeg'
import { Link } from "react-router-dom"

const Nav = ({ homeButton }) => {
  return (
    <div className="navbar">
      <img
        src={tainted}
        alt='tainted-peach-logo'
        className="tainted-peach-image" />
      <h1 className="nav-title">Tainted Peaches</h1>
      <Link to={'/'}>{homeButton && <button>Take Me Home</button>}</Link>
    </div>
  )
}

export default Nav