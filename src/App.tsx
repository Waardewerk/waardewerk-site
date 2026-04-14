import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import OnsVerhaal from './components/OnsVerhaal';
import SocialeZaak from './components/SocialeZaken';
import TWO from './components/TWO';
import OverOns from './components/OverOns';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import LogoCarrousel from './components/LogoCarrousel';
import DienstenPage from './pages/Diensten';
import SROIMonitorPage from './pages/SROIMonitor';

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Nav onContact={() => setModalOpen(true)} />
      <main>
        <Hero onContact={() => setModalOpen(true)} />
        <LogoCarrousel />
        <OnsVerhaal />
        <SocialeZaak />
        <TWO />
        <OverOns />
        <Contact />
      </main>
      <Footer />
      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/diensten" element={<DienstenPage />} />
      <Route path="/sroi-monitor" element={<SROIMonitorPage />} />
    </Routes>
  );
}
