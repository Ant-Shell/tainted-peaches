import tainted from '../../assets/tainted.jpeg'
import './Nav.css'

const Nav = () => {
  return (
    <div className="navbar">
      <img src={tainted} alt='Tainted peach logo' className="logo"></img>
      <h1 className="nav-title">Tainted Peaches</h1>
      <p className="tagline">We got movies!</p>
    </div>
  )
}





export default Nav