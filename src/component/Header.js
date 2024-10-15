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

                <a href={isKdeksPage ? "#t" : "/"}>
                  <img
                    src={isKdeksPage ? "/assets/image/logoKdeks.png" : "/assets/image/logo.svg"}
                    alt="logo"
                    width="130"
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
                        <li><a href="/siaran-pers">{t('menu.siaranPers')}</a></li>
                        <li><a href="/liputan-media">{t('menu.liputanMedia')}</a></li>
                        <li><a href="/info-terkini">{t('menu.infoTerkini')}</a></li>
                        <li><a href="/opini">{t('menu.opini')}</a></li>
                      </ul>
                    </li>
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

            <div className="main-menu-right">
              <div className="topNav-right ">
                <ul>
                  <li><a href="#t" onClick={() => changeLanguage('en')} className={cookies.i18next === 'en' ? 'text-primary' : ''}>EN</a></li>
                  <li><a href="#t" onClick={() => changeLanguage('id')} className={cookies.i18next === 'id' ? 'text-primary' : ''}>ID</a></li>
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