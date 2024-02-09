import React from 'react';


import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

const Contact = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>


            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div class="breadcrumbs aos-init aos-animate" data-aos="fade-in">
                    <div class="container">
                        <h2>Contact Us</h2>
                        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
                    </div>
                </div>
                {/* <!-- End Breadcrumbs --> */}

                {/* <!-- ======= Contact Section ======= --> */}
               
                {/* <!-- End Contact Section --> */}

            </main>




            <FooterComponent></FooterComponent>
        </div>
    );
};

export default Contact;