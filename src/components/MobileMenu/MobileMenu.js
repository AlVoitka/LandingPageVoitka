import { Drawer } from "@mui/material";
import { motion } from 'framer-motion';
import './mobileMenu.scss';


const MobileMenu = (props) => {
    const {
        menuOpen,
        menuClose = Function.prototype,
    } = props;

    const mobileList = ['About', 'Skills', 'Work','Contact']

    const MVariant = {
        visible: i => ({
            x:0,
            y:0,
            opacity: 1,
            transition: {
                delay: 0.2 + i * 0.05,
            }
        }),
        hidden: {
            x: -50,
            y: 10,
            opacity: 0
        }
    };

    return (
        <Drawer
            anchor="left"
            open={menuOpen}
            onClose={menuClose}
            style={{zIndex:'9'}}
        >
            <div 
                className="mobileMenu"
            >
                <div className="mobileMenu__wrapper">
                    {mobileList.map((el, i) => (
                        <motion.li 
                            key={el}
                            variants={MVariant}
                            initial='hidden'
                            animate='visible'
                            custom={i}
                        >
                            {el}
                        </motion.li>
                    ))}
                    
                </div>
            </div>
        </Drawer>
    )
}

export default MobileMenu;


