import { Container } from "@mui/system";
// import { motion } from 'framer-motion';
import "./skill_info.scss"

function SkillsInfo() {
    return(
        <Container maxWidth="lg">
            <div className="skill">
                <div className="skill__wrapper">
                    <div className="skill__list">
                        {/* <h2>My klills</h2>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>Node.js</p>
                        <p>React</p>
                        <p>React Router</p>
                        <p>React Hooks</p>
                        <p>Git</p>
                        <p>Webpack</p>
                        <p>GitHub</p> */}
                        <div className="skill__image"><img src="http://stgsys.net/wp-content/uploads/2012/03/html-5.png" alt=""></img></div>
                        
                        <div className="skill__image"><img src="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png" alt=""></img></div>
                        <div className="skill__image"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt=""></img></div>
                        
                        <div className="skill__image"><img src="https://www.loginradius.com/blog/static/00a89fc56461ea1529439d89072c93f1/701ee/react.jpg" alt=""></img></div>
                        <div className="skill__image"><img src="https://reactrouter.com/twitterimage.jpg" alt=""></img></div>
                        <div className="skill__image"><img src="https://shanelonergan.github.io/assets/img/hook.jpg" alt=""></img></div>
                        <div className="skill__image"><img src="https://karac.ch/storage/articles/May2019/n42iV2mUI75NXcinirs2.jpg" alt=""></img></div>
                        <div className="skill__image"><img src="https://www.kindpng.com/picc/m/29-293609_transparent-ajax-logo-png-ajax-png-download.png" alt=""></img></div>
                       
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default SkillsInfo;