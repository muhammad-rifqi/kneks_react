import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import Kota from "../component/dumy/dataKota";

import { useTranslation } from 'react-i18next';
import { useCookies } from 'react-cookie';
import Swal from "sweetalert2";
import axios from "axios";
import $ from 'jquery';
const Header = () => {

  const location = useLocation();

  // const isKdeksPage = location.pathname === '/kdeks/';
  const { t } = useTranslation();
  const [activeMenu, setActiveMenu] = useState(location.pathname); // Initial state
  const [dataKota, setDataKota] = useState([]); // Initial state
  const [menux, setMenu] = useState([]);
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


  // const { t, i18n } = useTranslation();
  const { i18n } = useTranslation();
  const [cookies, setCookie] = useCookies(['i18next']);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCookie('i18next', lng, { path: '/' }); // Set cookie bahasa
  };


  window.addEventListener("load", () => {
    setCookie('i18next', 'id', { path: '/' });
  });


  useEffect(() => {
    // Function to fetch posts
    const fetchMenu = async () => {

      try {
        const url = process.env.REACT_APP_API_URL;
        const endpoint = process.env.REACT_APP_API_MENU_ALL;
        const response = await axios.get(`${url}${endpoint}`);
        setMenu(response.data);

      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      }
    };

    fetchMenu(); // Call fetchPosts function when component mounts
  }, []);

  // const [searchTerm, setSearchTerm] = useState('');

  // const handleChange = (event) => {
  //   const value = event.target.value;
  //   setSearchTerm(value);
  //   // Implement search logic if needed
  //   console.log('Cari apa' + searchTerm)
  // };

  useEffect(() => {
    const menuEl = $('.main-menu .navigation ul')[0];
    if (menuEl) {
      const menu_content = menuEl.outerHTML;
  
      $('.mobile-nav-container').html(menu_content);
      $('.mobile-nav-container .main-menu-list li.has-dropdown > a').append('<button><i class="fa-solid fa-chevron-right"></i></button>');
      $('.mobile-nav-container .main-menu-list li.has-dropdown > a button').on('click', function () {
        $(this).toggleClass('expanded');
        $(this).parents('a').siblings('ul').slideToggle();
      });
    }
  }, [menux]);
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
                <a href="https://cms-dev.kneks.go.id/">
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
          <div className="main-menu sticky-header">
            <div className="main-menu-inner">
              <div className="main-menu-left">
                <div className={isKdeksPage ? "" : "main-menu-logo"}>

                  {/* <a href={isKdeksPage ? "#kdeks" : "/"}>
                  <img
                    src={isKdeksPage ? "/assets/image/logoKdeks.png" : "/assets/image/kneks2.png"}
                    alt="logo"
                    width="280"
                  />
                </a> */}
                  {isKdeksPage ? (
                    // <a href="/kdeks">
                    //   <img
                    //     src="/assets/image/logoKdeks.png"
                    //     alt="logo"
                    //     width="200"
                    //   />
                    // </a>
                    ""
                  ) : (
                    <>
                      <a href="/">
                        <img
                          src="/assets/image/logo1.png"
                          alt="logo"
                          className="logo-large"
                        />
                      </a>
                      <span className="separator"></span>
                      <a href="/tentang-ekonomi-syariah">
                        <img
                          src="/assets/image/logo2.png"
                          alt="logo"
                          className="logo-small"
                        />
                      </a>
                    </>
                  )}
                </div>

                {isKdeksPage ? (
                  // <div className="navigation">
                  //   <ul className="main-menu-list list-unstyled">

                  //   </ul>
                  // </div>
                  ""
                ) : (
                  <div className="navigation">
                    <ul className="main-menu-list list-unstyled">
                      {/* {menux.map((item, index) => (
                        <li key={index} className={activeMenu === item.menu_link ? "active" : ""}>
                          <a onClick={() => handleMenuClick(item.menu_link)} href={item.menu_link}>
                            {cookies.i18next === 'en' ? item.menu_name_en : item.menu_name}
                          </a>
                          {item.menu_sub.length > 0 && (
                            <ul className="list-unstyled">
                              {item.menu_sub.map((detail, detailIndex) => (
                                <li key={detailIndex}>
                                  <a href={detail.submenu_link}>{cookies.i18next === 'en' ? detail.submenu_name_en : detail.submenu_name}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))} */}
                      {Array.isArray(menux) && menux.length > 0 ? (
                        menux.map((item, index) => (
                          <li
                            key={index}
                            className={`${item.menu_sub.length > 0 ? "has-dropdown" : ""} ${activeMenu === item.menu_link ? "active" : ""}`}
                          >
                            <a onClick={() => handleMenuClick(item.menu_link)} href={item.menu_link}>
                              {cookies.i18next === 'en' ? item.menu_name_en : item.menu_name}
                            </a>
                            {item.menu_sub.length > 0 && (
                              <ul className="list-unstyled">
                                {item.menu_sub.map((detail, detailIndex) => (
                                  <li key={detailIndex}>
                                    <a href={detail.submenu_link}>
                                      {cookies.i18next === 'en' ? detail.submenu_name_en : detail.submenu_name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))
                      ) : (
                        <li><span>No menu found</span></li>
                      )}
                    </ul>
                    {/* <li className={` ${activeMenu === '/' ? 'active' : ''}`}>
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
                    </li> */}
                    {/* <li className="has-dropdown">
                      <a href="#t">{t('menu.direktorat')}</a>
                      <ul className="list-unstyled">
                        <li><a href="/industri-produk-halal/1">{t('menu.industriProdukHalal')}</a></li>
                        <li><a href="/jasa-keuangan-syariah/2">{t('menu.jasaKeuanganSyariah')}</a></li>
                        <li><a href="/keuangan-sosial-syariah/3">{t('menu.keuanganSosialSyariah')}</a></li>
                        <li><a href="/bisnis-dan-kewirausahaan-syariah/4">{t('menu.bisnisDanKewirausahaan')}</a></li>
                        <li><a href="/infrastruktur-ekosistem-syariah/5">{t('menu.infrastrukturEkosistem')}</a></li> */}
                    {/* {menux.map((item, index) => (
                          <li key={index}>
                            <a href={`/${convertToSlug(item.title)}/${item.id}`}>{cookies.i18next === 'en' ? item.title_en : item.title}</a>
                          </li>
                        ))} */}
                    {/* </ul>
                    </li>
                    <li className="has-dropdown">
                      <a href="#t">{t('menu.beritaKegiatan')}</a>
                      <ul className="list-unstyled">
                        <li><a href="/berita-terkini">{t('menu.beritaTerkini')}</a></li>
                        {/* <li><a href="/berita-direktorat">{t('menu.beritaDirektorat')}</a></li>
                        <li><a href="/berita-kdeks">{t('menu.beritaKdeks')}</a></li> */}
                    {/* <li><a href="/liputan-media">{t('menu.liputanMedia')}</a></li>
                        <li><a href="/siaran-pers">{t('menu.siaranPers')}</a></li>
                        <li><a href="/opini">{t('menu.opini')}</a></li>  */}

                    {/* <li><a href="/info-terkini">{t('menu.infoTerkini')}</a></li> */}
                    {/* </ul>
                    </li> */}
                    {/* <li className={` ${activeMenu === '/berita-kegiatan' ? 'active' : ''}`}>
                      <a onClick={() => handleMenuClick('/berita-kegiatan')} href="/berita-kegiatan">{t('menu.beritaKegiatan')}</a>
                    </li> */}
                    {/* <li className={` ${activeMenu === '/agenda' ? 'active' : ''}`}>
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
                    </li> */}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );

}

export default Header