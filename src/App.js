<<<<<<< HEAD
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
=======
import React from 'react';
// { useState }
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//---------------------------------------- pages--------------------------------------------
>>>>>>> 3162eaf645ae6ea450ad360002752594ad5b00eb

import Home from './pages/Home';
import Courses from './pages/Courses';
import ContactPage from './pages/Contact-Page';
import Review from './pages/Review';
import SkillEnhancement from './pages/Skill- Enhancement';
import Service from './pages/Service';
<<<<<<< HEAD
import ApplicationForm from './pages/Application-Form';
=======
>>>>>>> 3162eaf645ae6ea450ad360002752594ad5b00eb

//-------------------------------------- Admin-Pages----------------------------------------

import AdminLogin from './pages/Login';
import CoursesDetail from './pages/Courses-Detail';



//------------------------------------------ css--------------------------------------------

import "./css/style.css";
import "./css/custom.css";
import "./vendor/animate.css/animate.min.css";
import "./vendor/aos/aos.css";
import "./vendor/bootstrap/css/bootstrap.min.css";
import "./vendor/bootstrap-icons/bootstrap-icons.css";
import "./vendor/boxicons/css/boxicons.min.css";
import "./vendor/remixicon/remixicon.css";
import "./vendor/swiper/swiper-bundle.min.css";

<<<<<<< HEAD
const App = () => {

  const[searchValue, updateSearchValue] = useState([]);

  const dataExchange = (data) => {
    updateSearchValue(data);
  }

  return (
    <div>
      
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Home></Home>}></Route>
            <Route path="courses" element={<Courses></Courses>}></Route>
            <Route path="contact" element={<Contact></Contact>}></Route>
            <Route path="skill" element={<SkillEnhancement></SkillEnhancement>}></Route>
            <Route path="review" element={<Review></Review>}></Route>
            <Route path="service" element={<Service></Service>}></Route>
            <Route path="admin" element={<AdminLogin></AdminLogin>}></Route>
            <Route path="details" element={<CoursesDetail></CoursesDetail>}></Route>
            <Route path="application" element={<ApplicationForm></ApplicationForm>}></Route>

          </Routes>
        </BrowserRouter>
      
=======
// ----------------------------------------datasharing------------------------------------------


// import DataSharing from './-api';



const App = () => {

  // const [coursesList, updateCoursesList] = useState([]);


  // console.log(coursesList)

  // const dataExchange = (data) => {
  //  updateCoursesList(data);
  // }

  return (
    <div>
      {/* <DataSharing.Provider value={{ dataExchange, coursesList}}> */}

      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home></Home>}></Route>
          <Route path="courses" element={<Courses></Courses>}></Route>
          <Route path="concontact" element={<ContactPage></ContactPage>}></Route>
          <Route path="skill" element={<SkillEnhancement></SkillEnhancement>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="service" element={<Service></Service>}></Route>
          <Route path="admin" element={<AdminLogin></AdminLogin>}></Route>
          <Route path="details" element={<CoursesDetail></CoursesDetail>}></Route>

        </Routes>
      </BrowserRouter>

      {/* </DataSharing.Provider> */}
>>>>>>> 3162eaf645ae6ea450ad360002752594ad5b00eb
    </div>
  );
};

export default App;