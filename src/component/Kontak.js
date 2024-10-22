import React, { useState } from "react";

const Kontak = () => {
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
        <div className="page-wrapper">
            <section className="page-banner">
                <div className="container">
                    <div className="page-banner-title">
                        <h3>Kontak</h3>
                    </div>
                </div>
            </section>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <form className="contact-form contact-form-validated" onSubmit={handleSubmit}>
                                <div className="row row-gutter-10">
                                    <div className="col-12 col-lg-6">
                                        <input
                                            type="text"
                                            id="name"
                                            className="input-text"
                                            placeholder="Nama"
                                            name="name"
                                            value={formValues.name}
                                            onChange={handleInputChange}
                                            style={{ border: fieldErrors.name ? '1px solid #EE8282' : '' }}

                                        />
                                        {fieldErrors.name && <small className="text-danger">*Wajib diisi</small>}
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <input
                                            type="email"
                                            id="email"
                                            className="input-text"
                                            placeholder="Email"
                                            name="email"
                                            value={formValues.email}
                                            onChange={handleInputChange}
                                            style={{ border: fieldErrors.email ? '1px solid #EE8282' : '' }}

                                        />
                                        {fieldErrors.email && <small className="text-danger">*Wajib diisi</small>}
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <input
                                            type="text"
                                            id="phone"
                                            className="input-text"
                                            placeholder="Phone number"
                                            name="phone"
                                            value={formValues.phone}
                                            onChange={handleInputChange}
                                            style={{ border: fieldErrors.phone ? '1px solid #EE8282' : '' }}

                                        />
                                        {fieldErrors.phone && <small className="text-danger">*Wajib diisi</small>}
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <input
                                            type="text"
                                            id="subject"
                                            className="input-text"
                                            placeholder="Subjek"
                                            name="subject"
                                            value={formValues.subject}
                                            onChange={handleInputChange}
                                            style={{ border: fieldErrors.subject ? '1px solid #EE8282' : '' }}

                                        />
                                        {fieldErrors.subject && <small className="text-danger">*Wajib diisi</small>}
                                    </div>
                                    <div className="col-12 col-lg-12">
                                        <textarea
                                            name="inputText"
                                            placeholder="Tulis Pesan"
                                            className="input-text"
                                            value={formValues.inputText}
                                            onChange={handleInputChange}
                                            style={{ border: fieldErrors.inputText ? '1px solid #EE8282' : '', color: fieldErrors.inputText ? '#ffffff' : '' }}

                                        ></textarea>
                                        {fieldErrors.inputText && <small className="text-danger">*Wajib diisi</small>}
                                    </div>
                                    <div className="col-12 col-lg-12">
                                        <button className="btn btn-primary" type="submit">Kirim</button>
                                    </div>
                                </div>
                            </form>
                            <div className="pt-3">
                                <iframe
                                    width="100%"
                                    height="450px"
                                    title="Frame"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7933.418301716268!2d106.8388627!3d-6.1696863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5cbd72035e3%3A0x78a3dc4ef4719cb8!2sKementerian%20Keuangan%20Republik%20Indonesia!5e0!3m2!1sid!2sid!4v1690270978567!5m2!1sid!2sid"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Kontak;
