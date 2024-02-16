import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

const AdminLogin = ({ onLogin }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform authentication logic here (e.g., check username and password)
        // For simplicity, this example always considers the login as successful.
        //   const isLoggedIn = true;

        //   if (isLoggedIn) {
        //     onLogin(username);
        //     navigate('admin'); // Use navigate instead of history.push
        //   } else {
        //     alert('Invalid credentials. Please try again.');
        //   }


        // ----------------------------Admin-ID and PASSWORD----------------------------

        const correctUsername = 'user123';
        const correctPassword = 'pass123';

        if (username === correctUsername && password === correctPassword) {
            onLogin(username);
            navigate('/application'); // Use navigate instead of history.push

        } else {
            alert('Invalid credentials. Please try again.');
        }


    };


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

                                    <div className="php-email-form">

                                        <div className="row">
                                            <div className="form-group mt-3">
                                                <label>Enter Admin Name  :</label>
                                                <input type="text" className="form-control" placeholder="Admin Name" value={username}
                                                    onChange={(e) => setUsername(e.target.value)} ></input>
                                            </div>

                                        </div>
                                        <div className="form-group mt-3">
                                            <label>Enter password        :</label>
                                            <input type="password" className="form-control" placeholder="password" value={password}
                                                onChange={(e) => setPassword(e.target.value)}></input>
                                        </div>

                                        {/* <div className="my-3">
                                                <div className="loading">Loading</div>
                                                <div className="error-message"></div>
                                                <div className="sent-message">Your message has been sent. Thank you!</div>
                                            </div> */}
                                        <div className="two-btn">

                                            <div className="text-center"><button onClick={handleLogin} type="submit">Login</button></div>

                                            {/* <div className="msg-ivd">{false && <h6>Invalid AdminName or Password ...</h6>}</div> */}

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