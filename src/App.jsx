import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/global/Navbar/Navbar';
import Home from './pages/Home';
import Lotto from './pages/LottoPage';
import EuroJackpot from './pages/EuroJackpot';
import MiniLotto from './pages/MiniLotto';
import Footer from './components/global/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lotto" element={<Lotto />} />
        <Route path="/eurojackpot" element={<EuroJackpot />} />
        <Route path="/minilotto" element={<MiniLotto />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
