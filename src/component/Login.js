import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';


const Login = () => {

    const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['user']);
    // removeCookie
    const [formValues, setFormValues] = useState({
        username: '',
        password: '',

    });

    const [fieldErrors, setFieldErrors] = useState({
        username: false,
        password: false,

    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newFieldErrors = {
            username: formValues.username.trim() === '',
            password: formValues.password.trim() === '',

        };

        setFieldErrors(newFieldErrors);

        const allValid = Object.values(newFieldErrors).every(error => !error);

        if (allValid) {
            // Proceed with form submission
            console.log('Form submitted:', formValues);
            setCookie('username', formValues?.username, { path: '/' });
            setCookie('password', formValues?.password, { path: '/' });
            navigate('/dashboard')
        }
    };

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    return (

        <>
            <div className="wrappers">
                <div className="row">
                    <div className="col-lg-8 col-md-6 d-none d-md-block ">
                        <div className=" m-5">
                            <img src="/assets/image/logo-login.svg" alt="logoLogin" />
                        </div>
                        <div className="text-center gb-login">
                            <img src="/assets/image/gbr-login.png" alt="imgLogin" width={`60%`} />

                        </div>

                    </div>
                    <div className="col-lg-4 col-md-6  col-sm-12 right ">
                        <div className="input-box">
                            <header>KNEKS</header>
                            <h5>USER LOGIN</h5>
                            <form className="sign-in-form" onSubmit={handleSubmit}>
                                <div className={fieldErrors.username ? 'input-field-danger' : 'input-field mb-4'}>
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Masukkan Username"
                                        id="username"
                                        name="username"
                                        value={formValues.username}
                                        onChange={handleInputChange}

                                    />
                                </div>
                                {fieldErrors.username && (<small className="text-danger" style={{ paddingLeft: '20px' }}>*Wajib diisi</small>)}
                                <div className={fieldErrors.password ? 'input-field-danger' : 'input-field mb-4'}>
                                    <i className="fas fa-lock"></i>
                                    <input type={passwordShown ? 'text' : 'password'} placeholder="Masukkan Password"
                                        id="password"
                                        name="password"
                                        value={formValues.password}
                                        onChange={handleInputChange}
                                    />
                                    <span className="toggle-password" onClick={togglePasswordVisibility}>
                                        <i className={passwordShown ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                                    </span>
                                </div>
                                {fieldErrors.password && (<small className="text-danger" style={{ paddingLeft: '20px' }}>*Wajib diisi</small>)}
                                <input type="submit" value="Login" className="btn-login solid" />
                                <div className="text-center">
                                    <a href="#tt" className="link-secondary">Forgot Password</a>
                                </div>
                            </form>
                            <button className="btn-primaryx solid daftar-toggler" > Daftar</button>

                        </div>
                    </div>
                </div>
            </div>

            <div className="information-popup ">
                <div className="information-popup-overlay daftar-toggler"></div>
                <div className="information-popup-content">
                    <div className="p-3 close">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                    </div>

                    <div className="card">
                        <h1>Daftar</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
