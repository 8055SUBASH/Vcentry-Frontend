import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const HeaderComponent = () => {
  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
<<<<<<< HEAD
          <img className="logo me-auto" src={require("../img/Logo.png")} width={250} alt="Logo" />
=======
          <img className="logo me-auto" src={require("../img/Logo.png")} width={250}></img>

          {/* <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

          <nav id="navbar" className="navbar order-last order-lg-0" >
            <ul>
              <NavLink to="/" className="header-text" style={{textDecoration :"none"}}>Home</NavLink>
              <NavLink to="/courses" style={{textDecoration :"none"}}>Courses</NavLink>
              <NavLink to="/skill" style={{textDecoration :"none"}}>Skill Enhancement</NavLink>
              <NavLink to="/service" style={{textDecoration :"none"}}>Service</NavLink>
              <NavLink to="/review" style={{textDecoration :"none"}}>Review</NavLink>
              <NavLink to="/concontact" style={{textDecoration :"none"}}>Contact Us</NavLink>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}

          
>>>>>>> 3162eaf645ae6ea450ad360002752594ad5b00eb

          <Navbar expand="lg" id="navbar" className="navbar order-last order-lg-0">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
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
      </header>
    </div>
  );
};

export default HeaderComponent;
