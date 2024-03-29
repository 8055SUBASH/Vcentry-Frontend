import React, { useState } from 'react';
import { BrowserRouter,HashRouter, Route, Routes, Navigate } from 'react-router-dom';

// pages

import Home from './pages/Home';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Review from './pages/Review';
import SkillEnhancement from './pages/Skill- Enhancement';
import Service from './pages/Service';
import ApplicationForm from './pages/Application-Form';

// Admin-Pages

import AdminLogin from './pages/Login';
import CoursesDetail from './pages/Courses-Detail';



// css

import "./css/style.css";
import "./css/custom.css";
import "./vendor/animate.css/animate.min.css";
import "./vendor/aos/aos.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./vendor/bootstrap-icons/bootstrap-icons.css";
import "./vendor/boxicons/css/boxicons.min.css";
import "./vendor/remixicon/remixicon.css";
import "./vendor/swiper/swiper-bundle.min.css";
import ReviewForm from './pages/Review-Form';


const App = () => {
  //  ----------------------login-steps----------------------------------------------------------------------------

  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setUsername(user);
    setLoggedIn(true);
  };



  return (
    <div>

      <HashRouter>
        <Routes>
          <Route path="" element={<Home></Home>}></Route>
          <Route path="courses" element={<Courses></Courses>}></Route>
          <Route path="contact" element={<Contact></Contact>}></Route>
          <Route path="skill" element={<SkillEnhancement></SkillEnhancement>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="service" element={<Service></Service>}></Route>

          {/* ---------------------------Admin-Access ------------------------- */}
          <Route
            path="admin"
            element={<AdminLogin onLogin={handleLogin} />}
          />

          <Route
            path="application"
            element={loggedIn ? <ApplicationForm username={username} /> : <Navigate to="/admin" />}
          />


          {/* --------------------------------------Branch-Pages---------------------------------------------------- */}
          <Route
            path="details"
            element={loggedIn ? <CoursesDetail /> : <Navigate to="/admin" />} />

          <Route
            path="reviewform"
            element={loggedIn ? <ReviewForm /> : <Navigate to="/admin" />} />

            {/* ---------------------------------------url-Access---------------------------------------------------- */}
          <Route
            path="/*"
            element={<Navigate to="/admin" />}
          />

        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;