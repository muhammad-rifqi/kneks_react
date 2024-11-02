// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import Section1 from '../component/home/Section1';
import Section2 from '../component/home/Section2';
// import Section2backup from '../component/home/Section2backup ';
import Section3 from '../component/home/Section3';
import Section4 from '../component/home/Section4';
import Section5 from '../component/home/Section5';
import News from '../component/home/News';
// import Zona from '../component/home/Zona';
import Section6 from '../component/home/Section6';
import Section7 from '../component/home/Section7';
// import Section8 from '../component/home/Section8';
// import Section9 from '../component/home/Section9';
// import Section10 from '../component/home/Section10';
import Section11 from '../component/home/Section11';
// import Section12 from '../component/home/Section12';
// import Section13 from '../component/home/Section13';
// import Section14 from '../component/home/Section14';


const Home = () => {

  const [isPopupActive, setPopupActive] = useState(true);

  // Handler untuk menutup popup
  const handleClose = () => {
    setPopupActive(false);
  };

  return (
    <div className="page-wrapper">
      <Section1 />
      <Section3 />
      {/* <Section2backup /> */}
      <Section2 />
      {/* <Section14 /> */}
      <News />
      <Section7 />
      <Section5 />
      <Section4 />
      {/* <Section12 /> */}

      <Section6 />
      {/* <Section8 />

      <Section9 />
      <Section10 /> */}

      {/* <Zona /> */}
      <Section11 />

      {/* <Section13 /> */}

      {isPopupActive && (
        <div className={`information-popup ${isPopupActive ? 'active' : ''}`}>
          <div
            className="information-popup-overlay search-toggler-x"
            onClick={handleClose}
          ></div>
          <div className="information-popup-content">
            <div className="p-3 close">
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>

            <img
              className="img-fluid img-thumbnail"
              src="/assets/image/Iklan.svg"
              alt="Iklan"
            />
            <div className="selengkapnya">
              <a href="/agenda/detail" className="btn btn-primary btn-sm">
                Lihat Selengkap
              </a>
            </div>
          </div>
        </div>
      )}
    </div>

  )
}
export default Home;
