import { useState } from 'react';
import Nav from '../components/Nav';
import ContactModal from '../components/ContactModal';
import Seo from '../components/Seo';

export default function SROIMonitorPage() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Seo
        title="SROI Monitor — Waardewerk"
        description="Live dashboard met SROI-cijfers per Nederlandse gemeente."
        path="/sroi-monitor"
      />
      <Nav onContact={() => setModalOpen(true)} />
      <iframe
        src="https://sroi-monitor.vercel.app"
        className="flex-1 w-full"
        style={{ border: 'none' }}
        title="SROI Monitor Nederland"
      />
      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </div>
  );
}
