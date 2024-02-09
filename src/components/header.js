import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <div>
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <img className="logo me-auto" src={require("../img/Logo.png")} width={250}></img>

          {/* <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <NavLink to="/" className="active">Home</NavLink>
              <NavLink to="/courses">Courses</NavLink>
              <NavLink to="/skill">Skill Enhancement</NavLink>
              <NavLink to="/service">Service</NavLink>
              <NavLink to="/review">Review</NavLink>
              <NavLink to="/contact">Contact Us</NavLink>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          {/* <!-- .navbar --> */}

          <button href="courses.html" className="get-started-btn">Get Started</button>

        </div>
      </header>
      {/* <!-- End Header --> */}

    </div>
  );
};

export default HeaderComponent;
