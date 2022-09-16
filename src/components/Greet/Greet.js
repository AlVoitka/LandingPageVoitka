
import { Container } from '@mui/system';
import { motion } from 'framer-motion';
import './greet.scss';


const gif1 = {
    hidden: {
        x: -50,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 0.6
    }
};
const gif2 = {
    hidden: {
        x: -50,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 0.6
    }
};
const gif3 = {
    hidden: {
        x: -50,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 0.6
    }
};


function Greet() {
    return(
        <>
            <Container>
                <div className="greet">
                    <motion.h1 
                        className="greet__h1"
                        initial={{
                            x: -20,
                            opacity: 0,
                            

                        }}
                        animate={{
                            x: 0,
                            opacity: 1,
                        }}
                        transition={{
                            delay: 1,
                            duration: 0.5,
                        }}
                    >
                        Hi, a'm Alex!
                    </motion.h1>
                    <div className='greet__wrapp'>
                        <motion.h2 
                            className="greet__h2"
                            initial={{
                                x: -20,
                                opacity: 0,
                                
        
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 1.5,
                                duration: 0.5,
                            }}
                        >
                            WEB Developer
                        </motion.h2>
                        <div className='greet__gif'>
                            <motion.div 
                                className='greet__gif-list'
                                variants= {gif1} 
                                initial= {'hidden'}
                                animate= {'visible'}
                                transition={{
                                    delay: 2,
                                    duration: 0.5,
                                }}
                            >
                                <img src='https://i.gifer.com/6K8u.gif' alt='movie'/>
                            </motion.div>
                            <motion.div 
                                className='greet__gif-list'
                                variants= {gif2} 
                                initial= {'hidden'}
                                animate= {'visible'}
                                transition={{
                                    delay: 2.1,
                                    duration: 0.5,
                                }}
                            >
                                <img src='https://i.gifer.com/6L8E.gif' alt='movie'/>
                            </motion.div>
                            <motion.div 
                                className='greet__gif-list'
                                variants= {gif3} 
                                initial= {'hidden'}
                                animate= {'visible'}
                                transition={{
                                    delay: 2.2,
                                    duration: 0.5,
                                }}
                            >
                                <img src='https://i.gifer.com/DXKg.gif' alt='movie'/>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Greet;