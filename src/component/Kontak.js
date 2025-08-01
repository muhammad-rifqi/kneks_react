import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
const Kontak = () => {
  const { t } = useTranslation();

    const [formValues, setFormValues] = useState({
        nama: '',
        email: '',
        phone: '',
        subjek: '',
        inputText: ''
    });

    const [fieldErrors, setFieldErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const validateField = (name, value) => {
        switch (name) {
            case "nama":
            case "subjek":
            case "inputText":
                return value.trim() === '' ? "*Wajib diisi" : null;
            case "email":
                return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? "*Email tidak valid" : null;
            case "phone":
                return !/^[0-9]{10,15}$/.test(value) ? "*Nomor telepon tidak valid" : null;
            default:
                return null;
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });

        setFieldErrors({ ...fieldErrors, [name]: validateField(name, value) });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newFieldErrors = {};
        Object.keys(formValues).forEach((key) => {
            newFieldErrors[key] = validateField(key, formValues[key]);
        });

        setFieldErrors(newFieldErrors);

        const allValid = Object.values(newFieldErrors).every(error => error === null);
        if (allValid) {
            setIsLoading(true);

            const url = process.env.REACT_APP_API_URL;
            const endpoint = process.env.REACT_APP_API_INPUT_KONTAK;
            fetch(`${url}${endpoint}`, {
                method: 'POST', // Specify the request method
                headers: {
                    'Content-Type': 'application/json', // Specify the content type as JSON
                },
                body: JSON.stringify({
                    name: formValues.nama,
                    email: formValues.email,
                    phone_number: parseInt(formValues.phone, 10), // Convert phone to a number
                    subjek: formValues.subjek,
                    pesan: formValues.inputText
                }) // Convert the form data to a JSON string
            })
                .then(response => {
                    // Check if the response is OK (status 200-299)
                    if (!response.ok) {
                        throw new Error("Failed to send message");
                    }
                    return response.json(); // Parse the response as JSON
                })
                .then(data => {
                    setIsLoading(false);
                    if (data.success) {
                        Swal.fire({
                            icon: "success",
                            title: "Berhasil",
                            text: "Pesan Terkirim"
                        }).then((result) => {
                            if (result.isConfirmed) {
                                window.location.reload();
                            }
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: "Gagal Mengirim Pesan."
                        });
                    }
                })
                .catch(error => {
                    setIsLoading(false);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: error.message || "Something went wrong. Please try again later."
                    });
                });
        }
    };

    return (
        <div className="page-wrapper">
            <section className="page-banner">
                <div className="container">
                    <div className="page-banner-title">
                        <h3>{t('menu.kontak')}</h3>
                    </div>
                </div>
            </section>
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <form className="contact-form contact-form-validated" onSubmit={handleSubmit}>
                                <div className="row row-gutter-10">
                                    {['nama', 'email', 'phone', 'subjek'].map((field, index) => (
                                        <div key={index} className="col-12 col-lg-6">
                                            <input
                                                type={field === "email" ? "email" : "text"}
                                                id={field}
                                                placeholder={t(field).charAt(0).toUpperCase() + t(field).slice(1)}
                                                name={field}
                                                value={formValues[field]}
                                                onChange={handleInputChange}
                                                className={`input-text ${fieldErrors[field] ? "border-error" : ""}`}
                                                disabled={isLoading}
                                            />
                                            {fieldErrors[field] && <small className="text-danger">{fieldErrors[field]}</small>}
                                        </div>
                                    ))}

                                    <div className="col-12">
                                        <textarea
                                            name="inputText"
                                            placeholder={t('tulisPesan')}
                                            className={`input-text ${fieldErrors.inputText ? "border-error" : ""}`}
                                            value={formValues.inputText}
                                            onChange={handleInputChange}
                                            disabled={isLoading}
                                        ></textarea>
                                        {fieldErrors.inputText && <small className="text-danger">{fieldErrors.inputText}</small>}
                                    </div>
                                    <div className="col-12">
                                        <button 
                                            className="btn btn-primary" 
                                            type="submit" 
                                            disabled={isLoading}
                                            style={{ position: 'relative' }}
                                        >
                                            {isLoading ? (
                                                <>
                                                    <span 
                                                        className="spinner-border spinner-border-sm me-2" 
                                                        role="status" 
                                                        aria-hidden="true"
                                                        style={{ 
                                                            width: '1rem', 
                                                            height: '1rem',
                                                            marginRight: '8px'
                                                        }}
                                                    ></span>
                                                    Mengirim...
                                                </>
                                            ) : (
                                                t('kirim')
                                            )}
                                        </button>
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
