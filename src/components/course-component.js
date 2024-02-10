import React from 'react';

const CourseComponent = () => {
    return (
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="course-item">
                    <img src={require("../img/course-1.jpg")} className="img-fluid" alt="..."></img>
                    <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4>Web Development</h4>
                        </div>

                        <h3>Website Design</h3>
                        <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                        <div className="trainer d-flex justify-content-between align-items-center">
                            <div className="trainer-rank d-flex align-items-center">
                                <i className="bx bx-heart"></i>&nbsp;65
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default CourseComponent;