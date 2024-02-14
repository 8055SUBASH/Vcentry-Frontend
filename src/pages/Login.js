import React from 'react';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

const AdminLogin = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>

            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div className="breadcrumbs aos-init aos-animate" data-aos="fade-in">

                    <div className="container">
                        <h2>Admin Login Page</h2>
                    </div>
                </div>
                {/* <!-- End Breadcrumbs --> */}

                {/* <!-- ======= login  ======= --> */}
                <section id="contact" className="contact">
                    <div className="container">

                        <div className="row">
                            <div className="row mt-5">



                                <div className="col-lg-8 mt-5 mt-lg-0 container-fluid">

                                    <div  className="php-email-form">
                                        
                                            <div className="row">
                                                <div className="form-group mt-3">
                                                    <label>Enter Admin Name  :</label>
                                                    <input type="text" name="name" className="form-control" id="name" placeholder="Admin Name" required></input>
                                                </div>

                                            </div>
                                            <div className="form-group mt-3">
                                                <label>Enter password        :</label>
                                                <input type="password" className="form-control" name="password" id="password" placeholder="password"  required></input>
                                            </div>

                                            {/* <div className="my-3">
                                                <div className="loading">Loading</div>
                                                <div className="error-message"></div>
                                                <div className="sent-message">Your message has been sent. Thank you!</div>
                                            </div> */}
                                            <div className="two-btn">
                                            
                                            <div className="text-center"><button type="submit">Login</button></div>

                                            <div className="msg-ivd">{false && <h6>Invalid AdminName or Password ...</h6>}</div>

                                            </div>
                                       
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- login --> */}
            </main>
            {/* <!-- End #main --> */}

            <FooterComponent></FooterComponent>

        </div >
    );
};

export default AdminLogin;