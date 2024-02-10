import React from 'react';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

const SkillEnhancement = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>


            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div class="breadcrumbs aos-init aos-animate" data-aos="fade-in">

                    <div class="container">
                        <h2>Skill Enhancement</h2>
                        <p>Empower Your Potential: Skill Enhancement Programs at Vcentry Technology.</p>
                    </div>
                </div>
                {/* <!-- End Breadcrumbs --> */}

                {/* <!-- ======= Events Section ======= --> */}
                <section id="events" class="events">
                    <div class="container aos-init aos-animate" data-aos="fade-up">

                        <div class="row">
                            <div class="col-md-6 d-flex align-items-stretch">
                                <div class="card">
                                    <div class="card-img">
                                        <img src={require("../img/online-exam.jpg")} alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Online Exam</h5>
                                        <p class="fst-italic text-center">Excel Anywhere: Elevate Your Skills with Online Exam Skill Enhancement at Vcentry Technology</p>
                                        <p class="card-text">Master your skills effortlessly with our Online Exam Skill Enhancement programs at Vcentry Technology. Experience convenient and interactive learning modules designed to sharpen your abilities. Elevate your expertise through our digital platform, ensuring a seamless journey towards success</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 d-flex align-items-stretch">
                                <div class="card">
                                    <div class="card-img">
                                        <img src={require("../img/lab-practice.jpg")} alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Lab Practice</h5>
                                        <p class="fst-italic text-center">Hands-On Excellence: Lab Practice Skill Enhancement at Vcentry Technology</p>
                                        <p class="card-text">Refine your expertise through hands-on Lab Practice at Vcentry Technology. Gain practical skills in a simulated environment, ensuring a seamless transition to real-world scenarios. Elevate your learning experience and enhance your proficiency for a competitive edge in the professional landscape</p>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-6 d-flex align-items-stretch">
                                <div class="card">
                                    <div class="card-img">
                                        <img src={require("../img/interview-question.jpg")} alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Interview Questions</h5>
                                        <p class="fst-italic text-center">Mastering the Art of Interview Success: Skill Enhancement Programs at Vcentry Technology</p>
                                        <p class="card-text">Sharpen your interview skills with our specialized training programs at Vcentry Technology. Gain confidence in articulating your achievements and responding to challenging questions. Elevate your career prospects through targeted skill enhancement for successful interviews.</p>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-6 d-flex align-items-stretch">
                                <div class="card">
                                    <div class="card-img">
                                        <img src={require("../img/mock-interview.jpg")} alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h5 class="card-title">Mock Interviews</h5>
                                        <p class="fst-italic text-center">Refine Your Readiness: Mock Interview Skill Enhancement at Vcentry Technology</p>
                                        <p class="card-text">Develop your interview prowess with our Mock Interview Skill Enhancement program at Vcentry Technology. Gain real-world experience, receive constructive feedback, and boost your confidence for actual job interviews. Elevate your skills and maximize your chances of success in the competitive job market.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End Events Section --> */}

            </main>
            {/* <!-- End #main --> */}




            <FooterComponent></FooterComponent>
        </div>
    );
};

export default SkillEnhancement;