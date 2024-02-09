import React from 'react';


import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

const Home = () => {
    return (
        <div>

            <HeaderComponent></HeaderComponent>

            <section id="hero" className="d-flex justify-content-center align-items-center">
                <div className="container position-relative aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Vcentry Technologies</h1>
                    <h2>Hands On Training Institute</h2>
                    <button  className="btn-get-started btn btn-outline-primary">Get Started</button>
                </div>
            </section>
            {/* // <!-- End Hero --> */}

            <main id="main">


                {/* <!-- ======= About Section ======= --> */}
                <section id="about" className="about">
                    <div className="container aos-init aos-animate" data-aos="fade-up">

                        <div className="row">
                            <div className="col-lg-6 order-1 order-lg-2 aos-init aos-animate" data-aos="fade-left" data-aos-delay="100">
                                <img src={require("../img/about.jpg")} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                                <h3>Vcentry has been established with the objective of offering superior IT training and consulting services.</h3>
                                <p className="fst-italic">
                                Vcentry provides an integrated IT training and consulting services, catering to all the human resource and training requirements of a corporate since 2014. Vcentry focuses on providing-
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i> Comprehensive Talent management solutions to the customers.</li>
                                    <li><i className="bi bi-check-circle"></i>Our talent management pool has always been striving forward to bring the corporate and professionals together to a single point. </li>
                                </ul>
                                <p>
                                We have always been victorious in what we do, because we know that having the right people in your business is crucial.
                                </p>

                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End About Section --> */}

                {/* <!-- ======= Counts Section ======= --> */}
                <section id="counts" className="counts section-bg">
                    <div className="container">

                        <div className="row counters">

                            <div className="col-lg-3 col-6 text-center">
                                <span  className="purecounter">1232</span>
                                <p>Students</p>
                            </div>

                            <div className="col-lg-3 col-6 text-center">
                                <span  className="purecounter">64</span>
                                <p>Courses</p>
                            </div>

                            <div className="col-lg-3 col-6 text-center">
                                <span className="purecounter">42</span>
                                <p>Events</p>
                            </div>

                            <div className="col-lg-3 col-6 text-center">
                                <span className="purecounter">15</span>
                                <p>Trainers</p>
                            </div>

                        </div>

                    </div>
                </section><br></br><br></br><br></br>
                {/* <!-- End Counts Section --> */}

                {/* <!-- ======= Features Section ======= --> */}
                <section id="features" className="features">
                    <h1><center>Our Syllabus Includes</center></h1><br></br>
                    <div className="container" >

                        <div className="row" >
                            <div className="col-lg-3 col-md-4">
                                <div className="icon-box">
                                    <i className="ri-store-line" style={{color: "#ffbb2c"}}></i>
                                    <h3>Lorem Ipsum</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <i className="ri-bar-chart-box-line" style={{color: "#5578ff"}}></i>
                                    <h3>Dolor Sitema</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                    <i className="ri-calendar-todo-line" style={{color: "#e80368"}}></i>
                                    <h3>Sed perspiciatis</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <i className="ri-paint-brush-line" style={{color: "#e361ff"}}></i>
                                    <h3>Magni Dolores</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-database-2-line" style={{color: "#47aeff"}}></i>
                                    <h3>Nemo Enim</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-gradienter-line" style={{color: "#ffa76e"}}></i>
                                    <h3>Eiusmod Tempor</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-file-list-3-line" style={{color: "#11dbcf"}}></i>
                                    <h3>Midela Teren</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-price-tag-2-line" style={{color: "#4233ff"}}></i>
                                    <h3>Pira Neve</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-anchor-line" style={{color: "#b2904f"}}></i>
                                    <h3>Dirada Pack</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-disc-line" style={{color: "#b20969"}}></i>
                                    <h3>Moton Ideal</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-base-station-line" style={{color: "#ff5828"}}></i>
                                    <h3>Verdo Park</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i className="ri-fingerprint-line" style={{color: "#29cc61"}}></i>
                                    <h3>Flavor Nivelanda</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End Features Section --> */}

                {/* <!-- ======= Popular Courses Section ======= --> */}
                <section id="popular-courses" className="courses">
                    <div className="container" >

                        <div className="section-title">
                            <h2>Courses</h2>
                            <p>Popular Courses</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="course-item">
                                    <img src={require("../img/course-1.jpg")} className="img-fluid" alt="..."></img>
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4>Web Development</h4>
                                        </div>

                                        <h3>Website Design</h3>
                                        <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-rank d-flex align-items-center">
                                                <i className="bx bx-heart"></i>&nbsp;65
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="course-item">
                                    <img src={require("../img/course-1.jpg")} className="img-fluid" alt="..."></img>
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4>Web Development</h4>
                                        </div>

                                        <h3>Website Design</h3>
                                        <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-rank d-flex align-items-center">
                                                <i className="bx bx-heart"></i>&nbsp;65
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="course-item">
                                    <img src={require("../img/course-1.jpg")} className="img-fluid" alt="..."></img>
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4>Web Development</h4>
                                        </div>

                                        <h3>Website Design</h3>
                                        <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-rank d-flex align-items-center">
                                                <i className="bx bx-heart"></i>&nbsp;65
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            {/* <!-- End Course Item--> */}

                        </div>

                    </div>
                </section>
                {/* <!-- End Popular Courses Section --> */}

                <section id="trainers" className="trainers">
                <h1><center>Our Tutor's</center></h1><br></br>
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <img src={require("../img/trainers/trainer-1.jpg")} className="img-fluid" alt=""></img>
                                    <div className="member-content">
                                        <h4>Walter White</h4>
                                        <span>Web Development</span>
                                        <p>
                                            Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                                        </p>
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <img src={require("../img/trainers/trainer-2.jpg")} className="img-fluid" alt=""></img>
                                    <div className="member-content">
                                        <h4>Sarah Jhinson</h4>
                                        <span>Marketing</span>
                                        <p>
                                            Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                                        </p>
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="member">
                                    <img src={require("../img/trainers/trainer-3.jpg")} className="img-fluid" alt=""></img>
                                    <div className="member-content">
                                        <h4>William Anderson</h4>
                                        <span>Content</span>
                                        <p>
                                            Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                                        </p>
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                {/* <!-- End Trainers Section --> */}

            </main>
            {/* <!-- End #main --> */}

            <FooterComponent></FooterComponent>

        </div>
    );
};

export default Home;