import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import Kota from "../component/dumy/dataKota";

import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';

const Header = () => {

  const location = useLocation();

  // const isKdeksPage = location.pathname === '/kdeks/';

  const [activeMenu, setActiveMenu] = useState(location.pathname); // Initial state
  const [dataKota, setDataKota] = useState([]); // Initial state

  // Function to handle menu click
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const convertToSlug = (title) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  useEffect(() => {
    if (Kota) { // Make sure Kota is defined
      setDataKota(Kota);
    }
  }, []);


  const [locationsx, setLocation] = useState();
  const splita = location.pathname.split('/')
  const isKdeksPage = locationsx && splita[2] === convertToSlug(locationsx.title);



  useEffect(() => {

    const locati = location.pathname.split("/")

    if (dataKota && dataKota.length > 0) {
      const foundItem = dataKota.find(kneks => convertToSlug(kneks.title) === locati[2]);
      setLocation(foundItem);
      // const isKdeksPage = location.pathname === '/kdeks/'
    }

    setActiveMenu(location.pathname);
  }, [location, dataKota]);


  const { t, i18n } = useTranslation();
  const [cookies, setCookie] = useCookies(['i18next']);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCookie('i18next', lng, { path: '/' }); // Set cookie bahasa
  };


  window.addEventListener("load", () => {
    setCookie('i18next', 'id', { path: '/' });
  });




  // const [searchTerm, setSearchTerm] = useState('');

  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   setSearchTerm(value);
  //   // Implement search logic if needed
  //   console.log('Cari apa' + searchTerm)
  // };
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
          <div className="main-menu-top">
            <div className="main-menu-right">

              <div className="search-box">
                <a href="#t" className="search-toggler">
                  <i className="flaticon-search-interface-symbol"></i>
                </a>
              </div>
              <div className="search-box">
                <a href="https://webdev.rifhandi.com/register">
                  <img src="/assets/image/person-circle.svg" className="rounded-circle" alt="img-person"
                    width="32"
                    height="32"
                  />
                </a>
              </div>
              <div className="topNav-right pr-2">
                <ul>
                  <li onClick={() => changeLanguage('id')} className={cookies.i18next === 'id' ? 'text-primary bg-white' : ''}>ID</li>
                  <li className={cookies.i18next === 'en' ? 'text-primary bg-white' : ''}
                    onClick={() => changeLanguage('en')}>EN</li>
                </ul>
              </div>
             

              <div className="mobile-menu-button mobile-nav-toggler m-0">
                <span></span>
                <span></span>
                <span></span>
              </div>

            </div>
          </div>
          <div className="main-menu-inner">
            <div className="main-menu-left">
              <div className="main-menu-logo">

                <a href={isKdeksPage ? "#kdeks" : "/"}>
                  <img
                    src={isKdeksPage ? "/assets/image/logoKdeks.png" : "/assets/image/logoKneks.png"}
                    alt="logo"
                    width="280"
                  />
                </a>
              </div>
              {isKdeksPage ? (
                <div className="navigation">
                  <ul className="main-menu-list list-unstyled">

                  </ul>
                </div>
              ) : (
                <div className="navigation">
                  <ul className="main-menu-list list-unstyled">
                    <li className={` ${activeMenu === '/' ? 'active' : ''}`}>
                      <a onClick={() => handleMenuClick('/')} href="/">{t('menu.home')}</a>
                    </li>
                    <li className="has-dropdown">
                      <a href="#t">{t('menu.profile')}</a>
                      <ul className="list-unstyled">
                        <li><a href="/tentang-kami">{t('menu.tentangKami')}</a></li>
                        <li><a href="/tentang-ekonomi-syariah">{t('menu.tentangEkonomiSyariah')}</a></li>
                        <li><a href="/struktur-organisasi">{t('menu.strukturOrganisasi')}</a></li>
                        <li><a href="/galeri-foto">{t('menu.galeriFoto')}</a></li>
                        <li><a href="/galeri-video">{t('menu.galeriVideo')}</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="#t">{t('menu.direktorat')}</a>
                      <ul className="list-unstyled">
                        <li><a href="/industri-produk-halal">{t('menu.industriProdukHalal')}</a></li>
                        <li><a href="/jasa-keuangan-syariah">{t('menu.jasaKeuanganSyariah')}</a></li>
                        <li><a href="/keuangan-sosial-syariah">{t('menu.keuanganSosialSyariah')}</a></li>
                        <li><a href="/bisnis-dan-kewiraushaan-syariah">{t('menu.bisnisDanKewirausahaan')}</a></li>
                        <li><a href="/infrastruktur-ekosistem-syariah">{t('menu.infrastrukturEkosistem')}</a></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="#t">{t('menu.beritaKegiatan')}</a>
                      <ul className="list-unstyled">
                        <li><a href="/berita-terkini">{t('menu.beritaTerkini')}</a></li>
                        <li><a href="/berita-direktorat">{t('menu.beritaDirektorat')}</a></li>
                        <li><a href="/berita-kdeks">{t('menu.beritaKdeks')}</a></li>
                      </ul>
                    </li>
                    {/* <li className={` ${activeMenu === '/berita-kegiatan' ? 'active' : ''}`}>
                      <a onClick={() => handleMenuClick('/berita-kegiatan')} href="/berita-kegiatan">{t('menu.beritaKegiatan')}</a>
                    </li> */}
                    <li className={` ${activeMenu === '/agenda' ? 'active' : ''}`}>
                      <a onClick={() => handleMenuClick('/agenda')} href="/agenda">{t('menu.agenda')}</a>
                    </li>
                    <li className={` ${activeMenu === '/e-pustaka' ? 'active' : ''}`}>
                      <a onClick={() => handleMenuClick('/e-pustaka')} href="/e-pustaka">{t('menu.ePustaka')}</a>
                    </li>
                    <li className={` ${activeMenu === '/data' ? 'active' : ''}`}>
                      <a onClick={() => handleMenuClick('/data')} href="/data">{t('menu.data')}</a>
                    </li>
                    <li className={` ${activeMenu === '/kdeks' ? 'active' : ''}`}>
                      <a onClick={() => handleMenuClick('/kdeks')} href="/kdeks">{t('menu.kdeks')}</a>
                    </li>
                    <li className={` ${activeMenu === '/kontak' ? 'active' : ''}`}>
                      <a onClick={() => handleMenuClick('/kontak')} href="/kontak">{t('menu.kontak')}</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );

}

export default Header