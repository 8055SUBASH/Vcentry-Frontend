import React from 'react';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import CourseComponent from '../components/course-component';

const Courses = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>


            <main id="main" data-aos="fade-in" className="aos-init aos-animate">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div className="breadcrumbs">
                    <div className="container">
                        <h2>Courses</h2>
                        <p>
                            Explore Cutting-edge Courses at Vcentry Technology. Elevate your skills with our diverse range of tech courses. Unlock opportunities for growth and innovation. Join Vcentry Technology for a transformative learning experience.</p>
                    </div>
                </div>
                {/* <!-- End Breadcrumbs --></main> */}


                {/* <!-- ======= Courses Section ======= --> */}
                <section id="courses" className="courses">
                    <div className="container aos-init aos-animate" data-aos="fade-up">

                        <div className="row aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                            <CourseComponent></CourseComponent>
                            <CourseComponent></CourseComponent>
                            <CourseComponent></CourseComponent>
                        </div>

                    </div>
                </section>
                {/* <!-- End Courses Section --> */}

            </main>
            {/* <!-- End #main --> */}



            <FooterComponent></FooterComponent>
        </div>
    );
};

export default Courses;