import { Container, Row, Col, Card } from "react-bootstrap";

// Import styles
import '../styles/Studies.css';

// Import images
import Universidad from '../assets/img/education/logo-tec.jpg';
import Colegio from '../assets/img/education/logo-cole.png';

function StudiesPrincipal() {
    return (
        <section className="study" id="studies">
            <Container>
                <h2 className="studies-h2">My Studies</h2>
                <Row className="justify-content-center">
                    <Col xs={12} md={6} lg={4} className="d-flex">
                        <Card className="study-card flex-fill">
                            <Card.Img variant="top" src={Universidad} />
                            <Card.Body>
                                <Card.Title>Bachelor’s Degree</Card.Title>
                                <Card.Subtitle className="card-subtitle">2023-Present</Card.Subtitle>
                                <Card.Text>
                                    Bachelor’s degree in Software Engineering at Instituto Tecnologico de Costa Rica central headquarters, Cartago, Costa Rica. Currently in the second - third year of the program.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="d-flex">
                        <Card className="study-card flex-fill">
                            <Card.Img variant="top" src={Colegio} />
                            <Card.Body>
                                <Card.Title>High School Diploma</Card.Title>
                                <Card.Subtitle className="card-subtitle">2017-2021</Card.Subtitle>
                                <Card.Text>
                                    General diploma in secondary education at Colegio Ambientalista el Roble de Alajuela.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default StudiesPrincipal;
