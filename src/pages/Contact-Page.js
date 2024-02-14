import React from 'react';


import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

const ContactPage = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>

            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div className="breadcrumbs aos-init aos-animate" >
                    <div className="container">
                        <h2>Contact Us</h2>
                        <p>Get in Touch: Connect with Vcentry Technology for Inquiries and Assistance.</p>
                    </div>
                </div><br></br>

                <section id="contact" className="contact">

                    <div className="container" >

                        <div className="row mt-5">

                            <div className="col-lg-4">
                                <div className="info">
                                    <div className="address">
                                        <i className="bi bi-geo-alt"></i>
                                        <h4>Location:</h4>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>

                                    <div className="email">
                                        <i className="bi bi-envelope"></i>
                                        <h4>Email:</h4>
                                        <p>info@example.com</p>
                                    </div>

                                    <div className="phone">
                                        <i className="bi bi-phone"></i>
                                        <h4>Call:</h4>
                                        <p>+1 5589 55488 55s</p>
                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-8 mt-5 mt-lg-0">

                                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required></input>
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required></input>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required></input>
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
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

                </section>
                <div >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31098.602336953376!2d80.204074116333!3d13.014945247817298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267f033b9b33f%3A0x3223d8a79e8a981f!2sVCENTRY!5e0!3m2!1sen!2sin!4v1707564318311!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                {/* <!-- End Contact Section --> */}
            </main><br></br>

            <FooterComponent></FooterComponent>
        </div>
    );
};

export default ContactPage;