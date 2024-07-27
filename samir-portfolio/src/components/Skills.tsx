import { Container, Row, Col } from "react-bootstrap";

//import styles
import '../styles/Skills.css'

//import carousel for effects
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//import the logo image
import WebDevIcon from '../assets/img/skills/webDev.png';
import DBIcon from '../assets/img/skills/database.png';
import Backend from '../assets/img/skills/backend.png';
import Api from '../assets/img/skills/api.png';
import Cloud from '../assets/img/skills/cloud.png';
import Git from '../assets/img/skills/git.png';
import Docker from '../assets/img/skills/docker.png';
import Frontend from '../assets/img/skills/frontend.png';

function SkillsPrincipal(){
    //from carousel documentation   
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };


    return(
        <section className='skill' id="skills">
          <Container>
            <Row>
              <Col>
                <div className="skill-bx">
                  <h2>
                    Skills
                  </h2>
                  <p>
                    I am proficient in a range of technologies and tools that enhance my ability to deliver high-quality software solutions. My skills include:
                  </p>

                  <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                    <div className="item">
                        <img src={WebDevIcon} alt="ImageWebDev" />
                        <h5>Web Development</h5>
                    </div>

                    <div className="item">
                        <img src={DBIcon} alt="ImageDB" />
                        <h5>Database SQL/NoSql</h5>
                    </div>

                    <div className="item">
                        <img src={Backend} alt="ImageBackend" />
                        <h5>Backend Development</h5>
                    </div>

                    <div className="item">
                        <img src={Frontend} alt="ImageFrontend" />
                        <h5>Frontend Development</h5>
                    </div>

                    <div className="item">
                        <img src={Api} alt="ImageApi" />
                        <h5>Api Management</h5>
                    </div>

                    <div className="item">
                        <img src={Docker} alt="ImageDocker" />
                        <h5>Docker and Kubernetes</h5>
                    </div>

                    <div className="item">
                        <img src={Git} alt="ImageGit" />
                        <h5>Git</h5>
                    </div>

                    <div className="item">
                        <img src={Cloud} alt="ImageCloud" />
                        <h5>Cloud Services</h5>
                    </div>
                  </Carousel>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
    )
}

export default SkillsPrincipal;