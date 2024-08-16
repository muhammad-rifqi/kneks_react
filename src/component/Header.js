import React from "react";
import { Link, useLocation } from 'react-router-dom';
import { useCookies } from 'react-cookie';
const Header = () => {
  const [cookies] = useCookies(['user']);

  const location = useLocation();
  const isKdeksPage = location.pathname === '/kdeks';
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

                {isKdeksPage ? (
                  <Link to="/kdeks"><img src="/assets/image/logoKdeks.png" alt="logo" width="130" /></Link>
                ) : (
                  <Link to="/"><img src="/assets/image/logo.svg" alt="logo" width="130" /></Link>
                )}
              </div>
              {isKdeksPage ? (
                <div className="navigation">
                  <ul className="main-menu-list list-unstyled">
                    
                  </ul>
                </div>
              ) : (
                <div className="navigation">
                  <ul className="main-menu-list list-unstyled">
                    <li className="active"><Link to="/">Beranda</Link>
                    </li>
                    <li className="has-dropdown">
                      <Link to="#t">Profile</Link>
                      <ul className="list-unstyled">
                        <li><Link to="/tentang-kami">Tentang Kami</Link></li>
                        <li><Link to="/tentang-ekonomi-syariah">Tentang Ekonomi Syariah</Link></li>
                        <li><Link to="/struktur-organisasi">Struktur Organisasi</Link></li>
                        <li><Link to="/galeri-foto">Galeri Foto</Link></li>
                        <li><Link to="/galeri-video">Galeri Video</Link></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link to="#t">Direktorat</Link>
                      <ul className="list-unstyled">
                        <li><Link to="/industri-produk-halal">Industri Produk Halal</Link></li>
                        <li><Link to="/jasa-keuangan-syariah">Jasa Keuangan Syariah</Link></li>
                        <li><Link to="/keuangan-sosial-syariah">Keuangan Sosial Syariah</Link></li>
                        <li><Link to="/bisnis-dan-kewiraushaan-syariah">Bisnis dan Kewirausahaan Syariah</Link></li>
                        <li><Link to="/infrastruktur-ekosistem-syariah">Infrastruktur Ekosistem Syariah</Link></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link to="#t">Berita & Kegitan</Link>
                      <ul className="list-unstyled">
                        <li><Link to="/siaran-pers">Siaran Pers</Link></li>
                        <li><Link to="/liputan-media">Liputan Media</Link></li>
                        <li><Link to="/info-terkini">Info Terkini</Link></li>
                        <li ><Link to="/opini">Opini</Link></li>
                      </ul>
                    </li>
                    <li ><Link to="/agenda">Agenda</Link></li>
                    <li ><Link to="/e-pustaka">E-Pustaka</Link></li>
                    <li ><Link to="/data">DATA</Link></li>
                    <li ><Link to="/kdeks" >KDEKS</Link></li>
                    <li ><Link to="/kontak">Kontak</Link>
                    </li>
                  </ul>
                </div>
              )}

            </div>

            <div className="main-menu-right">
              <div className="topNav-right ">
                <ul>
                  <li><Link to="#t">{cookies?.username}</Link></li>
                  <li><Link to="#t">Logout</Link></li>
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