import './navbar.scss';
import logo from '../../resources/img/av_logo.png';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function NavBar() {
    return (
        <motion.div 
            className='navbar'
            initial={{
                y: -30,
                opacity: 0,
                

            }}
            animate={{
                y: 0.5,
                opacity: 1,
            }}
            transition={{
                delay: 3,
                duration: 1,
            }}
        >
            <motion.div 
                className='navbar__wrapper'
                initial={{
                    y: -10,
                    opacity: 0,
                    

                }}
                animate={{
                    y: 0,
                    opacity: 1,
                }}
                transition={{
                    delay: 3.5,
                    duration: 1,
                }}
            >
                <div className='navbar__logo'>
                    <Link exact='true' to='/'><img src={logo} style={{borderRadius:'5px'}} alt="logo"></img></Link>
                </div> 
                <div>
                    <nav className="navbar__links">
                        <ul className="navbar__list">
                            <li className="navbar__link"><NavLink exact activeStyle={{color:'rgba(244, 248, 3, 0.7)', fontSize: '23px'}} to='/about'>About</NavLink></li>
                            <li className="navbar__link"><NavLink exact activeStyle={{color:'rgba(244, 248, 3, 0.7)', fontSize: '23px'}} to='/skills'>Skills</NavLink></li>
                            <li className="navbar__link"><NavLink exact activeStyle={{color:'rgba(244, 248, 3, 0.7)', fontSize: '23px'}} to='/work'>Work</NavLink></li>
                            <button className='navbar__btn'>Contact</button>
                        </ul>
                    </nav>
                </div>
            </motion.div>
            
        </motion.div>
    )
}

export default NavBar;