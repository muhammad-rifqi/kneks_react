import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Detail from './component/Detail';
import Add from './component/Add';
import Header from './component/Header';
import Footer from './component/Footer';
import Error404 from './component/error404';
import TentangKami from './component/profile/TentangKami';
import StrukturOrganisasi from './component/profile/StrukturOrganisasi';
import GaleriFoto from './component/profile/GaleriFoto';
import GaleriVideo from './component/profile/GaleriVideo';
import IndustriProdukHalal from './component/direktorat/IndustriProdukHalal';
import JasakeuanganSyariah from './component/direktorat/JasakeuanganSyariah';
import KeuanganSosialSyariah from './component/direktorat/KeuanganSosialSyariah';
import BisnisDanKewirausahaanSyariah from './component/direktorat/BisnisDanKewirausahaanSyariah';
import InfrastrukturEkosistemSyariah from './component/direktorat/InfrastrukturEkosistemSyariah';
import SiaranPers from './component/berita/SiaranPers';
import SiaranPersDetail from './component/berita/SiaranPersDetail';
import LiputanMedia from './component/berita/LiputanMedia';
import InfoTerkini from './component/berita/InfoTerkini';
import Elibrary from './component/Elibrary';
import Pdes from './component/Pdes';
import Agenda from './component/Agenda';
import Kontak from './component/Kontak';
import Data from './component/Data';
import Opini from './component/Opini';

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>

        <Route path="/tentang-kami" element={<TentangKami/>}></Route> 
        <Route path="/struktur-organisasi" element={<StrukturOrganisasi/>}></Route> 
        <Route path="/galeri-foto" element={<GaleriFoto/>}></Route> 
        <Route path="/galeri-video" element={<GaleriVideo/>}></Route> 


        <Route path="/industri-produk-halal" element={<IndustriProdukHalal/>}></Route> 
        <Route path="/jasa-keuangan-syariah" element={<JasakeuanganSyariah/>}></Route> 
        <Route path="/keuangan-sosial-syariah" element={<KeuanganSosialSyariah/>}></Route> 
        <Route path="/bisnis-dan-kewiraushaan-syariah" element={<BisnisDanKewirausahaanSyariah />}></Route> 
        <Route path="/infrastruktur-ekosistem-syariah" element={<InfrastrukturEkosistemSyariah/>}></Route> 

        <Route path="/siaran-pers" element={<SiaranPers/>}></Route> 
        <Route path="/siaran-pers/:slug" element={<SiaranPersDetail />} />
        <Route path="/liputan-media" element={<LiputanMedia/>}></Route> 
        <Route path="/info-terkini" element={<InfoTerkini/>}></Route> 

        <Route path="/e-library" element={<Elibrary/>}></Route> 
        <Route path="/kdeks" element={<IndustriProdukHalal/>}></Route> 
        <Route path="/data" element={<Data/>}></Route> 
        <Route path="/opini" element={<Opini/>}></Route> 
        <Route path="/pdes" element={<Pdes/>}></Route> 
        <Route path="/agenda" element={<Agenda/>}></Route> 
        <Route path="/kontak" element={<Kontak/>}></Route> 
        <Route path="*" element={<Error404/>}></Route> 
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
