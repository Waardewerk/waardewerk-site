import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Hero from './components/Hero';
import OnsVerhaal from './components/OnsVerhaal';
import OverOns from './components/OverOns';
import Nieuws from './components/Nieuws';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import LogoCarrousel from './components/LogoCarrousel';
import Seo from './components/Seo';
import SROIMonitorPage from './pages/SROIMonitor';
import NieuwsPage from './pages/Nieuws';
import NieuwsDetailPage from './pages/NieuwsDetail';
import PrivacyPage from './pages/Privacy';
import OverOnsPage from './pages/OverOns';

function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Seo
        title="Waardewerk — Mens op één, technologie als hefboom"
        description="Waardewerk helpt ondernemers in de bouw- en infrasector met Social Return en technologische innovatie. Praktisch, direct toepasbaar."
        path="/"
      />
      <Nav onContact={() => setModalOpen(true)} />
      <main>
        <Hero onContact={() => setModalOpen(true)} />
        <LogoCarrousel />
        <OnsVerhaal />
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
      <Route path="/sroi-monitor" element={<SROIMonitorPage />} />
      <Route path="/nieuws" element={<NieuwsPage />} />
      <Route path="/nieuws/:slug" element={<NieuwsDetailPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/over-ons" element={<OverOnsPage />} />
    </Routes>
  );
}
