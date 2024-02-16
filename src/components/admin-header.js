import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const AdminHeader = () => {
    return (
        <div>
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center">
                    <img className="logo me-auto" src={require("../img/Logo.png")} width={250} alt="Logo" />

                    <nav expand="lg" id="navbar" className="navbar order-last order-lg-0">

                            <Nav className="mr-auto">
                                <NavLink to="/details" style={{ textDecoration: "none" }}>Course Details</NavLink>
                                <NavLink to="/application" style={{ textDecoration: "none" }}>Contact Form</NavLink>
                                <NavLink to="/reviewform" style={{ textDecoration: "none" }}>Review Form</NavLink>
                                <button className='btn btn-success'>Log out</button>
                            </Nav>

                    </nav>
                </div>
            </header>
        </div>
    );
};

export default AdminHeader;