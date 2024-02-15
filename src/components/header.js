import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AppNavbar = () => {
  return (
    <div className='header-alignment' >
      <Navbar expand="lg" fixed="top" bg="dark" variant="dark">
        <Navbar.Brand className="mr-auto">
          <img
            alt="Logo"
            src={require("../img/Logo.png")}
            width={300}
            height={50}
            className="d-inline-block align-top logo-alignment"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "#EE633A", marginRight: '2%' }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" >
            <NavLink to="/"  style={{ textDecoration: "none" }}>Home</NavLink>
            <NavLink to="/courses"  style={{ textDecoration: "none" }}>Courses</NavLink>
            <NavLink to="/skill"  style={{ textDecoration: "none" }}>Skill Enhancement</NavLink>
            <NavLink to="/service"  style={{ textDecoration: "none" }}>Service</NavLink>
            <NavLink to="/review"  style={{ textDecoration: "none" }}>Review</NavLink>
            <NavLink to="/contact"  style={{ textDecoration: "none" }}>Contact Us</NavLink>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>

    </div>
  );
}

export default AppNavbar;
