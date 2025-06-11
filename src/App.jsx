import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from './Components/Home';
import Announcements from './pages/Announcements';
import Zones from './pages/Zones';
import Guidelines from './pages/Guidelines';
import KalimiZone from './pages/KalimiZone';
import KalimiDomeZone from './pages/KalimiDomeZone';
import SaifeeZone from './pages/SaifeeZone';
import BurhaniZone from './pages/BurhaniZone';
import NajmiZone from './pages/NajmiZone';
import TravelGuide from './pages/TravelGuide';
/* Helo */
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/zones" element={<Zones />} />
        <Route path="/guidelines" element={<Guidelines />} />
        {/* <Route path="/relay" element={<RelayCentres />} /> */}
        <Route path="/zones/kalimi" element={<KalimiZone />} />
        <Route path="/zones/kalimi-dome" element={<KalimiDomeZone />} />
        <Route path="/zones/saifee" element={<SaifeeZone />} />
        <Route path="/zones/burhani" element={<BurhaniZone />} />
        <Route path="/zones/najmi" element={<NajmiZone />} />
        <Route path="/travelguide" element={<TravelGuide />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
