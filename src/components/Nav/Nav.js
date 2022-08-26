import './Nav.css'
import tainted from '../../assets/tainted.jpeg'

const Nav = ( ) => {

  return (
    <div className="navbar">
      <img 
        src={ tainted } 
        alt='tainted-peach-logo' 
        className="tainted-peach-image"/>
      <h1 className="nav-title">Tainted Peaches</h1>
      {/* <p className="nav-tagline">We got movies!</p> */}
    </div>
  )

}


export default Nav