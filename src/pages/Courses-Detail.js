import React, { useState, useEffect, } from 'react';
// useContext
import axios from 'axios';

// ------------------------Components------------------------------------------

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

// ------------------------Components------------------------------------------

// import DataSharing from '../context-api';

const CoursesDetail = () => {

    // const baseURL = "http://localhost:5000";

    // ------------------------Components------------------------------------------

    //  const context = useContext(DataSharing); 

    //  context.dataExchange(detailRecord);


    //-------------------Reloaded-------------------------------------------------

    useEffect(() => {
        loadDetails();
        loadTrend();
    }, []);

    //-------------uploaded-courses-detail----------------------------------------

    const [uploadedCourses, updateUploadedCourses] = useState({

        coursesFiled: "",
        coursesName: "",
        coursesDetail: "",
        coursesImage: ""

    });


    //-------------uploaded-courses-detail-error----------------------------------

    const [uploadedError, updateUploadedError] = useState({

        coursesFiled: false,
        coursesName: false,
        coursesDetail: false,
        coursesImage: false

    });

    //-----------------------true/false-------------------------------------------

    const [isLoading, updateIsLoading] = useState(true);


    //-------------------------courses-record-------------------------------------

    const [detailRecord, updateDetailRecord] = useState([]);


    //-----------------------trend-record-----------------------------------------

    const [trendRecord, updateTrendRecord] = useState([]);


    //-------------input-onchange-------------------------------------------------

    const getInput = (event) => {
        updateUploadedCourses({ ...uploadedCourses, [event.target.id]: event.target.value });
    }


    // -------------------- courses-detail----------------------------------------



    const uploadDetail = () => {
        console.log(uploadedCourses);
        updateIsLoading(false);

        updateUploadedError({
            ...uploadedError,

            coursesFiled: uploadedCourses.coursesFiled == "" ? true : false,
            coursesName: uploadedCourses.coursesName == "" ? true : false,
            coursesDetail: uploadedCourses.coursesDetail == "" ? true : false,
            coursesImage: uploadedCourses.coursesImage == "" ? true : false
        });


        // ----------API--------------------------------------------

        const url = "http://localhost:5000/api/create/courses";

        axios.post(url, uploadedCourses)
            .then((response) => {
                alert(response.data);
                updateIsLoading(true);
            })
            .catch((error) => {
                console.error(error)
                updateIsLoading(true);
            })

    }



    // ---------------------trend-courses-----------------------------------------


    const trendDetail = () => {
        console.log(uploadedCourses);
        updateIsLoading(false);

        updateUploadedError({
            ...uploadedError,

            coursesFiled: uploadedCourses.coursesFiled == "" ? true : false,
            coursesName: uploadedCourses.coursesName == "" ? true : false,
            coursesDetail: uploadedCourses.coursesDetail == "" ? true : false,
            coursesImage: uploadedCourses.coursesImage == "" ? true : false
        });


        // ----------API--------------------------------------------

        const url = "http://localhost:5000/api/create/trend";

        axios.post(url, uploadedCourses)
            .then((response) => {
                alert(response.data);
                updateIsLoading(true);
            })
            .catch((error) => {
                console.error(error)
                updateIsLoading(true);
            })

    }


    // ----------Image-------------------------------------------------------------


    const getImage = (event) => {
        // console.log(event.target.files)

        const reader = new FileReader();
        const file = event.target.files[0];

        reader.readAsDataURL(file);

        reader.onload = () => {
            updateUploadedCourses({ ...uploadedCourses, "coursesImage": reader.result });
        }
    }

    //-------------uploaded-courses-detail-----------------------------------------


    const loadDetails = () => {

        const url = "http://localhost:5000/api/list/courses";

        axios.get(url)
            .then((response) => {
                updateDetailRecord(response.data);
                // context.dataExchange(response.data); //DATASHARING
            })
            .catch((error) => {
                console.log(error);
            })

    }


    // -------------uploaded-courses-detail---------------------------------------


    const loadTrend = () => {

        const url = "http://localhost:5000/api/list/trend";

        axios.get(url)
            .then((response) => {
                updateTrendRecord(response.data);
                // context.dataExchange(response.data); //DATASHARING
            })
            .catch((error) => {
                console.log(error);
            })

    }



    // -------------courses-delete-------------------------------------------------

    const deleteCouses = (id) => {
        const url = "http://localhost:5000/api/delete/courses/" + id;
        axios.delete(url)
            .then((response) => {
                alert(response.data);
                loadDetails();

            })
            .catch((error) => {
                console.log(error);
            })

    }

    // -------------courses-mapping-detail----------------------------------------


    const List = detailRecord.map((value, index) => {
        return (
            <tr  key={index}>
                <td>{value.coursesFiled}</td>
                <td>{value.coursesName}</td>
                <td>{value.coursesDetail}</td>
                <td>
                    <img src={value.coursesImage} width="70" />
                </td>
                <td><button className="btn btn-outline-danger" onClick={() => deleteCouses(value.id)}>Delete</button></td>
            </tr>
        )
    })

    // ---------------trend-delete-------------------------------------------------

    const deleteTrend = (id) => {
        const url = "http://localhost:5000/api/delete/trend/" + id;
        axios.delete(url)
            .then((response) => {
                alert(response.data);
                loadTrend();

            })
            .catch((error) => {
                console.log(error);
            })

    }


    // -------------trend-mapping-detail------------------------------------------

    const Trend = trendRecord.map((value, index) => {
        return (
            <tr key={index}>
                <td>{value.coursesFiled}</td>
                <td>{value.coursesName}</td>
                <td>{value.coursesDetail}</td>
                <td>
                    <img src={value.coursesImage} width="50" />
                </td>
                <td><button className="btn btn-outline-danger " onClick={() => deleteTrend(value.id)}>Delete</button></td>

            </tr>
        )
    })

    return (
        <div>
            <HeaderComponent></HeaderComponent>


            <main id="main">

                {/* <!-- ======= Breadcrumbs ======= --> */}
                <div className="breadcrumbs aos-init aos-animate" data-aos="fade-in">

                    <div className="container">
                        <h2>Courses Detail Page</h2>
                    </div>
                </div>
                {/* <!-- End Breadcrumbs --> */}

                {/* <!-- =======   ======= --> */}

                <section id="contact" className="contact">
                    <div className="container">

                        <div className="row">
                            <div className="row mt-5">



                                <div className="col-lg-8 mt-5 mt-lg-0 container-fluid">

                                    <div className="php-email-form">
                                        <div className="row ">
                                            <div className="form-group mt-3">
                                                <label>Enter Course Filed :</label>
                                                <input type="text" name="filed" className="form-control" id="coursesFiled" placeholder="Enter Course Filed" onChange={getInput} ></input>
                                                {uploadedError.coursesFiled && <div className="rq-msg">Required</div>}
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="form-group mt-3">
                                                <label>Enter Course Name :</label>
                                                <input type="text" name="name" className="form-control" id="coursesName" placeholder="Enter Course Name" onChange={getInput} ></input>
                                                {uploadedError.coursesName && <div className="rq-msg">Required</div>}

                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="form-group mt-3">
                                                <label>Enter Course Detail :</label>
                                                <textarea className="form-control" name="Detail" rows="5" id="coursesDetail" placeholder="Detail" onChange={getInput} ></textarea>
                                                {uploadedError.coursesDetail && <div className="rq-msg">Required</div>}

                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="form-group mt-3">
                                                <label>Enter Course Image :</label>
                                                <input type="file" accept=".png, .jpeg, .jpg" className="form-control" id="coursesImage" placeholder="Enter Course ImageS" onChange={getImage}></input>
                                                {uploadedError.coursesImage && <div className="rq-msg">Required</div>}

                                            </div>

                                        </div>




                                        {/* <div className="my-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div> */}

                                        <div className="two-btn">

                                            <div className="trend"><button type="submit" onClick={() => uploadDetail()}>{isLoading ? "Upload Course Detail" : "Loading"}</button></div>

                                            <div className="trend"><button type="submit" onClick={() => trendDetail()}>{isLoading ? "Trending Courses" : "Loading"}</button></div>


                                            {/* <div className="msg">{isLoading && <h6>Next Details To Upload ...</h6>}</div> */}


                                        </div>


                                    </div>



                                </div>

                            </div>
                        </div>

                    </div>
                </section>
                {/* -----upload trending courses details-----*/}

                <div className="tab-le">
                    <div className="tab-le"><h1>COURSES DETAIL</h1></div>
                    <table className="table table-bordered tab-le">
                        <thead className="cl-bdr">
                            <tr >
                                <th>CoursesFiled</th>
                                <th>CoursesName</th>
                                <th>CoursesDetail</th>
                                <th>CoursesImage</th>
                                <th> Delete</th>
                            </tr>
                        </thead>

                        <tbody className="cl-bdr">
                            {List}
                        </tbody>
                    </table>
                </div>


                {/* -----upload courses details-----*/}

                <div className="tab-le">
                    <div className="tab-le"><h1>TREND-COURSES DETAIL</h1></div>
                    <table className="table table-bordered tab-le">
                        <thead className="cl-bdr ">
                            <tr>
                                <th>CoursesFiled</th>
                                <th>CoursesName</th>
                                <th>CoursesDetail</th>
                                <th>CoursesImage</th>
                                <th>
                                    Delete</th>
                            </tr>
                        </thead>

                        <tbody className="cl-bdr ">
                            {Trend}
                        </tbody>
                    </table>
                </div>

                {/* <!-- login --> */}
            </main>
            {/* <!-- End #main --> */}


            <FooterComponent></FooterComponent>
        </div>
    );
};

export default CoursesDetail;