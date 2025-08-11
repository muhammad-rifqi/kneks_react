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

    // Fungsi untuk sanitasi input - mencegah XSS dan injection
    const sanitizeInput = (input) => {
        if (typeof input !== 'string') return input;
        
        return input
            .replace(/[<>]/g, '') // Hapus tag HTML
            .replace(/['"]/g, '') // Hapus quotes yang bisa digunakan untuk injection
            .replace(/javascript:/gi, '') // Hapus javascript protocol
            .replace(/on\w+=/gi, '') // Hapus event handlers
            .trim();
    };

    // Validasi yang lebih ketat
    const validateField = (name, value) => {
        // Sanitasi input terlebih dahulu
        const sanitizedValue = sanitizeInput(value);
        
        switch (name) {
            case "nama":
                if (sanitizedValue.trim() === '') return "*Wajib diisi";
                if (sanitizedValue.length < 2) return "*Nama minimal 2 karakter";
                // if (sanitizedValue.length > 50) return "*Nama maksimal 50 karakter";
                if (!/^[a-zA-Z\s]+$/.test(sanitizedValue)) return "*Nama hanya boleh huruf";
                return null;
                
            case "subjek":
                if (sanitizedValue.trim() === '') return "*Wajib diisi";
                if (sanitizedValue.length < 3) return "*Subjek minimal 3 karakter";
                // if (sanitizedValue.length > 100) return "*Subjek maksimal 100 karakter";
                return null;
                
            case "inputText":
                if (sanitizedValue.trim() === '') return "*Wajib diisi";
                if (sanitizedValue.length < 10) return "*Pesan minimal 10 karakter";
                // if (sanitizedValue.length > 1000) return "*Pesan maksimal 1000 karakter";
                return null;
                
            case "email":
                if (sanitizedValue.trim() === '') return "*Wajib diisi";
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(sanitizedValue)) return "*Email tidak valid";
                if (sanitizedValue.length > 100) return "*Email terlalu panjang";
                return null;
                
            case "phone":
                if (sanitizedValue.trim() === '') return "*Wajib diisi";
                if (!/^[0-9+\-\s()]{10,15}$/.test(sanitizedValue)) return "*Nomor telepon tidak valid";
                return null;
                
            default:
                return null;
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // Sanitasi input sebelum menyimpan ke state
        const sanitizedValue = sanitizeInput(value);
        setFormValues({ ...formValues, [name]: sanitizedValue });

        setFieldErrors({ ...fieldErrors, [name]: validateField(name, sanitizedValue) });
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

            // Sanitasi final sebelum mengirim ke server
            const sanitizedData = {
                name: sanitizeInput(formValues.nama),
                email: sanitizeInput(formValues.email).toLowerCase(),
                phone_number: sanitizeInput(formValues.phone).replace(/[^\d+\-\s()]/g, ''), // Hanya angka dan karakter telepon yang valid
                subjek: sanitizeInput(formValues.subjek),
                pesan: sanitizeInput(formValues.inputText)
            };

            // Validasi ulang data yang sudah disanitasi
            const finalValidation = Object.keys(sanitizedData).every(key => {
                if (key === 'phone_number') {
                    return validateField('phone', sanitizedData[key]) === null;
                }
                return validateField(key === 'name' ? 'nama' : key === 'pesan' ? 'inputText' : key, sanitizedData[key]) === null;
            });

            if (!finalValidation) {
                setIsLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Data tidak valid. Silakan periksa kembali input Anda."
                });
                return;
            }

            const url = process.env.REACT_APP_API_URL;
            const endpoint = process.env.REACT_APP_API_INPUT_KONTAK;
            
            // Validasi URL endpoint
            if (!url || !endpoint) {
                setIsLoading(false);
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Konfigurasi server tidak valid."
                });
                return;
            }

            fetch(`${url}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(sanitizedData)
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
                                                type={
                                                    field === "email" ? "email" : 
                                                    field === "phone" ? "tel" : 
                                                    "text"
                                                }
                                                id={field}
                                                placeholder={t(field).charAt(0).toUpperCase() + t(field).slice(1)}
                                                name={field}
                                                value={formValues[field]}
                                                onChange={handleInputChange}
                                                className={`input-text ${fieldErrors[field] ? "border-error" : ""}`}
                                                disabled={isLoading}
                                                autoComplete="off"
                                                spellCheck="false"
                                                maxLength={field === "nama" ? 50 : field === "email" ? 100 : field === "phone" ? 15 : 100}
                                                pattern={field === "phone" ? "[0-9+\\-\\s()]{10,15}" : undefined}
                                                inputMode={
                                                    field === "phone" ? "tel" : 
                                                    field === "email" ? "email" : 
                                                    "text"
                                                }
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
                                            autoComplete="off"
                                            spellCheck="false"
                                            maxLength={1000}
                                            rows={5}
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
