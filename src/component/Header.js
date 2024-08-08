import React from "react";
import { useCookies } from 'react-cookie';
const Header = () => {
  const [cookies] = useCookies(['user']);
  return (
    <>
      <div id="pre-loader">
        <div id="loader-logo"></div>
        <div id="loader-circle"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
      <header className="header">
        <div className="main-menu sticky-header">
          <div className="main-menu-inner">
            <div className="main-menu-left">
              <div className="main-menu-logo">
                <a href="/"><img src="/assets/image/logo.svg" alt="img-1" width="130" /></a>
              </div>
              <div className="navigation">
                <ul className="main-menu-list list-unstyled">
                  <li className="active"><a href="/">Beranda</a>
                  </li>
                  <li className="has-dropdown">
                    <a href="#t">Profile</a>
                    <ul className="list-unstyled">
                      <li><a href="/tentang-kami">Tentang Kami</a></li>
                      <li><a href="/tentang-ekonomi-syariah">Tentang Ekonomi Syariah</a></li>
                      <li><a href="/struktur-organisasi">Struktur Organisasi</a></li>
                      <li><a href="/galeri-foto">Galeri Foto</a></li>
                      <li><a href="/galeri-video">Galeri Video</a></li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a href="#t">Direktorat</a>
                    <ul className="list-unstyled">
                      <li><a href="/industri-produk-halal">Industri Produk Halal</a></li>
                      <li><a href="/jasa-keuangan-syariah">Jasa Keuangan Syariah</a></li>
                      <li><a href="/keuangan-sosial-syariah">Keuangan Sosial Syariah</a></li>
                      <li><a href="/bisnis-dan-kewiraushaan-syariah">Bisnis dan Kewirausahaan Syariah</a></li>
                      <li><a href="/infrastruktur-ekosistem-syariah">Infrastruktur Ekosistem Syariah</a></li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a href="#t">Berita & Kegitan</a>
                    <ul className="list-unstyled">
                      <li><a href="/siaran-pers">Siaran Pers</a></li>
                      <li><a href="/liputan-media">Liputan Media</a></li>
                      <li><a href="/info-terkini">Info Terkini</a></li>
                      <li ><a href="/opini-ekonomi-syariah">Opini Ekonomi Syariah</a></li>
                    </ul>
                  </li>
                  <li ><a href="/agenda">Agenda</a></li>
                  <li ><a href="/e-pustaka">E-Pustaka</a></li>
                  <li ><a href="/data">DATA</a></li>
                  <li ><a href="/kdeks">KDEKS</a></li>
                  <li ><a href="/kontak">Kontak</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="main-menu-right">
              <div className="topNav-right ">
                <ul>
                  <li><a href="#t">{cookies?.username}</a></li>
                  <li><a href="#t">Logout</a></li>
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