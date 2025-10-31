// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import React from 'react';

const error404 = () => {

  return (
    <>
      <section className='error404'>
          <h1>404</h1>
          <h4>Halaman Tidak DItemukan</h4>
          <div className='selengkapnya pt-3'>
            <a href="/" className="btn btn-primary">Kembali</a>
          </div>
      </section>
    </> 
  )
}
export default error404;
