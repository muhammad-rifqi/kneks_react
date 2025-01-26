import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './component/Home';
import Detail from './component/Detail';
import Add from './component/Add';
import Header from './component/Header';
import Footer from './component/Footer';
import Error404 from './component/error404';
import TentangKami from './component/profile/TentangKami';
import TentangEkonomiSyariah from './component/profile/TentangEkonomiSyariah';
import StrukturOrganisasi from './component/profile/StrukturOrganisasi';
import StrukturOrganisasiDetail from './component/profile/StrukturOrganisasiDetail';
import GaleriFoto from './component/profile/GaleriFoto';
import GaleriFotoDetail from './component/profile/GaleriFotoDetail';
import GaleriVideo from './component/profile/GaleriVideo';
import IndustriProdukHalal from './component/direktorat/IndustriProdukHalal';
import JasakeuanganSyariah from './component/direktorat/JasakeuanganSyariah';
import KeuanganSosialSyariah from './component/direktorat/KeuanganSosialSyariah';
import BisnisDanKewirausahaanSyariah from './component/direktorat/BisnisDanKewirausahaanSyariah';
import InfrastrukturEkosistemSyariah from './component/direktorat/InfrastrukturEkosistemSyariah';
import SiaranPers from './component/berita/SiaranPers';
import SiaranPersDetail from './component/berita/SiaranPersDetail';
import LiputanMedia from './component/berita/LiputanMedia';
import LiputanMediaDetail from './component/berita/LiputanMediaDetail';
import InfoTerkini from './component/berita/InfoTerkini';
import InfoTerkiniDetail from './component/berita/InfoTerkiniDetail';
import IsuEkonomi from './component/berita/IsuEkonomi';
import IsuEkonomiDetail from './component/berita/IsuEkonomiDetail';
import Elibrary from './component/Elibrary';
import ElibraryDetail from './component/ElibraryDetail';
import ElibraryDetailx from './component/ElibraryDetailx';
import Agenda from './component/Agenda';
import Kontak from './component/Kontak';
import Kdeks from './component/Kdeks';
import KdeksDetail from './component/KdeksDetail';
import Data from './component/Data';
import DataDetail from './component/DataDetail';
import Opini from './component/Opini';

// import Login from './component/Login';
import Dashboard from './component/Dashboard';
import BeritaTerkaitDetail from './component/berita/BeritaTerkaitDetail';
import { Test } from './component/Test';
import AgendaDetail from './component/AgendaDetails';
import AgendaDetailsFix from './component/AgendaDetailsFix';
import OpiniDetail from './component/OpiniDetail';

import BannerDetail from './component/bannerDetail';

import InfoTerkiniDumiDetail from './component/InfoTerkiniDumiDetail';
import BeritaKegiatan from './component/BeritaKegiatan';
import BeritaKegiatanDetail from './component/BeritaKegiatanDetail';
import SearchHome from './component/search/SearchHome';
import BeritaTerkini from './component/BeritaTerkini';
import BeritaDirektorat from './component/BeritaDirektorat';
import BeritaKdeks from './component/BeritaKdeks';



function AppContent() {
  // const location = useLocation();
  // const isLoginPage = location.pathname === '/login';

  return (
    <div>
      {/* {!isLoginPage && <Header />} */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/tentang-ekonomi-syariah" element={<TentangEkonomiSyariah />} />
        <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
        <Route path="/struktur-organisasi/:slug" element={<StrukturOrganisasiDetail />} />
        <Route path="/galeri-foto" element={<GaleriFoto />} />
        <Route path="/galeri-foto/:id/:slug" element={<GaleriFotoDetail />} />
        <Route path="/galeri-video" element={<GaleriVideo />} />
        <Route path="/industri-produk-halal" element={<IndustriProdukHalal />} />
        <Route path="/jasa-keuangan-syariah" element={<JasakeuanganSyariah />} />
        <Route path="/keuangan-sosial-syariah" element={<KeuanganSosialSyariah />} />
        <Route path="/bisnis-dan-kewirausahaan-syariah" element={<BisnisDanKewirausahaanSyariah />} />
        <Route path="/infrastruktur-ekosistem-syariah" element={<InfrastrukturEkosistemSyariah />} />
        <Route path="/siaran-pers" element={<SiaranPers />} />
        <Route path="/siaran-pers/:id/:slug" element={<SiaranPersDetail />} />
        <Route path="/liputan-media" element={<LiputanMedia />} />
        <Route path="/liputan-media/:id/:slug" element={<LiputanMediaDetail />} />
        <Route path="/info-terkini" element={<InfoTerkini />} />
        <Route path="/info-terkini/:id/:slug" element={<InfoTerkiniDetail />} />
       
        <Route path="/berita-terkait/:id/:slug" element={<BeritaTerkaitDetail />} />
        <Route path="/e-pustaka" element={<Elibrary />} />
        <Route path="/e-pustaka/:slug" element={<ElibraryDetail />} />
        <Route path="/e-pustaka/detail" element={<ElibraryDetailx />} />
        <Route path="/kdeks" element={<Kdeks />} />
        <Route path="/kdeks/:slug/:id" element={<KdeksDetail />} />
        <Route path="/data" element={<Data />} />
        <Route path="/data/:id" element={<DataDetail />} />
        <Route path="/opini" element={<Opini />} />
        <Route path="/opini/:id/:slug" element={<OpiniDetail />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/agenda/:slug" element={<AgendaDetailsFix />} />
        <Route path="/agenda/detail" element={<AgendaDetail />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/banner/detail" element={<BannerDetail />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/isu-ekonomi" element={<IsuEkonomi />} />
        <Route path="/isu-ekonomi/:id/:slug" element={<IsuEkonomiDetail />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<Error404 />} />

        <Route path="/info-terkini/detail" element={<InfoTerkiniDumiDetail />} />
        <Route path="/berita-kegiatan" element={<BeritaKegiatan />} />
        <Route path="/berita-terkini" element={<BeritaTerkini />} />
        <Route path="/berita-terkini/:id/:slug" element={<InfoTerkiniDetail />} />
        <Route path="/berita-direktorat" element={<BeritaDirektorat />} />
        <Route path="/berita-kdeks" element={<BeritaKdeks />} />
        <Route path="/berita-kegiatan/:id/:slug" element={<BeritaKegiatanDetail />} />
        <Route path="/search" element={<SearchHome />} />
      </Routes>
      <Footer />
      {/* {!isLoginPage && <Footer />} */}
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