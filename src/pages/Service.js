import React from 'react';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

const Service = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>

            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div class="breadcrumbs aos-init aos-animate" data-aos="fade-in">

                    <div class="container">
                        <h2>Services</h2>
                        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                    </div>
                </div>
                {/* <!-- End Breadcrumbs --> */}

                {/* <!-- ======= Why Us Section ======= --> */}
                <section id="why-us" className="why-us">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-4 d-flex align-items-stretch">
                                <div className="content">
                                    <h3>Why Choose Mentor?</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                        Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                                    </p>
                                    <div className="text-center">
                                        <a href="about.html" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 d-flex align-items-stretch" >
                                <div className="icon-boxes d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-receipt"></i>
                                                <h4>Corporis voluptates sit</h4>
                                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-cube-alt"></i>
                                                <h4>Ullamco laboris ladore pan</h4>
                                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-images"></i>
                                                <h4>Labore consequatur</h4>
                                                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End .content--> */}
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End Why Us Section --> */}
            </main>
            {/* <!-- End #main --> */}


            <FooterComponent></FooterComponent>

        </div>
    );
};

export default Service;