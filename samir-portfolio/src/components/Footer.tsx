import { Container, Row, Col } from "react-bootstrap";
//import the styles
import '../styles/Footer.css'

//import the logo image
import logo from '../assets/img/logo.svg'

//import for the use icon linkedin
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//import for the use icon Github
import GitHubIcon from '@mui/icons-material/GitHub';

function FooterPrincipal(){
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col size={12} sm={6}>
                        <img src={logo} alt ="Logo"/>
                    </Col>
                    <Col size={12} sm={6} className="text-center text-sm-end">
                        <div className='social-icon'>
                            <a href='https://linkedin.com/in/samir-cabrera'><LinkedInIcon/></a>
                            <a href='https://github.com/samcab28'><GitHubIcon/></a>
                        </div>
                        <p>
                            CopyRigth 2024. All Rigth Reserved
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterPrincipal;