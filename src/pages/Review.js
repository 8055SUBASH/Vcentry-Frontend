import React from 'react';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

const Review = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>


            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div className="breadcrumbs aos-init aos-animate" data-aos="fade-in">

                    <div className="container">
                        <h2>Review</h2>
                        <p>Voices of Satisfaction: What Our Users Are Saying. </p>
                    </div>
                </div>
                {/* <!-- End Breadcrumbs --> */}


                {/* <!-- ======= Review  ======= --> */}
                <section id="contact" className="contact">
                    <div className="container">

                        <div className="row">
                            <div className="row mt-5">



                                <div className="col-lg-8 mt-5 mt-lg-0">

                                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">

                                        <div className="row">
                                            <div className="form-group mt-3">
                                                <label>Enter  Name  :</label>
                                                <input type="text" name="name" className="form-control" id="name" placeholder=" Name" required></input>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="form-group mt-3">
                                                <label>Enter E-mail Id  :</label>
                                                <input type="text" name="name" className="form-control" id="name" placeholder=" E-mail Id" required></input>
                                            </div>

                                        </div>


                                        <div className="row">
                                            <div className="form-group mt-3">
                                                <label>Enter Course Name  :</label>
                                                <input type="text" name="name" className="form-control" id="name" placeholder=" Courses Name" required></input>
                                            </div>

                                        </div>

                                        <div className="form-group mt-3">
                                            <label>Enter Message  :</label>
                                            <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                        </div>


                                        <div className="my-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center"><button type="submit">Send</button></div>

                                    </form>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- Review --> */}


            </main>
            {/* <!-- End #main --> */}



            <FooterComponent></FooterComponent>
        </div>
    );
};

export default Review;