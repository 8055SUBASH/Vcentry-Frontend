import React from 'react';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';


const CoursesDetail = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>


            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div className="breadcrumbs aos-init aos-animate" data-aos="fade-in">

                    <div className="container">
                        <h2>Courses Detail Page</h2>
                    </div>
                </div>
                {/* <!-- End Breadcrumbs --> */}

                {/* <!-- =======   ======= --> */}

                <section id="contact" className="contact">
                    <div className="container">

                        <div className="row">
                            <div className="row mt-5">



                                <div className="col-lg-8 mt-5 mt-lg-0">

                                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                        <div className="row ">
                                            <div className="form-group mt-3">
                                                <label>Enter Course Filed :</label>
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Enter Course Filed" required></input>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="form-group mt-3">
                                                <label>Enter Course Name :</label>
                                                <input type="text" name="name" className="form-control" id="name" placeholder="Enter Course Name" required></input>
                                            </div>

                                        </div>


                                        <div className="row">
                                            <div className="form-group mt-3">
                                                <label>Enter Course Image :</label>
                                                <input type="file" className="form-control" id="name" placeholder="Enter Course ImageS" required></input>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="form-group mt-3">
                                                <label>Enter Course Detail :</label>
                                                <textarea type="text" name="name" className="form-control" id="name" placeholder="Enter Course Detail" required></textarea>
                                            </div>

                                        </div>

                                        <div className="my-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center"><button type="submit">Send Message</button></div>

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