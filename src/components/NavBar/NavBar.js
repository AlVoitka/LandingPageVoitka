import './navbar.scss';
import logo from '../../resources/img/av_logo.png';

function NavBar() {
    return (
        <div className='navbar'>
            <div className='navbar__wrapper'>
                <div className='navbar__logo'>
                    <a href="">
                        <img src={logo} style={{borderRadius:'5px'}} alt="logo"></img>
                    </a>
                </div> 
                <div>
                    <nav className="navbar__links">
                        <ul className="navbar__list">
                            <li className="navbar__link"><a>About</a></li>
                            <li className="navbar__link"><a>Skills</a></li>
                            <li className="navbar__link"><a>Work</a></li>
                            <button className='navbar__btn'>Contact</button>
                        </ul>
                        
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default NavBar