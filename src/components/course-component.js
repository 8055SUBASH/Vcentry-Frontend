import React from 'react';

const CourseComponent = (props) => {
    return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch tab-le">
            <div className="course-item">
                <img src={props.info.coursesImage} className="img-fluid img-agm" alt="..."></img>
                <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>{props.info.coursesFiled}</h4>
                    </div>

                    <h3>{props.info.coursesName}</h3>
                    <p>{props.info.coursesDetail}</p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-rank d-flex align-items-center">
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CourseComponent;