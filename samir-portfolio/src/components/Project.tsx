import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

//import styles
import '../styles/Project.css';
import ProjectCard from './ProjectCard';  

//import from projects images
import MaryGym from "../assets/img/projects/marygym.png";
import Projecto3Visu from "../assets/img/projects/VisuProjecto3.png";

interface Project {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
}

function ProjectPrincipal() {
  // Array that holds projects
  const projects: Project[] = [
    {
      title: "Gym's Page",
      description: "Full functional website for a gym",
      imgUrl: MaryGym, 
      link: "https://marygymfrontend-production.up.railway.app"
    },
    {
        title: "Data Visualization Project",
        description: "Graphs using Force-Directed Layout",
      imgUrl: Projecto3Visu, 
      link: "https://proyecto3visu.netlify.app"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Featured Projects</h2>
            <p>
              I have worked on various projects that showcase my skills in web development, backend development, and data visualization. 
              These projects demonstrate my ability to solve complex problems and create efficient, robust applications. Here are some examples of what I can do:
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
            <br></br>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    ))}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Row>
                    <Col>
                        <h3>
                            Coming Soon!
                        </h3>
                    </Col>
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <Row>
                    <Col>
                        <h3>
                            Coming Soon!
                        </h3>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProjectPrincipal;
