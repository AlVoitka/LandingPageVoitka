import { Container } from "@mui/system";
import "./about_info.scss"

function About_info() {
    return (
        <Container
            maxWidth='xl'
        >
            <div className="aboutInfo">
                <div className="aboutInfo__wrapper">
                    <div className="aboutInfo__descr">
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
                    </div>
                    <div className="aboutInfo__gif">
                        <img src='https://i.gifer.com/6K8u.gif' alt='movie'/>
                        {/* <img src='https://i.gifer.com/6K8u.gif' alt='movie'/>
                        <img src='https://i.gifer.com/6K8u.gif' alt='movie'/>
                        <img src='https://i.gifer.com/6K8u.gif' alt='movie'/> */}
                    </div>
                </div>
            </div>
        </Container>  
    )
}

export default About_info;