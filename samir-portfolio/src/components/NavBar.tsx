import {useEffect, useState} from 'react';
//import the styles
import '../styles/NavBar.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//import for the use icon linkedin
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//import for the use icon Github
import GitHubIcon from '@mui/icons-material/GitHub';

//import the logo image
import logo from '../assets/img/logo.svg';

function NavBarPrincipal() {
  //setting home to the first one
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    //function for scroll detection
    useEffect(() =>{
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [])

    //function for update the link
    const onUpdateLink = (value: string) => {
        setActiveLink(value);
    };

  return (
    <Navbar expand="lg"  className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt ="Logo"/>
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink==='home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink==='skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink==='projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#studies" className={activeLink==='studies' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateLink('studies')}>Studies</Nav.Link>
            <Nav.Link href="#experience" className={activeLink==='experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateLink('experience')}>Experience</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://linkedin.com/in/samir-cabrera'><LinkedInIcon/></a>
                <a href='https://github.com/samcab28'><GitHubIcon/></a>
            </div>
            <button className='vvd' onClick={() => document.getElementById('Contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <span>Contact me</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarPrincipal;