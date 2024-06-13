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
        <Route exact path="/bisnis-dan-kewiraushaan-syariah" element={<IndustriProdukHalal/>} /> 
        <Route exact path="/infrastruktur-ekosistem-syariah" element={<IndustriProdukHalal/>} /> 

        <Route exact path="/siaran-pers" element={<IndustriProdukHalal/>} /> 
        <Route exact path="/liputan-media" element={<IndustriProdukHalal/>} /> 
        <Route exact path="/info-terkini" element={<IndustriProdukHalal/>} /> 

        <Route exact path="/e-library" element={<IndustriProdukHalal/>} /> 
        <Route exact path="/kdeks" element={<IndustriProdukHalal/>} /> 
        <Route exact path="/pdes" element={<IndustriProdukHalal/>} /> 
        <Route exact path="/agenda" element={<IndustriProdukHalal/>} /> 
        <Route exact path="/kontak" element={<IndustriProdukHalal/>} /> 
        <Route path="*" element={<Error404/>} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
