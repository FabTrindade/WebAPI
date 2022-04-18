
import GithubIcon from './github.svg';
import './NavBarStyles.css';


function Navbar()
{
    return(
        <header>
        <nav className = "container">
          <div className = "nav-content">
            <a href= "/">
              <div className ="contact-container">              
                <p className="nav-link">Home</p>
              </div>
            </a>
            <a href= "/department">
              <div className ="contact-container">              
                <p className="nav-link">Department</p>
              </div>
            </a>
            <a href= "/employee">
              <div className ="contact-container">              
                <p className="nav-link">Employee</p>
              </div>
            </a>
            
            <a href= "https://github.com/FabTrindade">
              <div className ="contact-container">
                <img src={GithubIcon} alt="logo"/>
                <p className="contact-link">/FabTrindade</p>
              </div>
            </a>
          </div>
        </nav>
      </header> 
    )
}

export default Navbar;