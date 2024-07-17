import { Container, Row, Col } from "react-bootstrap";

//import styles
import '../styles/Studies.css'

function StudiesPrincipal(){
    return(
        <section className="study" id="studies">
            <Container>
                <Row>
                    <Col>
                        <h2>
                            My Studies
                        </h2>
                        <p>
                            Here I will show my academic achievements
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default StudiesPrincipal;