import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import Agenda from './component/Agenda';
import Kontak from './component/Kontak';
import Data from './component/Data';
import Opini from './component/Opini';

import Login from './component/Login';

function AppContent() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div>
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
        <Route path="/galeri-foto" element={<GaleriFoto />} />
        <Route path="/galeri-video" element={<GaleriVideo />} />
        <Route path="/industri-produk-halal" element={<IndustriProdukHalal />} />
        <Route path="/jasa-keuangan-syariah" element={<JasakeuanganSyariah />} />
        <Route path="/keuangan-sosial-syariah" element={<KeuanganSosialSyariah />} />
        <Route path="/bisnis-dan-kewiraushaan-syariah" element={<BisnisDanKewirausahaanSyariah />} />
        <Route path="/infrastruktur-ekosistem-syariah" element={<InfrastrukturEkosistemSyariah />} />
        <Route path="/siaran-pers" element={<SiaranPers />} />
        <Route path="/siaran-pers/:slug" element={<SiaranPersDetail />} />
        <Route path="/liputan-media" element={<LiputanMedia />} />
        <Route path="/liputan-media/:slug" element={<SiaranPersDetail />} />
        <Route path="/info-terkini" element={<InfoTerkini />} />
        <Route path="/info-terkini/:slug" element={<SiaranPersDetail />} />
        <Route path="/e-pustaka" element={<Elibrary />} />
        <Route path="/kdeks" element={<IndustriProdukHalal />} />
        <Route path="/data" element={<Data />} />
        <Route path="/opini-ekonomi-syariah" element={<Opini />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;