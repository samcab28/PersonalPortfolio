import { useEffect, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
//import the styles
import '../styles/Banner.css';

function BannerPrincipal() {
    //variables declarations
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    //string that contains the animation
    const toRotate = ["Backend Developer", "Frontend Developer", "Student"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 300);
    const period = 300;

    //animation 
    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text, delta]);

    const tick = () => {
        const i = loopNum % toRotate.length;
        const fullText = toRotate[i];
        const updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Welcome to my portfolio
                        </span>
                        <h1>
                            {"Hi, I am Samir and I'm a "}<span className="wrap">{text}</span>
                        </h1>
                        <p>
                            I am a second- to third-year Computer Science student at the Instituto Tecnológico de Costa Rica (ITCR), with hands-on experience in different technologies that include web development, database management, algorithm thinking, creative solutions, and more. 
                        </p>
                        <p>
                            Committed to delivering high-quality, efficient code, I consistently apply best practices in software architecture and design patterns.
                        </p>
                        <button onClick={() => console.log("click banner")}>Let's get in touch!</button>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default BannerPrincipal;
