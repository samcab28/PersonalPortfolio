import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function ContactPrincipal(){
    //form data
    /*
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone:'',
        message:''
    }

    const [formDetail, setFormDetail] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('send');
    const [status, setStatus] = useState({});
    */

    
    return(
        <section className="contact" id="Contact">
            <Container>
                <Row>
                    <Col>
                        <h2>
                            Form Contact
                        </h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default ContactPrincipal;