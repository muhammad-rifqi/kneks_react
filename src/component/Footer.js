import React from "react";

const Footer = () => {
  return (

    <div>

      <section className="footer">
        <div className="footer-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 ">
                <div className="footer-widget-logo pb-3">
                  <a href="/"><img src="/assets/image/img-knks-2.png" className="img-fluid " alt="img-25" /></a>
                </div>

                <div className="footer-widget-socials ">
                  <a href="/twitter"><i className="fa-brands fa-twitter"></i></a>
                  <a href="/twitter"><i className="fa-brands fa-facebook"></i></a>
                  <a href="/twitter"><i className="fa-brands fa-pinterest-p"></i></a>
                  <a href="/twitter"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-widget">
                  <div className="footer-widget-explore">
                    <h4 className="footer-widget-title">Menu</h4>
                    <ul className="list-unstyled">
                      <li><a href="#">Beranda</a></li>
                      <li><a href="#">Profil</a></li>
                      <li><a href="#">Berita & Kegiatan</a></li>
                      <li><a href="#">One Data Center</a></li>
                      <li><a href="#">Agenda</a></li>
                      <li><a href="#">Kontak</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-widget">
                  <div className="footer-widget-department">
                    <h4 className="footer-widget-title">Alamat</h4>
                    <p>Gedung Djuanda II Lantai 17 Jalan Wahidin Nomor 1,
                      Jakarta, Indonesia</p>

                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-widget">
                  <div className="footer-widget-contact">
                    <h4 className="footer-widget-title">Kontak</h4>

                  </div>
                  <div className="footer-widget-contact-list">
                    <i className="fa-solid fa-envelope"></i>
                    <div className="footer-widget-contact-item">
                      <a href="mailto:humas@kneks.go.id">humas@kneks.go.id</a>
                    </div>
                  </div>
                  <div className="footer-widget-contact-list">
                    <i className="fa-solid fa-phone"></i>
                    <div className="footer-widget-contact-item">
                      <a href="tel:+021-3449230">(021) 3449230</a>
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-lg-3">
                <div className="footer-widget">

                  {/* <div className="footer-widget-contact-list"> */}
                  <iframe width="100%" height="250px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7933.418301716268!2d106.8388627!3d-6.1696863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5cbd72035e3%3A0x78a3dc4ef4719cb8!2sKementerian%20Keuangan%20Republik%20Indonesia!5e0!3m2!1sid!2sid!4v1690270978567!5m2!1sid!2sid">
                  </iframe>
                  {/* </div> */}

                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="conatiner">
            <p>© Copyright {(new Date().getFullYear())} by KNEKS</p>
          </div>
        </div>
      </section>
      <div className="mobile-nav-wrapper">
        <div className="mobile-nav-overlay mobile-nav-toggler"></div>
        <div className="mobile-nav-content">
          <a href="#test" className="mobile-nav-close mobile-nav-toggler">
            <span></span>
            <span></span>
          </a>
          <div className="logo-box">
            <a href="index.html"><img src="/assets/image/logo-light.png" width="160" height="40" alt="26" /></a>
          </div>
          <div className="mobile-nav-container"></div>
          <ul className="mobile-nav-contact list-unstyled">
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+8898006802">+ 88 ( 9800 ) 6802</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:needhelp@company.com">needhelp@company.com</a>
            </li>
            <li>
              <i className="fa-solid fa-map-marker-alt"></i>
              88 Broklyn Golden Road Street <br /> New York. USA
            </li>
          </ul>
          <ul className="mobile-nav-social list-unstyled">
            <li><a href="/twitter"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="/facebook"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="/pinterest"><i className="fa-brands fa-pinterest-p"></i></a></li>
            <li><a href="/instagram"><i className="fa-brands fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="search-popup">
        <div className="search-popup-overlay search-toggler"></div>
        <div className="search-popup-content">
          <form action="#">
            <label htmlFor="search" className="sr-only">search here</label>
            <input type="text" id="search" placeholder="Search Here..." />
            <button type="submit" aria-label="search submit" className="search-btn">
              <span><i className="flaticon-search-interface-symbol"></i></span>
            </button>
          </form>
        </div>
      </div>
      <a href="#test2" className="scroll-to-top scroll-to-target" data-target="html"><i className="fa-solid fa-arrow-up"></i></a>
    </div>
  )

}

export default Footer