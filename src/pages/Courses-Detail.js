import React from 'react';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';


const CoursesDetail = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>


            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div class="breadcrumbs aos-init aos-animate" data-aos="fade-in">

                    <div class="container">
                        <h2>Courses Detail Page</h2>
                    </div>
                </div>
                {/* <!-- End Breadcrumbs --> */}

                {/* <!-- =======   ======= --> */}

                <section id="contact" class="contact">
                    <div className="container">

                        <div className="row">
                            <div class="row mt-5">



                                <div class="col-lg-8 mt-5 mt-lg-0">

                                    <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                                        <div class="row ">
                                            <div class="form-group mt-3">
                                                <label>Enter Course Filed :</label>
                                                <input type="text" name="name" class="form-control" id="name" placeholder="Enter Course Filed" required></input>
                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="form-group mt-3">
                                                <label>Enter Course Name :</label>
                                                <input type="text" name="name" class="form-control" id="name" placeholder="Enter Course Name" required></input>
                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="form-group mt-3">
                                                <label>Enter Course Detail :</label>
                                                <input type="text" name="name" class="form-control" id="name" placeholder="Enter Course Detail" required></input>
                                            </div>

                                        </div>

                                        <div class="row">
                                            <div class="form-group mt-3">
                                                <label>Enter Course Image :</label>
                                                <input type="file" class="form-control" id="name" placeholder="Enter Course ImageS" required></input>
                                            </div>

                                        </div>




                                        <div class="my-3">
                                            <div class="loading">Loading</div>
                                            <div class="error-message"></div>
                                            <div class="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div class="text-center"><button type="submit">Send Message</button></div>

                                    </form>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                {/* <!-- login --> */}
            </main>
            {/* <!-- End #main --> */}


            <FooterComponent></FooterComponent>
        </div>
    );
};

export default CoursesDetail;