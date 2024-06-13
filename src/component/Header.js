import React from "react";

const Header = () => {
  return (
    <>
      <div id="pre-loader">
        <div id="loader-logo"></div>
        <div id="loader-circle"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      <header className="header">
        {/* <div className="topbar">
          <div className="topbar-inner">
            <div className="topbar-left">
              <div className="topbar-socials">
                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                <a href="#"><i className="fa-brands fa-facebook"></i></a>
                <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                <a href="#"><i className="fa-brands fa-instagram"></i></a>
              </div>
              <div className="topbar-info">
                <ul>
                  <li>
                    <div className="topbar-icon">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    <div className="topbar-text">
                      <a href="mailto:needhelp@company.com">needhelp@company.com</a>
                    </div>
                  </li>
                  <li>
                    <div className="topbar-icon">
                      <i className="fa-solid fa-clock"></i>
                    </div>
                    <div className="topbar-text">
                      <span>Open Hours: Mon - Fri 8.00 am - 6.00 pm</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="topbar-right">
              <ul>
                <li><a href="department-details.html">Council</a></li>
                <li><a href="departments.html">Government</a></li>
                <li><a href="contact.html">Complaints</a></li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="main-menu sticky-header">
          <div className="main-menu-inner">
            <div className="main-menu-left">
              <div className="main-menu-logo">
                <a href="index.html"><img src="/assets/image/img-knks.png" alt="img-1" width="130" /></a>
              </div>
              <div className="navigation">
                <ul className="main-menu-list list-unstyled">
                  <li className="active"><a href="/">Beranda</a>
                  </li>
                  <li className="has-dropdown">
                    <a href="#">Profile</a>
                    <ul className="list-unstyled">
                      <li><a href="/tentang-kami">Tentang Kami</a></li>
                      <li><a href="/struktur-organisasi">Struktur Organisasi</a></li>
                      <li><a href="/galeri-foto">Galeri Foto</a></li>
                      <li><a href="/galeri-Video">Galeri Video</a></li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a href="#">Direktorat</a>
                    <ul className="list-unstyled">
                      <li><a href="/industri-produk-halal">Industri Produk Halal</a></li>
                      <li><a href="/jasa-keuangan-syariah">Jasa Keuangan Syariah</a></li>
                      <li><a href="/keuangan-sosial-syariah">Keuangan Sosial Syariah</a></li>
                      <li><a href="/bisnis-dan-kewiraushaan-syariah">Bisnis dan Kewirausahaan Syariah</a></li>
                      <li><a href="/infrastruktur-ekosistem-syariah">Infrastruktur Ekosistem Syariah</a></li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a href="#">Berita & Kegitan</a>
                    <ul className="list-unstyled">
                      <li><a href="/siaran-pers">Siaran Pers</a></li>
                      <li><a href="/liputan-media">Liputan Media</a></li>
                      <li><a href="/info-terkini">Info Terkini</a></li>
                    </ul>
                  </li>
                  <li ><a href="/e-library">E-library</a></li>
                  <li ><a href="/kdeks">KDEKS</a></li>
                  <li ><a href="/pdes">PDES</a></li>
                  <li ><a href="/agenda">Agenda</a></li>
                  <li ><a href="/kontak">Kontak</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="main-menu-right">
              <div className="topNav-right ">
                <ul>
                  <li><a href="department-details.html">EN</a></li>
                  <li><a href="departments.html">IN</a></li>
                </ul>
              </div>
              <div className="mobile-menu-button mobile-nav-toggler">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );

}

export default Header