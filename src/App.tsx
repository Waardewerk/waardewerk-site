import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import OnsVerhaal from './components/OnsVerhaal';
import SocialeZaak from './components/SocialeZaken';
import TWO from './components/TWO';
import OverOns from './components/OverOns';
import Nieuws from './components/Nieuws';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import LogoCarrousel from './components/LogoCarrousel';
import Seo from './components/Seo';
import DienstenPage from './pages/Diensten';
import SROIMonitorPage from './pages/SROIMonitor';
import NieuwsPage from './pages/Nieuws';
import NieuwsDetailPage from './pages/NieuwsDetail';

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Seo
        title="Waardewerk — De Social Return verplichting is geen last, het is een kans"
        description="Waardewerk helpt ondernemers in de bouw- en infrasector om Social Return slim in te zetten — van beleidsinzicht tot uitvoering."
        path="/"
      />
      <Nav onContact={() => setModalOpen(true)} />
      <main>
        <Hero onContact={() => setModalOpen(true)} />
        <LogoCarrousel />
        <OnsVerhaal />
        <SocialeZaak />
        <TWO />
        <OverOns />
        <Nieuws />
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
      <Route path="/nieuws" element={<NieuwsPage />} />
      <Route path="/nieuws/:slug" element={<NieuwsDetailPage />} />
    </Routes>
  );
}
