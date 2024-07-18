import React, { useState } from "react";

const Login = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        inputText: ''
    });

    const [fieldErrors, setFieldErrors] = useState({
        name: false,
        email: false,
        phone: false,
        subject: false,
        inputText: false
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
            name: formValues.name.trim() === '',
            email: formValues.email.trim() === '',
            phone: formValues.phone.trim() === '',
            subject: formValues.subject.trim() === '',
            inputText: formValues.inputText.trim() === ''
        };

        setFieldErrors(newFieldErrors);

        const allValid = Object.values(newFieldErrors).every(error => !error);

        if (allValid) {
            // Proceed with form submission
            console.log('Form submitted:', formValues);
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
                            <form action="#" class="sign-in-form">
                                <div class="input-field">
                                    <i class="fas fa-user"></i>
                                    <input type="text" placeholder="Masukkan Username" />
                                </div>
                                <div class="input-field">
                                    <i class="fas fa-lock"></i>
                                    <input type={passwordShown ? 'text' : 'password'} placeholder="Masukkan Password" />
                                    <span className="toggle-password" onClick={togglePasswordVisibility}>
                                        <i className={passwordShown ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                                    </span>
                                </div>

                                <input type="submit" value="Login" class="btn solid" />
                                <div class="signin">
                                    <a href="#">Forgot Password</a>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
