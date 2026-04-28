import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import Seo from '../components/Seo';
import OnsVerhaal from '../components/OnsVerhaal';
import OverOns from '../components/OverOns';

export default function OverOnsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <Seo
        title="Over ons — Waardewerk"
        description="Leer Waardewerk kennen. Wij ondersteunen ondernemers met technologische en sociale innovatie, en helpen bij Social Return implementatie."
        path="/over-ons"
      />
      <Nav onContact={() => setModalOpen(true)} />
      <main className="pt-24">
        {/* Label */}
        <div className="px-6 max-w-5xl mx-auto">
          <p className="eyebrow">Over ons</p>
        </div>

        {/* Blok 1: Waardewerk ondersteunt ondernemers */}
        <OnsVerhaal />

        {/* Blok 2: Bio Ruud Blom */}
        <OverOns />
      </main>
      <Footer />
      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
