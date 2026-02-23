import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './Novbar.css';
// import the logo asset so bundler can resolve its path
import logo from './assets/logo.png';


const CustomNovbar = ({setCountry, setCategory}) => {
    const handleSelect = (eventKey) => {
        const [type, value] = eventKey.split('-');
        if (type === 'country') {
            setCountry(value);
        } else if (type === 'category') {
            setCategory(value);
        }
    };
    return (
        
        <Navbar 
  collapseOnSelect 
  expand="lg" 
  bg="dark"
  variant="dark"
  className="custom-navbar"
  onSelect={handleSelect}>
            {/* link back to index page */}
            <Navbar.Brand href="/">
                {/* use imported logo; ensures path works both in development and production */}
                <img src={logo} alt="logo" className="navbar-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link eventKey="category-general">General</Nav.Link>
                <Nav.Link eventKey="category-business">Business</Nav.Link>
                <Nav.Link eventKey="category-entertainment">Entertainment</Nav.Link>
                <Nav.Link eventKey="category-health">Health</Nav.Link>
                <Nav.Link eventKey="category-science">Science</Nav.Link>
                <Nav.Link eventKey="category-sports">Sports</Nav.Link>
                <Nav.Link eventKey="category-technology">Technology</Nav.Link>
                <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item eventKey="country-us">United States</NavDropdown.Item>
                <NavDropdown.Item eventKey="country-gb">United Kingdom</NavDropdown.Item>
                <NavDropdown.Item eventKey="country-ca">Canada</NavDropdown.Item>
                <NavDropdown.Item eventKey="country-au">Australia</NavDropdown.Item>
                <NavDropdown.Item eventKey="country-in">India</NavDropdown.Item>
                <NavDropdown.Item eventKey="country-fr">France</NavDropdown.Item>
                <NavDropdown.Item eventKey="country-de">Germany</NavDropdown.Item>
                <NavDropdown.Item eventKey="country-jp">Japan</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default CustomNovbar;