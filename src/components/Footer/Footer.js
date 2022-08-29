import './Footer.css'
import linkedInIcon from '../../assets/linkedin.png'
import gitHubIcon from '../../assets/github.png'

const Footer = ( ) => {
  return (
    <div className="footer-container">
      <div className='jordan-container'>
        <h4>Jordan Farelli</h4>
        <a
          href='https://www.linkedin.com/in/jordan-farelli/'
          target="_blank"
          rel="noreferrer">
          <img 
            src={ linkedInIcon }
            alt='linkedin-icon'
            className='linkedin-icon'/>
        </a>
        <a 
          href='https://github.com/jfarelli'
          target="_blank"
          rel="noreferrer">
          <img 
            src={ gitHubIcon }
            alt='github-icon'
            className='github-icon'/>
        </a>
      </div>

      <div className='anthony-container'>
        <h4>Anthony Shellman</h4>
        <a
          href='https://www.linkedin.com/in/anthonyshellman/'
          target="_blank"
          rel="noreferrer">
          <img 
            src={ linkedInIcon }
            alt='linkedin-icon'
            className='linkedin-icon'/>
        </a>
        <a
          href='https://github.com/Ant-Shell'
          target="_blank"
          rel="noreferrer">
          <img 
            src={ gitHubIcon }
            alt='github-icon'
            className='github-icon'/>
        </a>
      </div>
    </div>
  )
}




export default Footer