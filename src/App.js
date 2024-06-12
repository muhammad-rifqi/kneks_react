import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Detail from './component/Detail';
import Add from './component/Add';
import Header from './component/Header';
import Footer from './component/Footer';
import Error404 from './component/error404';





function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="*" element={<Error404/>} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
