import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  function refreshPage() {
    window.location.reload();
  }

  const { t, i18n } = useTranslation();

  // State to track hover for menu items
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredSubItem, setHoveredSubItem] = useState(null); // State to track hover for sub-items

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

  return (

    <div>

      <section className="footer border-top">
        <div className="footer-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 ">
                <div className="footer-widget-logo pb-3">
                  <a href="/"><img src="/assets/image/img-knks-2.png" className="img-fluid " alt="img-25" /></a>
                </div>

                <div className="footer-widget-socials ">
                  <a href="/twitter"><i className="fa-brands fa-x-twitter"></i></a>
                  <a href="/twitter"><i className="fa-brands fa-facebook"></i></a>
                  <a href="/twitter"><i className="fa-brands fa-pinterest-p"></i></a>
                  <a href="/twitter"><i className="fa-brands fa-instagram"></i></a>
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
                            <a href="/tentang-kami" style={submenuItemStyle(hoveredSubItem === 'subItem1')}>
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
                        <a href="#t" style={menuItemStyle}>{t('menu.direktorat')}</a>
                        <ul style={hoveredItem === 'direktorat' ? showSubmenuStyle : submenuStyle}>
                          <li
                            onMouseEnter={() => setHoveredSubItem('subItem3')}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <a href="#t" style={submenuItemStyle(hoveredSubItem === 'subItem3')}>
                              {t('menu.subItem3')}
                            </a>
                          </li>
                          <li
                            onMouseEnter={() => setHoveredSubItem('subItem4')}
                            onMouseLeave={() => setHoveredSubItem(null)}
                          >
                            <a href="#t" style={submenuItemStyle(hoveredSubItem === 'subItem4')}>
                              {t('menu.subItem4')}
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a href="#t" style={menuItemStyle}>{t('menu.beritaKegiatan')}</a>
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
            <a href="#tt"><img src="/assets/image/logo-light.png" width="160" height="40" alt="26" /></a>
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
          <form>
            <label htmlFor="search" className="sr-only">search here</label>
            <input type="text" id="search" placeholder="Search Here..." />
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