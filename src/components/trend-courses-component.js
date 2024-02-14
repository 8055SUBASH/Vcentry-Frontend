import React from 'react';

const CourseTrend = (props) => {
     // Check if props.info is defined and has a defined coursesImage property
     if (!props.info || !props.info.coursesImage) {
        // Return null or some default content if coursesImage is undefined
        return null;
    }

    return (
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="course-item">
                <img src={props.info.coursesImage} className="img-fluid" alt="..."></img>
                <div className="course-content">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4>{props.info.coursesFiled}</h4>
                    </div>

                    <h3>{props.info.coursesName}</h3>
                    <p>{props.info.coursesDetail}</p>
                    <div className="trainer d-flex justify-content-between align-items-center">
                        <div className="trainer-rank d-flex align-items-center">
                            {/* <i className="bx bx-heart"></i>&nbsp;65 */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseTrend;