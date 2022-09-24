import { useEffect, useState } from "react"; 
import { Navbar, Container, Nav } from "react-bootstrap";
import logo2 from '../assets/img/logo-2.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import { Clipboard, Github } from 'react-bootstrap-icons';
import Resume from "../assets/Akash_Randhawa_Resume_2022.pdf"

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo2} width={128} height={100} alt="Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                        <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/akashdeep-randhawa/" rel="noopener noreferrer" target="_blank"><img src={navIcon1} alt=''/></a>
                            <a href="https://github.com/akashr17" rel="noopener noreferrer" target="_blank"><Github className="github"/></a>
                            <a href={Resume} rel="noopener noreferrer" target="_blank"><Clipboard className="resume"/></a>
                        </div>
                        <a href="mailto:akashr17@student.ubc.ca?subject=Let's Connect!"><button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button></a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}