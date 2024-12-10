import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import Kota from "../component/dumy/dataKota";

import { useTranslation } from 'react-i18next';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // const [activeMenu, setActiveMenu] = useState(location.pathname); // Initial state
  const [dataKota, setDataKota] = useState([]); // Initial state

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

    // setActiveMenu(location.pathname);
  }, [location, dataKota]);

  function refreshPage() {
    window.location.reload();
  }

  const { t } = useTranslation();

  // State to track hover for menu items
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null); // State to track hover for sub-items
  const [searchQuery, setSearchQuery] = useState('');

  // Inline styles for the dropdown menu
  const menuItemStyle = {
    padding: '1px 0 0 0 ',
    textDecoration: 'none',
    color: '#000',
    // backgroundColor: '#f1f1f1',
    display: 'block',
  };

  const submenuStyle = {
    display: 'none', // Default hidden
    position: 'absolute',
    left: '100%',
    top: '0',
    minWidth: '250px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    padding: '5px 1px 5px 10px',
    zIndex: 1,
  };

  const showSubmenuStyle = {
    ...submenuStyle,
    display: 'block',
  };

  // Submenu item hover style
  const submenuItemStyle = (isHovered) => ({
    ...menuItemStyle,
    backgroundColor: isHovered ? '#ddd' : '#f9f9f9', // Change background on hover
  });

  const onSearch = (e) =>{
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
      
      const searchPopup = document.querySelector(".search-popup");
      if (searchPopup) {
        searchPopup.classList.remove("active");
      }
      
      document.body.classList.remove("locked");
    }
  }

  return (

    <div>

      <section className="footer border-top">
        <div className="footer-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 ">
                <div className="footer-widget-logo pb-3">
                  <a href={isKdeksPage ? "#kdeks" : "/"}><img src={isKdeksPage ? "/assets/image/logoKdeks.png" : "/assets/image/kneks2.png"} className="img-fluid " alt="img-25" /></a>
                </div>

                <div className="footer-widget-socials ">
                  <a href="https://twitter.com/kneks_id" target='_blank' rel='noreferrer'><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="https://www.facebook.com/kneks.id" target='_blank' rel='noreferrer'><i className="fa-brands fa-facebook"></i></a>
                  <a href="https://www.linkedin.com/company/kneks" target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a>
                  <a href="https://www.instagram.com/kneks.id/" target='_blank' rel='noreferrer'><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://www.youtube.com/channel/UCkoy3PTHaKD5OIh3Jx-cGsg?view_as=subscriber/" target='_blank' rel='noreferrer'><i className="fa-brands fa-youtube"></i></a>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-widget">
                  <div className="footer-widget-explore">
                    <h4 className="footer-widget-title">Menu</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      <li>
                        <a href="/" style={menuItemStyle}>{t('menu.home')}</a>
                      </li>

                      {/* Profile menu with hover */}
                      <li
                        onMouseEnter={() => setHoveredItem('profile')}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{ position: 'relative' }}
                      >
                        <a href="#profil" style={menuItemStyle}>{t('menu.profile')}</a>
                        <ul style={hoveredItem === 'profile' ? showSubmenuStyle : submenuStyle}>
                          <li
                            onMouseEnter={() => setHoveredSubItem('subItem1')}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <a href="/tentang-kami" className='mt-2' style={submenuItemStyle(hoveredSubItem === 'subItem1')}>
                              {t('menu.tentangKami')}
                            </a>
                          </li>
                          <li
                            onMouseEnter={() => setHoveredSubItem('subItem2')}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <a href="/tentang-ekonomi-syariah" style={submenuItemStyle(hoveredSubItem === 'subItem2')}>
                              {t('menu.tentangEkonomiSyariah')}
                            </a>
                          </li>
                          <li
                            onMouseEnter={() => setHoveredSubItem('subItem3')}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <a href="/struktur-organisasi" style={submenuItemStyle(hoveredSubItem === 'subItem3')}>
                              {t('menu.strukturOrganisasi')}
                            </a>
                          </li>
                          <li
                            onMouseEnter={() => setHoveredSubItem('subItem4')}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <a href="/galeri-foto" style={submenuItemStyle(hoveredSubItem === 'subItem4')}>
                              {t('menu.galeriFoto')}
                            </a>
                          </li>
                          <li
                            onMouseEnter={() => setHoveredSubItem('subItem5')}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <a href="/galeri-video" style={submenuItemStyle(hoveredSubItem === 'subItem5')}>
                              {t('menu.galeriVideo')}
                            </a>
                          </li>
                        </ul>
                      </li>

                      {/* Direktorat menu with hover */}
                      <li
                        onMouseEnter={() => setHoveredItem('direktorat')}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{ position: 'relative' }}
                      >
                        <a href="#direktorat" style={menuItemStyle}>{t('menu.direktorat')}</a>
                        <ul style={hoveredItem === 'direktorat' ? showSubmenuStyle : submenuStyle}>
                          <li
                            onMouseEnter={() => setHoveredSubItem('subItem6')}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <a href="/industri-produk-halal" className='mt-2' style={submenuItemStyle(hoveredSubItem === 'subItem6')}>
                              {t('menu.industriProdukHalal')}
                            </a>
                          </li>
                          <li
                            onMouseEnter={() => setHoveredSubItem('subItem7')}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <a href="/jasa-keuangan-syariah" style={submenuItemStyle(hoveredSubItem === 'subItem7')}>
                              {t('menu.jasaKeuanganSyariah')}
                            </a>
                          </li>
                          <li
                            onMouseEnter={() => setHoveredSubItem('subItem8')}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <a href="/keuangan-sosial-syariah" style={submenuItemStyle(hoveredSubItem === 'subItem8')}>
                              {t('menu.keuanganSosialSyariah')}
                            </a>
                          </li>
                          <li
                            onMouseEnter={() => setHoveredSubItem('subItem9')}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <a href="/bisnis-dan-kewiraushaan-syariah" style={submenuItemStyle(hoveredSubItem === 'subItem9')}>
                              {t('menu.bisnisDanKewirausahaan')}
                            </a>
                          </li>
                          <li
                            onMouseEnter={() => setHoveredSubItem('subItem10')}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <a href="/infrastruktur-ekosistem-syariah" style={submenuItemStyle(hoveredSubItem === 'subItem10')}>
                              {t('menu.infrastrukturEkosistem')}
                            </a>
                          </li>
                        </ul>
                      </li>
                     
                      <li
                        onMouseEnter={() => setHoveredItem('berita')}
                        onMouseLeave={() => setHoveredItem(null)}
                        style={{ position: 'relative' }}
                      >
                        <a href="#berita-kegiatan" style={menuItemStyle}>{t('menu.beritaKegiatan')}</a>
                        <ul style={hoveredItem === 'berita' ? showSubmenuStyle : submenuStyle}>
                          <li
                            onMouseEnter={() => setHoveredSubItem('subItem11')}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <a href="/berita-terkini" style={submenuItemStyle(hoveredSubItem === 'subItem13')}>
                              {t('menu.beritaTerkini')}
                            </a>
                          </li>
                          <li
                            onMouseEnter={() => setHoveredSubItem('subItem12')}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <a href="/liputan-media" style={submenuItemStyle(hoveredSubItem === 'subItem12')}>
                              {t('menu.liputanMedia')}
                            </a>
                          </li>
                          <li
                            onMouseEnter={() => setHoveredSubItem('subItem13')}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                           
                            <a href="/siaran-pers" className='mt-2' style={submenuItemStyle(hoveredSubItem === 'subItem11')}>
                              {t('menu.siaranPers')}
                            </a>
                          </li>
                          {/* <li
                            onMouseEnter={() => setHoveredSubItem('subItem14')}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <a href="/opini" style={submenuItemStyle(hoveredSubItem === 'subItem14')}>
                              {t('menu.opini')}
                            </a>
                          </li> */}

                        </ul>
                      </li>
                      <li>
                        <a href="/agenda" style={menuItemStyle}>{t('menu.agenda')}</a>
                      </li>

                      <li>
                        <a href="/e-pustaka" style={menuItemStyle}>{t('menu.ePustaka')}</a>
                      </li>

                      <li>
                        <a href="/data" style={menuItemStyle}>{t('menu.data')}</a>
                      </li>

                      <li>
                        <a href="/kdeks" style={menuItemStyle}>{t('menu.kdeks')}</a>
                      </li>

                      <li>
                        <a href="/kontak" style={menuItemStyle}>{t('menu.kontak')}</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-widget">
                  <div className="footer-widget-department">
                    <h4 className="footer-widget-title">{t('alamat')}</h4>
                    <p>Gedung Djuanda II Lantai 17 Jalan Wahidin Nomor 1,
                      Jakarta, Indonesia</p>

                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="footer-widget">
                  <div className="footer-widget-contact">
                    <h4 className="footer-widget-title">{t('menu.kontak')}</h4>

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

                  <iframe width="100%" height="250px" frameBorder="0" scrolling="no" title="frame" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7933.418301716268!2d106.8388627!3d-6.1696863!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5cbd72035e3%3A0x78a3dc4ef4719cb8!2sKementerian%20Keuangan%20Republik%20Indonesia!5e0!3m2!1sid!2sid!4v1690270978567!5m2!1sid!2sid">
                  </iframe>

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
            <a href="#tt"><img src="/assets/image/kneks2.png" width="160" height="40" alt="26" /></a>
          </div>
          <div className="mobile-nav-container"></div>
          <ul className="mobile-nav-contact list-unstyled">
            <li>
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+021-3449230">+ (021) 3449230</a>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:humas@kneks.go.id">humas@kneks.go.id</a>
            </li>
            <li>
              <i className="fa-solid fa-map-marker-alt"></i>
              Gedung Djuanda II Lantai 17 Jalan Wahidin Nomor 1, <br /> Jakarta, Indonesia
            </li>
          </ul>
          <ul className="mobile-nav-social list-unstyled">
            <li><a href="https://twitter.com/kneks_id"><i className="fa-brands fa-twitter"></i></a></li>
            <li><a href="https://www.facebook.com/kneks.id"><i className="fa-brands fa-facebook"></i></a></li>
            <li><a href="https://www.linkedin.com/company/kneks"><i className="fa-brands fa-linkedin"></i></a></li>
            <li><a href="https://www.instagram.com/kneks.id/"><i className="fa-brands fa-instagram"></i></a></li>
            <li><a href="https://www.youtube.com/channel/UCkoy3PTHaKD5OIh3Jx-cGsg?view_as=subscriber"><i className="fa-brands fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="search-popup">
        <div className="search-popup-overlay search-toggler"></div>
        <div className="search-popup-content">
          <form onSubmit={onSearch}>
            <label htmlFor="search" className="sr-only">{t('pencarian')}</label>
            <input
              type="text"
              id="search"
              placeholder={t('pencarian')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" aria-label="search submit" className="search-btn">
              <span><i className="flaticon-search-interface-symbol"></i></span>
            </button>
          </form>
        </div>
      </div>
      {/* <a href="#test2" className="scroll-to-top-x" onClick={ refreshPage }><i className="fa-solid fa-arrow-up"></i></a> */}
      <a href="#test2" className="scroll-to-top-x" data-bs-toggle="tooltip" title="Refresh" onClick={refreshPage}>
        <i className="fa-solid fa-refresh"></i>
      </a>
      <a href="#test2" className="scroll-to-top scroll-to-target" data-target="html"><i className="fa-solid fa-arrow-up"></i></a>
    </div>
  )

}

export default Footer