import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import Seo from '../components/Seo';
import { GEMEENTEN, STATUS_COLOR, formatBedrag, type GemeenteProfile } from '../data/gemeenten';

function GemeenteDetail({ g, onClose }: { g: GemeenteProfile; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 overflow-y-auto"
      style={{ background: 'rgba(0,0,0,0.5)' }} onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mb-8" onClick={e => e.stopPropagation()}>
        <div className="flex items-start justify-between px-6 pt-6 pb-4 border-b border-lijn">
          <div>
            <p className="eyebrow mb-1">Gemeente profiel</p>
            <h2 className="text-2xl font-medium text-blauw">{g.naam}</h2>
            <p className="text-sm text-grijs">{g.provincie}</p>
          </div>
          <button onClick={onClose} className="text-grijs hover:text-blauw p-1 mt-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-5 space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="bg-bg-alt rounded-xl p-3">
              <p className="text-xs text-grijs mb-1">Social Return</p>
              <p className="text-lg font-semibold text-blauw">{g.sroiPct}</p>
            </div>
            <div className="bg-bg-alt rounded-xl p-3">
              <p className="text-xs text-grijs mb-1">Status</p>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${STATUS_COLOR[g.status]}`}>{g.status}</span>
            </div>
            <div className="bg-bg-alt rounded-xl p-3">
              <p className="text-xs text-grijs mb-1">Drempelwaarde</p>
              <p className="text-sm font-medium text-blauw">{formatBedrag(g.drempel)}</p>
            </div>
            <div className="bg-bg-alt rounded-xl p-3">
              <p className="text-xs text-grijs mb-1">Type opdrachten</p>
              <p className="text-sm font-medium text-blauw">{g.typeOpdrachten}</p>
            </div>
            <div className="bg-bg-alt rounded-xl p-3">
              <p className="text-xs text-grijs mb-1">Aanbestedingsvolume</p>
              <p className="text-sm font-medium text-blauw">{formatBedrag(g.aanbestedingsvol)}</p>
            </div>
            {g.methode && (
              <div className="bg-bg-alt rounded-xl p-3">
                <p className="text-xs text-grijs mb-1">Methode</p>
                <p className="text-sm font-medium text-blauw">{g.methode}</p>
              </div>
            )}
          </div>
          {g.bouwblokken && (
            <>
              <div>
                <h3 className="text-sm font-semibold text-blauw mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-magenta rounded-full inline-block" />
                  Waarden banen en leerwerkplekken
                  <span className="text-xs font-normal text-grijs">(jaarcontract 36 uur/week)</span>
                </h3>
                <div className="divide-y divide-lijn rounded-xl border border-lijn overflow-hidden">
                  {g.bouwblokken.waarden.map((item, i) => (
                    <div key={i} className="flex justify-between items-center px-4 py-2.5 text-sm hover:bg-bg-alt transition-colors">
                      <span className="text-grijs">{item.label}</span>
                      <span className="font-semibold text-blauw whitespace-nowrap ml-4">{item.waarde}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-blauw mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-magenta rounded-full inline-block" />
                  Bonussen
                </h3>
                <div className="divide-y divide-lijn rounded-xl border border-lijn overflow-hidden">
                  {g.bouwblokken.bonussen.map((item, i) => (
                    <div key={i} className="flex justify-between items-center px-4 py-2.5 text-sm hover:bg-bg-alt transition-colors">
                      <span className="text-grijs">{item.label}</span>
                      <span className="font-semibold text-blauw whitespace-nowrap ml-4">{item.waarde}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-blauw mb-3 flex items-center gap-2">
                  <span className="w-1 h-4 bg-magenta rounded-full inline-block" />
                  Andere manieren social return
                </h3>
                <div className="divide-y divide-lijn rounded-xl border border-lijn overflow-hidden">
                  {g.bouwblokken.andereMogelijkheden.map((item, i) => (
                    <div key={i} className="flex justify-between items-center px-4 py-2.5 text-sm hover:bg-bg-alt transition-colors">
                      <span className="text-grijs">{item.label}</span>
                      <span className="font-medium text-blauw whitespace-nowrap ml-4 text-right">{item.waarde}</span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
          {g.contactEmail && (
            <div className="bg-magenta-licht rounded-xl p-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-blauw mb-0.5">Contactpersoon Social Return</p>
                <a href={`mailto:${g.contactEmail}`} className="text-sm font-medium text-magenta hover:underline">{g.contactEmail}</a>
              </div>
              <a href={`mailto:${g.contactEmail}`} className="flex-shrink-0 bg-magenta hover:bg-[#a8005a] text-white text-xs font-medium px-4 py-2 rounded-full transition-colors">
                Mail gemeente
              </a>
            </div>
          )}
          {!g.bouwblokken && (
            <p className="text-sm text-grijs italic">Gedetailleerde beleidsinfo voor deze gemeente volgt binnenkort.</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default function SROIMonitorPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [zoek, setZoek] = useState('');
  const [geselecteerd, setGeselecteerd] = useState<GemeenteProfile | null>(null);

  const gefilterd = GEMEENTEN
    .filter(g => g.naam.toLowerCase().includes(zoek.toLowerCase()) || g.provincie.toLowerCase().includes(zoek.toLowerCase()))
    .sort((a, b) => b.aanbestedingsvol - a.aanbestedingsvol);

  return (
    <>
      <Seo
        title="SROI Monitor , Waardewerk"
        description="Bekijk per gemeente de Social Return regels, drempelwaarden en contactgegevens voor de bouw- en infrasector."
        path="/sroi-monitor"
      />
      <Nav onContact={() => setModalOpen(true)} />
      <main className="min-h-screen bg-bg-alt">
        <div className="bg-blauw py-14 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="eyebrow mb-3" style={{ color: 'rgba(255,255,255,0.6)' }}>Social Return</p>
            <h1 className="text-3xl font-medium text-white mb-2">SROI Monitor Nederland</h1>
            <p className="text-white/60 text-sm mb-8">Bekijk per gemeente de Social Return regels, drempelwaarden en contactgegevens.</p>
            <input
              type="text"
              placeholder="Zoek op gemeente of provincie..."
              value={zoek}
              onChange={e => setZoek(e.target.value)}
              className="w-full max-w-md px-4 py-3 rounded-xl text-sm text-blauw focus:outline-none focus:ring-2 focus:ring-magenta/40"
            />
          </div>
        </div>
        <div className="max-w-5xl mx-auto px-6 py-10">
          <p className="text-xs text-grijs mb-4">{gefilterd.length} gemeente{gefilterd.length !== 1 ? 'n' : ''} gevonden</p>
          <div className="bg-white rounded-2xl border border-lijn overflow-hidden">
            <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr_1fr_auto] gap-4 px-5 py-3 bg-bg-alt text-xs font-semibold text-grijs border-b border-lijn">
              <span>Gemeente</span><span>Social Return</span><span>Status</span><span>Drempel</span><span>Volume</span><span />
            </div>
            {gefilterd.map((g, i) => (
              <div key={g.code}
                className={`grid md:grid-cols-[2fr_1fr_1fr_1fr_1fr_auto] gap-4 items-center px-5 py-4 cursor-pointer hover:bg-bg-alt transition-colors ${i > 0 ? 'border-t border-lijn' : ''}`}
                onClick={() => setGeselecteerd(g)}>
                <div>
                  <span className="font-medium text-blauw text-sm">{g.naam}</span>
                  <span className="text-xs text-grijs ml-2">{g.provincie}</span>
                  {g.methode && <span className="ml-2 text-xs bg-magenta-licht text-magenta px-1.5 py-0.5 rounded-full font-medium">{g.methode}</span>}
                </div>
                <span className="text-sm font-semibold text-blauw">{g.sroiPct}</span>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full w-fit ${STATUS_COLOR[g.status]}`}>{g.status}</span>
                <span className="text-sm text-grijs">{formatBedrag(g.drempel)}</span>
                <span className="text-sm text-grijs">{formatBedrag(g.aanbestedingsvol)}</span>
                <button className="text-magenta text-xs font-medium hover:underline whitespace-nowrap">Bekijk details</button>
              </div>
            ))}
            {gefilterd.length === 0 && (
              <div className="px-5 py-10 text-center text-grijs text-sm">Geen gemeenten gevonden voor &quot;{zoek}&quot;</div>
            )}
          </div>
          <p className="text-xs text-grijs mt-4">Gegevens zijn indicatief. Controleer altijd het actuele beleid via de gemeente. Meer gemeenten volgen.</p>
        </div>
      </main>
      <Footer />
      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
      {geselecteerd && <GemeenteDetail g={geselecteerd} onClose={() => setGeselecteerd(null)} />}
    </>
  );
}
