import React, { useState, useEffect } from 'react';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import axios from 'axios';

const Review = () => {

    useEffect(() =>{
        showReview();
    }, []);

    const [allReviews, updateAllReviews] = useState([])

    const [reviewStore, updateReviewStore] = useState({
        Name: "",
        Email: "",
        Course: "",
        Message: ""
    })

    const [errorForm, updateErrorForm] = useState({
        Name: false,
        Email: false,
        Course: false,
        Message: false
    })

    const inputReviewValue = (event) => {
        updateReviewStore({ ...reviewStore, [event.target.id]: event.target.value });
    }

    const reviewUpdate = () => {

        updateErrorForm({
            ...errorForm,
            Name: reviewStore.Name === "" ? true : false,
            Email: reviewStore.Email === "" ? true : false,
            Course: reviewStore.Course === "" ? true : false,
            Message: reviewStore.Message === "" ? true : false
        });

        if (
            reviewStore.Name === "" ||
            reviewStore.Email === "" ||
            reviewStore.Course === "" ||
            reviewStore.Message === ""
        ) {
            // Do not submit the form if any field is empty
            return;
        }

        const url = "http://localhost:5000/api/create/review";
        axios.post(url, reviewStore)
            .then((response) => {
                console.log(response);
                alert("Review Updated");
                showReview();
            }
            )
            .catch((error) => {
                console.error(error);
            }
            )
    }


    const showReview = () => {
        const url = "http://localhost:5000/api/read/review";
        axios.get(url)
            .then((response) => {
                updateAllReviews(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }
    
    const reviewList = allReviews.map((value, index) => (
        <div key={index}>
            <figure className="snip1533">
                <figcaption>
                    <blockquote>
                        <p>{value.Message}</p>
                        <strong>-{value.Email}</strong>
                    </blockquote>
                    <h3>{value.Name}</h3>
                    <h4>{value.Course}</h4>
                </figcaption>
            </figure>
        </div>
    ));

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

<<<<<<< HEAD
                                <div className="col-lg-8 mt-5 mt-lg-0 container-fluid">
                                    <div className="php-email-form">
                                        <div className="php-email-form">
                                            <div className="row">
                                                <div className="form-group mt-3">
                                                    <label>Enter  Name  :</label>
                                                    <input type="text" className="form-control" id="Name" placeholder="Name" required onChange={inputReviewValue}></input>
                                                    {errorForm.Name && <span className='error-class'>Required*</span>}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group mt-3">
                                                    <label>Enter E-mail Id  :</label>
                                                    <input type="text" className="form-control" id="Email" placeholder=" E-mail Id" required onChange={inputReviewValue}></input>
                                                    {errorForm.Email && <span className='error-class'>Required*</span>}
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group mt-3">
                                                    <label>Enter Course Name with Badge No :</label>
                                                    <input type="text" className="form-control" id="Course" placeholder=" Courses Name" required onChange={inputReviewValue}></input>
                                                    {errorForm.Course && <span className='error-class'>Required*</span>}
                                                </div>
=======


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
>>>>>>> 3162eaf645ae6ea450ad360002752594ad5b00eb
                                            </div>
                                            <div className="form-group mt-3">
                                                <label>Enter Message  :</label>
                                                <textarea className="form-control" id="Message" rows="5" placeholder="Message" required onChange={inputReviewValue}></textarea>
                                                {errorForm.Message && <span className='error-class'>Required*</span>}
                                            </div>
                                            <div className="text-center"><button type="submit" onClick={() => reviewUpdate()}>Send</button></div>
                                        </div>
<<<<<<< HEAD
                                    </div>
=======

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

>>>>>>> 3162eaf645ae6ea450ad360002752594ad5b00eb
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- Review --> */}


            </main>
            {/* <!-- End #main --> */}<br></br>
            <center><h1>Our Students Reviews</h1></center>
            <div className='review-box'>
    
                        {reviewList}

            </div>


            <FooterComponent></FooterComponent>
        </div>
    );
};

export default Review;