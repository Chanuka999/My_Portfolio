import { useState, useEffect} from "react";
import {Navbar, Container} from "react-bootstrap";


export const NavBar = () =>{
    const [activeLink, setactiveLink] = useState('home');
    const [scolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY >50){
                seScrolled[true];
            }else{
                seScrolled[false];
            }
        }

        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll",onScroll);

    }, [])

    const onupdateActiveLink = (value) =>{
        setactiveLink(value);
    }
    return(
         <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={''} alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
           <span className="navbar-toggler-from"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onupdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onupdateActiveLink('skills')}>skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onupdateActiveLink('projects')}>projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={''} alt=""/></a>
                    <a href="#"><img src={''} alt=""/></a>
                    <a href="#"><img src={''} alt=""/></a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}><span>Lets Connect</span></button>;
                
            </span>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}