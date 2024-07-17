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

    return (

        <>
            <div className="wrappers">
                <div className="container main">
                    <div className="row">
                        <div className="col-md-6 side-image">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
