import { Container, Row, Col, Accordion } from "react-bootstrap";

// Import styles
import '../styles/Experience.css';

function ExperiencePrincipal() {
    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col>
                        <h2 className="experience-h2">My work Experience</h2>
                        <Accordion defaultActiveKey="0" flush>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Founder at GoodTechDeveloper CR</Accordion.Header>
                                <Accordion.Body>
                                    Founder of a small software company that assists small businesses in digitalizing their operations and offers opportunities
                                    for programmers seeking experience. Responsible for overseeing projects, client relations, and team management.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Secretary at IEEE Student Branch</Accordion.Header>
                                <Accordion.Body>
                                    Secretary of the IEEE Student Branch at ITCR. Responsible for achieving the goals of the board, organizing activities,
                                    and performing various tasks.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Operator at LAIMI</Accordion.Header>
                                <Accordion.Body>
                                    Worker in the microcomputer laboratory, managing the operations room, regulating other rooms, providing customer
                                    service, and performing tasks such as copying, printing, plotter printing, 3D printing, and laser cutting.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default ExperiencePrincipal;
