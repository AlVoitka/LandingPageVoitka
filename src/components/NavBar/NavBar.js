import './navbar.scss';
import logo from '../../resources/img/av_logo.png';

function NavBar() {
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <a href="">
                    <img src={logo} style={{borderRadius:'5px'}} alt="logo"></img>
                </a>
            </div> 
            <div>
                <nav className="navbar__links">
                    <a href="#" className="navbar__link">About</a>
                    <a href="#" className="navbar__link">My Skills</a>
                    <a href="#" className="navbar__link">Work</a>
                    <button>Contact</button>
                </nav>
            </div>
        </div>
    )
}

export default NavBar