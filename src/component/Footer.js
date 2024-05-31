import React from "react";

const Footer = () => {
  return (
    <div>
      <section class="footer">
        <div class="footer-inner">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="footer-widget-logo">
                  <a href="index.html"><img src="/assets/image/logo-light.png" class="img-fluid" alt="img-25" /></a>
                </div>
                <div class="footer-widget-text">
                  <p>The gowrnx official guide to living, working, visiting and investing in the Texas</p>
                </div>
                <div class="footer-widget-socials">
                  <a href="#"><i class="fa-brands fa-twitter"></i></a>
                  <a href="#"><i class="fa-brands fa-facebook"></i></a>
                  <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                  <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="footer-widget">
                  <div class="footer-widget-explore">
                    <h4 class="footer-widget-title">Explore</h4>
                    <ul class="list-unstyled">
                      <li><a href="department-details.html">Administration</a></li>
                      <li><a href="service-details.html">Fire Services</a></li>
                      <li><a href="event-details.html">Business & Taxation</a></li>
                      <li><a href="team-details.html">Circular’s And Go’s</a></li>
                      <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-2">
                <div class="footer-widget">
                  <div class="footer-widget-department">
                    <h4 class="footer-widget-title">Departments</h4>
                    <ul class="list-unstyled">
                      <li><a href="department-details.html">Health & Safety</a></li>
                      <li><a href="department-details.html">Housing & Land</a></li>
                      <li><a href="department-details.html">Legal & Finance</a></li>
                      <li><a href="department-details.html">Transport & Traffic</a></li>
                      <li><a href="department-details.html">Arts & Culture</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-3">
                <div class="footer-widget">
                  <div class="footer-widget-contact">
                    <h4 class="footer-widget-title">Contact</h4>
                    <p>88 Broklyn Golden Road Street,<br />New York. USA</p>
                  </div>
                  <div class="footer-widget-contact-list">
                    <i class="fa-solid fa-envelope"></i>
                    <div class="footer-widget-contact-item">
                      <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                    </div>
                  </div>
                  <div class="footer-widget-contact-list">
                    <i class="fa-solid fa-phone"></i>
                    <div class="footer-widget-contact-item">
                      <a href="tel:+92-003-68-090">+92 (003) 68-090</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-footer">
          <div class="conatiner">
            <p>© Copyright 2023 by Company.com</p>
          </div>
        </div>
      </section>
      <div class="mobile-nav-wrapper">
        <div class="mobile-nav-overlay mobile-nav-toggler"></div>
        <div class="mobile-nav-content">
          <a href="#" class="mobile-nav-close mobile-nav-toggler">
            <span></span>
            <span></span>
          </a>
          <div class="logo-box">
            <a href="index.html"><img src="/assets/image/logo-light.png" width="160" height="40" alt="26" /></a>
          </div>
          <div class="mobile-nav-container"></div>
          <ul class="mobile-nav-contact list-unstyled">
            <li>
              <i class="fa-solid fa-phone"></i>
              <a href="tel:+8898006802">+ 88 ( 9800 ) 6802</a>
            </li>
            <li>
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:needhelp@company.com">needhelp@company.com</a>
            </li>
            <li>
              <i class="fa-solid fa-map-marker-alt"></i>
              88 Broklyn Golden Road Street <br /> New York. USA
            </li>
          </ul>
          <ul class="mobile-nav-social list-unstyled">
            <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div class="search-popup">
        <div class="search-popup-overlay search-toggler"></div>
        <div class="search-popup-content">
          <form action="#">
            <label for="search" class="sr-only">search here</label>
            <input type="text" id="search" placeholder="Search Here..." />
            <button type="submit" aria-label="search submit" class="search-btn">
              <span><i class="flaticon-search-interface-symbol"></i></span>
            </button>
          </form>
        </div>
      </div>
      <a href="#" class="scroll-to-top scroll-to-target" data-target="html"><i class="fa-solid fa-arrow-up"></i></a>
    </div>
  )

}

export default Footer