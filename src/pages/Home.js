import React from 'react';


import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import CourseComponent from '../components/course-component';

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
                                <span  className="purecounter">15+</span>
                                <p>Years of Experience</p>
                            </div>

                            <div className="col-lg-3 col-6 text-center">
                                <span  className="purecounter">10k+</span>
                                <p>Students Enrolled</p>
                            </div>

                            <div className="col-lg-3 col-6 text-center">
                                <span className="purecounter">5k+</span>
                                <p>Students Placed</p>
                            </div>

                            <div className="col-lg-3 col-6 text-center">
                                <span className="purecounter">150+</span>
                                <p>Real Time Projects</p>
                            </div>

                        </div>

                    </div>
                </section><br></br><br></br><br></br>
                {/* <!-- End Counts Section --> */}

                {/* <!-- ======= Course Includes Section ======= --> */}
                <section id="features" className="features">
                    <h1><center>Our Syllabus Includes</center></h1><br></br>
                    <div className="container" >

                        <div className="row" >
                            <div className="col-lg-3 col-md-4">
                                <div className="icon-box">
                                    <i class="fa-brands fa-java" style={{color: "#ff3d3d"}}></i>
                                    <h3>Java Programming</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                <i class="fa-brands fa-js" style={{color: "#FFD43B"}}></i>
                                    <h3>Javascript</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
                                <div className="icon-box">
                                <i class="fa-brands fa-python" style={{color: "#74C0FC"}}></i>
                                    <h3>Python Programming</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
                                <div className="icon-box">
                                <i class="fa-brands fa-react" style={{color: "#B197FC"}}></i>
                                    <h3>React JS</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                <i class="fa-brands fa-angular" style={{color: "#a22ce2"}}></i>
                                    <h3>Angular JS</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                <i class="fa-solid fa-microscope" style={{color: "#da1b1b"}}></i>
                                    <h3>Software Testing</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                <i class="fa-solid fa-cloud" style={{color: "#2ba9e9"}}></i>
                                    <h3>Cloud Technology</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                <i class="fa-solid fa-magnifying-glass-chart" style={{color: "#cf20c1"}}></i>
                                    <h3>Data Analyst</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                <i class="fa-solid fa-flask" style={{color: "#9d4a06"}}></i>
                                    <h3>Data Science</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                <i class="fa-solid fa-infinity" style={{color: "#ff4d00"}}></i>
                                    <h3>Devops</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                    <i class="fa-solid fa-database" style={{color: "#59e010"}}></i>
                                    <h3>SQL Database</h3>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 mt-4">
                                <div className="icon-box">
                                <i class="fa-brands fa-windows" style={{color: "#f5ed0f"}}></i>
                                    <h3>Microsoft Azure</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- Course Includes Section --> */}

                {/* <!-- ======= Popular Courses Section ======= --> */}
                <section id="popular-courses" className="courses">
                    <div className="container" >

                        <div className="section-title">
                            <h2>Courses</h2>
                            <p>Popular Courses</p>
                        </div>

                        <div className="row">

                            <CourseComponent></CourseComponent>

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