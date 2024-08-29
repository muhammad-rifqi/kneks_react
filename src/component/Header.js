import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Kota from "../component/dumy/dataKota";
const Header = () => {
  const [cookies] = useCookies(['user']);

  const location = useLocation();
  const isKdeksPage = location.pathname === '/kdeks';

  const [activeMenu, setActiveMenu] = useState(location.pathname); // Initial state

  // Function to handle menu click
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };
  const [kota, setKota] = useState([]);
  useEffect(() => {
    const isian = Kota();
    setKota(isian);
    // alert(items.length);


  }, []);

  useEffect(() => {
    // Update activeMenu whenever the location changes
    setActiveMenu(location.pathname);
  }, [location]);

  const getLogo = () => {
    const citySlug = activeMenu.split("/")[2]; // Get the city slug from the URL
    const city = kota.find((k) => k.title || isKdeksPage === citySlug);
    return city ? "/assets/image/logoKdeks.png" : "/assets/image/logo.svg";
  };

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

                <a href={isKdeksPage || activeMenu.split("/")[2] ? "/kdeks" : "/"}>
                  <img
                    src={getLogo()}
                    alt="logo"
                    width="130"
                  />
                </a>
              </div>
              {isKdeksPage || activeMenu.split("/")[2] ? (
                <div className="navigation">
                  <ul className="main-menu-list list-unstyled">

                  </ul>
                </div>
              ) : (
                <div className="navigation">
                  <ul className="main-menu-list list-unstyled">
                    <li className={` ${activeMenu === '/' ? 'active' : ''}`}><a onClick={() => handleMenuClick('/')} href="/">Beranda</a>
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
                        <li ><a href="/opini">Opini</a></li>
                      </ul>
                    </li>
                    <li className={` ${activeMenu === '/agenda' ? 'active' : ''}`} ><a onClick={() => handleMenuClick('/agenda')} href="/agenda">Agenda</a></li>
                    <li className={` ${activeMenu === '/e-pustaka' ? 'active' : ''}`} ><a onClick={() => handleMenuClick('/e-pustaka')} href="/e-pustaka">E-Pustaka</a></li>
                    <li className={` ${activeMenu === '/data' ? 'active' : ''}`} ><a onClick={() => handleMenuClick('/data')} href="/data">DATA</a></li>
                    <li ><a href="/kdeks" >KDEKS</a></li>
                    <li className={` ${activeMenu === '/kontak' ? 'active' : ''}`} ><a onClick={() => handleMenuClick('/kontak')} href="/kontak">Kontak</a>
                    </li>
                  </ul>
                </div>
              )}

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