// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import React from 'react';

import Section1 from '../component/home/Section1';
// import Section2 from '../component/home/Section2';
import Section3 from '../component/home/Section3';
import Section4 from '../component/home/Section4';
import Section5 from '../component/home/Section5';
import News from '../component/home/News';
import Section6 from '../component/home/Section6';
import Section7 from '../component/home/Section7';
import Section8 from '../component/home/Section8';
import Section9 from '../component/home/Section9';
import Section10 from '../component/home/Section10';
import Section11 from '../component/home/Section11';
import Section12 from '../component/home/Section12';
// import Section13 from '../component/home/Section13';
// import Section14 from '../component/home/Section14';


const Home = () => {

  return (
    <div className="page-wrapper">
      <Section1 />
      {/* <Section2 /> */}
      <Section3 />
      {/* <Section14 /> */}
      <Section5 />
      {/* <Section7 /> */}
      <News />
      {/* <Section4 /> */}
      {/* <Section12 /> */}

      <Section6 />
      <Section8 />

      <Section9 />
      <Section10 />
      <Section11 />

      {/* <Section13 /> */}

      <div className="information-popup active">
        <div className="information-popup-overlay search-toggler"></div>
        <div className="information-popup-content">
          <div className="p-3 close">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

          </div>

          <img className='img-fluid img-thumbnail' src='/assets/image/iklan.svg' alt='iklan' />
          <div className='selengkapnya'>
            <a href="/" className="btn btn-primary">Lihat Selengkap</a>
          </div>

        </div>
      </div>
    </div>

  )
}
export default Home;
