import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Review from './pages/Review';
import SkillEnhancement from './pages/Skill- Enhancement';
import Service from './pages/Service'; 

import "./css/style.css";

import "./vendor/animate.css/animate.min.css";
import "./vendor/aos/aos.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./vendor/bootstrap-icons/bootstrap-icons.css";
import "./vendor/boxicons/css/boxicons.min.css";
import "./vendor/remixicon/remixicon.css";
import "./vendor/swiper/swiper-bundle.min.css";


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="" element={<Home></Home>}></Route>
        <Route path="contact" element={<Courses></Courses>}></Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="skill" element={<SkillEnhancement></SkillEnhancement>}></Route>
        <Route path="review" element={<Review></Review>}></Route>
        <Route path="service" element={<Service></Service>}></Route>
        
        </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;