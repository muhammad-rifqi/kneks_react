import React from "react";

const Footer = () => {
  return (

    <div>

      <section className="footer">
        <div className="footer-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-widget-logo">
                  <a href="index.html"><img src="/assets/image/logo-light.png" className="img-fluid" alt="img-25" /></a>
                </div>
                <div className="footer-widget-text">
                  <p>The gowrnx official guide to living, working, visiting and investing in the Texas</p>
                </div>
                <div className="footer-widget-socials">
                  <a href="/twitter"><i className="fa-brands fa-twitter"></i></a>
                  <a href="/twitter"><i className="fa-brands fa-facebook"></i></a>
                  <a href="/twitter"><i className="fa-brands fa-pinterest-p"></i></a>
                  <a href="/twitter"><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-widget">
                  <div className="footer-widget-explore">
                    <h4 className="footer-widget-title">Explore</h4>
                    <ul className="list-unstyled">
                      <li><a href="department-details.html">Administration</a></li>
                      <li><a href="service-details.html">Fire Services</a></li>
                      <li><a href="event-details.html">Business & Taxation</a></li>
                      <li><a href="team-details.html">Circular’s And Go’s</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-widget">
                  <div className="footer-widget-department">
                    <h4 className="footer-widget-title">Departments</h4>
                    <ul className="list-unstyled">
                      <li><a href="department-details.html">Health & Safety</a></li>
                      <li><a href="department-details.html">Housing & Land</a></li>
                      <li><a href="department-details.html">Legal & Finance</a></li>
                      <li><a href="department-details.html">Transport & Traffic</a></li>
                      <li><a href="department-details.html">Arts & Culture</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="footer-widget">
                  <div className="footer-widget-contact">
                    <h4 className="footer-widget-title">Contact</h4>
                    <p>88 Broklyn Golden Road Street,<br />New York. USA</p>
                  </div>
                  <div className="footer-widget-contact-list">
                    <i className="fa-solid fa-envelope"></i>
                    <div className="footer-widget-contact-item">
                      <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                    </div>
                  </div>
                  <div className="footer-widget-contact-list">
                    <i className="fa-solid fa-phone"></i>
                    <div className="footer-widget-contact-item">
                      <a href="tel:+92-003-68-090">+92 (003) 68-090</a>
                    </div>
                  </div>
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