import React from "react";
const Kontak = () => {
    return (
        <>
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
                                <form action="assets/inc/sendemail.php" className="contact-form  contact-form-validated" method="post" >
                                    <div className="row row-gutter-10">
                                        <div className="col-12 col-lg-6">
                                            <input type="text" id="name" className="input-text" placeholder="Your name" name="name" aria-required="true" />
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <input type="email" id="email" className="input-text" placeholder="Email address" name="email" aria-required="true" />
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <input type="text" id="phone" className="input-text" placeholder="Phone number" name="phone" aria-required="true" />
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <input type="text" id="subject" className="input-text" placeholder="Subject" name="subject" aria-required="true" />
                                        </div>
                                        <div className="col-12 col-lg-12">
                                            <textarea name="message" placeholder="Write a message" className="input-text" aria-required="true"></textarea>
                                        </div>
                                        <div className="col-12 col-lg-12">
                                            <button className="btn btn-primary">Kirim</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Kontak