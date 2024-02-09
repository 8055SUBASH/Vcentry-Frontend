import React from 'react';


import HeaderComponent from '../components/header';

const Home = () => {
    return (
        <div>

            <HeaderComponent></HeaderComponent>




            <section id="hero" class="d-flex justify-content-center align-items-center">
                <div class="container position-relative" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Learning Today,Leading Tomorrow</h1>
                    <h2>We are team of talented designers making websites with Bootstrap</h2>
                    <a href="courses.html" class="btn-get-started">Get Started</a>
                </div>
            </section>
            {/* // <!-- End Hero --> */}

            <main id="main"></main>


            {/* <!-- ======= About Section ======= --> */}
            <section id="about" class="about">
                <div class="container" data-aos="fade-up">

                    <div class="row">
                        <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                            <img src="./img/about.jpg" class="img-fluid" alt=""/>
                        </div>
                        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p class="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            </p>

                        </div>
                    </div>

                </div>
            </section>
            {/* <!-- End About Section --> */}

        </div>
    );
};

export default Home;