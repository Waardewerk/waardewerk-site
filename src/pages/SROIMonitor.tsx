import Nav from '../components/Nav';
import { useState } from 'react';
import ContactModal from '../components/ContactModal';
import Seo from '../components/Seo';

export default function SROIMonitorPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Seo
        title="SROI Monitor — Waardewerk"
        description="Live dashboard met SROI-cijfers per Nederlandse gemeente. Zie waar sociale ondernemerskansen liggen in de bouw- en infrasector."
        path="/sroi-monitor"
      />
      <Nav onContact={() => setModalOpen(true)} />
      <iframe
        src="https://sroi-monitor.vercel.app"
        className="flex-1 w-full border-none"
        style={{ border: 'none' }}
        title="SROI Monitor Nederland"
      />
      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
