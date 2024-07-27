import { useEffect, useState } from 'react';
import '../styles/NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function NavBarPrincipal() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateLink = (value: string) => setActiveLink(value);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf/SamirCabrera_Cv.pdf';
    link.download = 'SamirCabrera_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateLink('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateLink('experience')}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#studies"
              className={activeLink === 'studies' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateLink('studies')}
            >
              Studies
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://linkedin.com/in/samir-cabrera"><LinkedInIcon /></a>
              <a href="https://github.com/samcab28"><GitHubIcon /></a>
              <a href="mailto:samircabreratab@gmail.com"><MailOutlineIcon /></a>
            </div>
            <button className="vvd" onClick={handleDownload}>
              <span>Download CV</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarPrincipal;