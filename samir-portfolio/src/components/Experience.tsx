import { Container, Row, Col } from "react-bootstrap";

//import styles
import '../styles/Experience.css'

function ExperiencePrincipal(){

    return(
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col>
                        <h2>
                            My work Experience
                        </h2>
                        <p>
                            Here I will show my work experience
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ExperiencePrincipal;