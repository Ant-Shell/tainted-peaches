import './Nav.css'
import tainted from '../../assets/tainted.jpeg'
import { Link } from "react-router-dom"

const Nav = ( { homeButton, returnHome } ) => {
  return (
    <div className="navbar">
      <img 
        src={ tainted } 
        alt='tainted-peach-logo' 
        className="tainted-peach-image"/>
      <h1 className="nav-title">Tainted Peaches</h1>
      {/* { homeButton && <button className='nav-home-button' onClick={() => returnHome()}>Take Me Home</button>} */}
      <Link to={'/'}onClick={() => returnHome()}>{ homeButton && <button className='nav-home-button'>Take Me Home</button>}</Link>
    </div>
  )

}


export default Nav