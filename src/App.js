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
import LiputanMedia from './component/berita/LiputanMedia';
import InfoTerkini from './component/berita/InfoTerkini';
import Elibrary from './component/Elibrary';
import Pdes from './component/Pdes';
import Agenda from './component/Agenda';
import Kontak from './component/Kontak';





function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>

        <Route exact path="/tentang-kami" element={<TentangKami/>} /> 
        <Route exact path="/struktur-organisasi" element={<StrukturOrganisasi/>} /> 
        <Route exact path="/galeri-foto" element={<GaleriFoto/>} /> 
        <Route exact path="/galeri-video" element={<GaleriVideo/>} /> 


        <Route exact path="/industri-produk-halal" element={<IndustriProdukHalal/>} /> 
        <Route exact path="/jasa-keuangan-syariah" element={<JasakeuanganSyariah/>} /> 
        <Route exact path="/keuangan-sosial-syariah" element={<KeuanganSosialSyariah/>} /> 
        <Route exact path="/bisnis-dan-kewiraushaan-syariah" element={<BisnisDanKewirausahaanSyariah />} /> 
        <Route exact path="/infrastruktur-ekosistem-syariah" element={<InfrastrukturEkosistemSyariah/>} /> 

        <Route exact path="/siaran-pers" element={<SiaranPers/>} /> 
        <Route exact path="/liputan-media" element={<LiputanMedia/>} /> 
        <Route exact path="/info-terkini" element={<InfoTerkini/>} /> 

        <Route exact path="/e-library" element={<Elibrary/>} /> 
        <Route exact path="/kdeks" element={<IndustriProdukHalal/>} /> 
        <Route exact path="/pdes" element={<Pdes/>} /> 
        <Route exact path="/agenda" element={<Agenda/>} /> 
        <Route exact path="/kontak" element={<Kontak/>} /> 
        <Route path="*" element={<Error404/>} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
