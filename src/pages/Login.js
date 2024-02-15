import React, {useState} from 'react';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate()

    const [errorForm, updateErrorForm] = useState({
        username: false,
        password: false
    });

    const loginButton = () => {
        updateErrorForm({
            ...errorForm,
            username: username === "" ? true : false,
            password: password === "" ? true : false
        });

        if (
            username === "" ||
            password === ""
        ) {
            // Do not submit the form if any field is empty
            return;
        }

        if (username === 'subash' && password === '1234') {
            // Correct credentials, navigate to the next page
            navigate('/application');
        } else {
            // Incorrect credentials, display an error message
            alert('Invalid username or password');
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
                <section id="contact" className="contact ">
                    <div className="container">

                        <div className="row">
                            <div className="row mt-5">



                                <div className="col-lg-8 mt-5 mt-lg-0 container-fluid">

                                    <div className="php-email-form">

                                        <div className="row">
                                            <div className="form-group mt-3">
                                                <label>Enter Admin Name  :</label>
                                                <input type="text" name="name" className="form-control" id="username" placeholder="Admin Name" required value={username} onChange={(e) => setUsername(e.target.value)}></input>
                                                {errorForm.username && <span className='error-class'>Required*</span>}
                                            </div>

                                        </div>
                                        <div className="form-group mt-3">
                                            <label>Enter password        :</label>
                                            <input type="password" className="form-control" name="password" id="password" placeholder="password" required value={password} onChange={(e) => setPassword(e.target.value)}></input>
                                            {errorForm.password && <span className='error-class'>Required*</span>}
                                        </div>


                                        <div className="text-center">
                                            <button onClick={() => loginButton()} type="submit">Login</button>
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