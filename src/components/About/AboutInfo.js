import { Container } from "@mui/system";
import { motion } from 'framer-motion';
import "./about_info.scss"

const aboutM = {
    hidden: {
        x: -30,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1
    }
}

function AboutInfo() {
    return (
        <Container
            maxWidth='xl'
        >
            <div className="aboutInfo">
                <div className="aboutInfo__wrapper">
                    <motion.div 
                        className="aboutInfo__descr"
                        variants= {aboutM} 
                        initial= {'hidden'}
                        animate= {'visible'}
                        transition={{
                            delay: 0.2,
                            duration: 1,
                            type: 'spring',
                            ease: 'easeIn'
                        }}
                    >
                        <h2>About me</h2>
                        <p>
                            I'm a Front-End Developer located in Poland. I have a serious passion for UI effects, 
                            animations and creating intuitive, dynamic user experiences.
                        </p>
                        <p>
                            Well-organised person, problem solver, independent employee with high attention to detail. 
                            Fan of MMA, outdoor activities, TV series and English literature. 
                            A family person and father of two fractious boys,
                        </p>
                        <p>
                            Interested in the entire frontend spectrum and working on ambitious projects with positive people.
                        </p>
                        <motion.button
                            className="aboutInfo__descr-btn"
                            initial={{
                                x: -20,
                                opacity: 0,
                                

                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 4,
                                duration: 1,
                            }}
                        >Let's make something special
                        </motion.button>
                    </motion.div>
                    <motion.div className="aboutInfo__gif">
                        <motion.div 
                            className="aboutInfo__gif-list"
                            variants= {aboutM} 
                            initial= {'hidden'}
                            animate= {'visible'}
                            transition={{
                                delay: 0.3,
                                duration: 1,
                                type: 'spring',
                                ease: 'easeIn'
                            }}
                        ><img src='https://i.gifer.com/Lbcn.gif' alt='movie'/></motion.div>
                        <motion.div 
                            className="aboutInfo__gif-list"
                            variants= {aboutM} 
                            initial= {'hidden'}
                            animate= {'visible'}
                            transition={{
                                delay: 0.4,
                                duration: 1.5,
                                type: 'spring',
                                ease: 'easeIn'
                            }}
                        ><img src='https://i.gifer.com/E19.gif' alt='movie'/></motion.div>
                        <motion.div 
                            className="aboutInfo__gif-list"
                            variants= {aboutM} 
                            initial= {'hidden'}
                            animate= {'visible'}
                            transition={{
                                delay: 0.3,
                                duration: 1,
                                type: 'spring',
                                ease: 'easeIn'
                            }}
                        ><img src='https://i.gifer.com/D3cp.gif' alt='movie'/></motion.div>
                        <motion.div 
                            className="aboutInfo__gif-list"
                            variants= {aboutM} 
                            initial= {'hidden'}
                            animate= {'visible'}
                            transition={{
                                delay: 0.4,
                                duration: 1.5,
                                type: 'spring',
                                ease: 'easeIn'
                            }}
                        ><img src='https://i.gifer.com/n1E.gif' alt='movie'/></motion.div>
                    </motion.div>
                </div>
                
            </div>
        </Container>  
    )
}

export default AboutInfo;