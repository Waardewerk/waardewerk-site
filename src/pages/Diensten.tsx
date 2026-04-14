import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';

type FormState = 'idle' | 'sending' | 'sent' | 'error';

const stappen = [
  { n: '01', titel: 'Intake op maat', sub: 'We brengen de situatie en wensen van werkgever én kandidaat in kaart.' },
  { n: '02', titel: 'Skillsgericht matchen', sub: 'We zoeken op competenties, niet alleen op papier.' },
  { n: '03', titel: 'Leermeester op de vloer', sub: 'Een ervaren collega begeleidt de nieuwe medewerker in de praktijk.' },
  { n: '04', titel: 'Subsidies geregeld', sub: 'We ontzorgen volledig: van loonkostensubsidie tot SROI-registratie.' },
  { n: '05', titel: 'Impact zichtbaar maken', sub: 'Rapportage voor opdrachtgever én gemeente, zodat resultaat meetbaar is.' },
];

const bulletpoints = [
  'Hoe je als werkgever eigenaarschap neemt over SROI',
  'Waarom regie bij de werkgever leidt tot duurzamere plaatsingen',
  'Concrete aanpak voor de bouw- en infrasector',
  'Stappenplan van intake tot impact-rapportage',
  'Rekenmodel: wat levert een goede SROI-aanpak op?',
];

export default function DienstenPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'sociaal' | 'tech'>('sociaal');
  const [wpStatus, setWpStatus] = useState<FormState>('idle');

  async function handleWhitepaperSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setWpStatus('sending');
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch('https://formspree.io/f/xwpodqvj', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      });
      setWpStatus(res.ok ? 'sent' : 'error');
    } catch {
      setWpStatus('error');
    }
  }

  return (
    <>
      <Nav onContact={() => setModalOpen(true)} />

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section className="bg-blauw py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-4" style={{ color: '#F9A8D4' }}>Diensten</p>
            <h1 className="text-4xl md:text-5xl font-medium text-white leading-tight mb-6">
              De mensen zijn er.<br />De regie ontbreekt nog.
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
              De bouwsector kampt met structureel personeelstekort. Tegelijk staan tienduizenden mensen aan de kant. Waardewerk brengt beide werelden samen — met structuur, begeleiding en meetbare impact.
            </p>
          </div>
        </section>

        {/* ── Tweedeling ───────────────────────────────────────────────────── */}
        <section className="py-12 px-6 bg-white border-b border-lijn">
          <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4">
            <button
              onClick={() => setActiveTab('sociaal')}
              className={`rounded-2xl p-6 text-left transition-all border-2 ${activeTab === 'sociaal' ? 'border-magenta bg-magenta-licht' : 'border-lijn bg-white hover:border-magenta/30'}`}
            >
              <div className="w-8 h-8 rounded-xl bg-magenta flex items-center justify-center mb-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="font-medium text-blauw">Sociale ontwikkeling</div>
              <div className="text-xs text-grijs mt-1">Mensen aan het werk via SROI</div>
            </button>

            <button
              onClick={() => setActiveTab('tech')}
              className={`rounded-2xl p-6 text-left transition-all border-2 relative ${activeTab === 'tech' ? 'border-[#185FA5] bg-blue-50' : 'border-lijn bg-white hover:border-[#185FA5]/30'}`}
            >
              <span className="absolute top-3 right-3 bg-[#185FA5]/10 text-[#185FA5] text-[10px] font-semibold px-2 py-0.5 rounded-full">
                Volgt binnenkort
              </span>
              <div className="w-8 h-8 rounded-xl bg-[#185FA5] flex items-center justify-center mb-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                </svg>
              </div>
              <div className="font-medium text-blauw">Technologische ontwikkeling</div>
              <div className="text-xs text-grijs mt-1">Slimme tools voor werkgevers</div>
            </button>
          </div>
        </section>

        {/* ── Sociale ontwikkeling ─────────────────────────────────────────── */}
        {activeTab === 'sociaal' && (
          <>
            {/* Pagina-links */}
            <section className="py-10 px-6 bg-white border-b border-lijn">
              <div className="max-w-3xl mx-auto">
                <p className="eyebrow mb-4">Sociale zaken</p>
                <div className="flex flex-col gap-3">
                  <a
                    href="/two_page.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white border border-lijn hover:border-magenta rounded-2xl px-5 py-4 transition-colors group"
                  >
                    <div>
                      <div className="font-medium text-blauw group-hover:text-magenta transition-colors">TWO — De Tewerkstellingsorganisatie</div>
                      <div className="text-xs text-grijs mt-0.5">Regionale uitvoeringsorganisatie voor instroom, begeleiding en subsidiëring</div>
                    </div>
                    <span className="text-grijs group-hover:text-magenta transition-colors text-lg">↗</span>
                  </a>
                  <a
                    href="/sroi_page.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white border border-lijn hover:border-magenta rounded-2xl px-5 py-4 transition-colors group"
                  >
                    <div>
                      <div className="font-medium text-blauw group-hover:text-magenta transition-colors">SROI — Social Return on Investment</div>
                      <div className="text-xs text-grijs mt-0.5">Inzicht in SROI-beleid en -uitvoering per gemeente</div>
                    </div>
                    <span className="text-grijs group-hover:text-magenta transition-colors text-lg">↗</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Win-cards */}
            <section className="py-16 px-6 bg-white">
              <div className="max-w-3xl mx-auto">
                <p className="eyebrow mb-3">Resultaat</p>
                <h2 className="text-2xl font-medium text-blauw mb-8">Wat levert het op?</h2>
                <div className="grid md:grid-cols-3 gap-5">
                  {[
                    { n: '20–40%', l: 'minder uitval', sub: 'Door begeleiding op de werkvloer vanaf dag één' },
                    { n: '2–3 jaar', l: 'langer inzetbaar', sub: 'Dankzij skillsgericht matchen en ontwikkeling' },
                    { n: '3×', l: 'meer SROI-rendement', sub: 'Ten opzichte van traditioneel afkopen' },
                  ].map(w => (
                    <div key={w.l} className="bg-magenta-licht border border-magenta/20 rounded-2xl p-6">
                      <div className="text-3xl font-bold text-magenta mb-1">{w.n}</div>
                      <div className="font-medium text-blauw text-sm mb-2">{w.l}</div>
                      <div className="text-xs text-grijs leading-relaxed">{w.sub}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Vijf stappen */}
            <section className="py-16 px-6 bg-bg-alt">
              <div className="max-w-3xl mx-auto">
                <p className="eyebrow mb-3">Aanpak</p>
                <h2 className="text-2xl font-medium text-blauw mb-8">Hoe werkt het?</h2>
                <div className="flex flex-col gap-4">
                  {stappen.map((s) => (
                    <div key={s.n} className="bg-white border border-lijn rounded-2xl p-5 flex gap-5 items-start">
                      <div className="w-10 h-10 rounded-xl bg-magenta flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                        {s.n}
                      </div>
                      <div>
                        <div className="font-medium text-blauw mb-1">{s.titel}</div>
                        <div className="text-sm text-grijs leading-relaxed">{s.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Doelgroep-kaarten */}
            <section className="py-16 px-6 bg-white">
              <div className="max-w-3xl mx-auto">
                <p className="eyebrow mb-3">Voor wie</p>
                <h2 className="text-2xl font-medium text-blauw mb-8">Twee kanten, één oplossing</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border-2 border-magenta rounded-2xl p-6">
                    <div className="text-magenta font-semibold text-sm mb-1 uppercase tracking-wide">Aannemer</div>
                    <div className="text-xl font-medium text-blauw mb-3">Continuïteit</div>
                    <ul className="space-y-2 text-sm text-grijs">
                      {['Sneller toegang tot gemotiveerde medewerkers','SROI-verplichting structureel ingevuld','Minder administratieve last','Subsidies volledig benut','Aantoonbare maatschappelijke bijdrage'].map(i => (
                        <li key={i} className="flex gap-2">
                          <span className="text-magenta mt-0.5 flex-shrink-0">✓</span>{i}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-2 border-[#185FA5] rounded-2xl p-6">
                    <div className="text-[#185FA5] font-semibold text-sm mb-1 uppercase tracking-wide">Gemeente</div>
                    <div className="text-xl font-medium text-blauw mb-3">Aantoonbare impact</div>
                    <ul className="space-y-2 text-sm text-grijs">
                      {['Duurzame plaatsingen in plaats van afkoop','Meetbare uitstroom uit bijstand','SROI-beleid dat écht werkt','Lokale partners die samenwerken','Rapportage op maat voor verantwoording'].map(i => (
                        <li key={i} className="flex gap-2">
                          <span className="text-[#185FA5] mt-0.5 flex-shrink-0">✓</span>{i}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Quote */}
            <section className="py-12 px-6 bg-bg-alt">
              <div className="max-w-2xl mx-auto text-center">
                <blockquote className="text-xl font-medium text-blauw leading-relaxed mb-4">
                  "Iedereen doet wat, maar niemand stemt af."
                </blockquote>
                <cite className="text-sm text-grijs not-italic">— Directeur vastgoedonderhoud, grote woningcorporatie</cite>
              </div>
            </section>

            {/* Whitepaper */}
            <section className="py-20 px-6 bg-blauw">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
                {/* Links */}
                <div>
                  <p className="eyebrow mb-3" style={{ color: '#F9A8D4' }}>Whitepaper</p>
                  <h2 className="text-2xl font-medium text-white leading-snug mb-4">
                    Regie & Eigenaarschap<br />bij de Werkgever
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    Ontvang ons gratis whitepaper en ontdek hoe je als werkgever de regie neemt over SROI — en er een duurzame strategie van maakt.
                  </p>
                  <ul className="space-y-3">
                    {bulletpoints.map(b => (
                      <li key={b} className="flex gap-3 text-sm text-white/80">
                        <span className="w-5 h-5 rounded-full bg-magenta flex-shrink-0 flex items-center justify-center mt-0.5">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Formulier */}
                <div className="bg-white rounded-2xl p-6">
                  {wpStatus === 'sent' ? (
                    <div className="flex flex-col items-center text-center gap-4 py-6">
                      <div className="w-12 h-12 rounded-full bg-magenta-licht flex items-center justify-center">
                        <svg className="w-6 h-6 text-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-blauw mb-1">Aanvraag ontvangen!</p>
                        <p className="text-sm text-grijs mb-4">We sturen je het whitepaper zo snel mogelijk toe.</p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href="/whitepaper.pdf"
                          download
                          className="inline-flex items-center gap-2 bg-magenta hover:bg-[#a8005a] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download whitepaper
                        </a>
                        <a
                          href="/two_infographic.pdf"
                          download
                          className="inline-flex items-center gap-2 bg-magenta hover:bg-[#a8005a] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          Download infographic
                        </a>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleWhitepaperSubmit} className="flex flex-col gap-3">
                      <h3 className="font-medium text-blauw mb-1">Ontvang het whitepaper gratis</h3>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-blauw mb-1">Voornaam</label>
                          <input name="voornaam" required type="text" className="w-full px-3 py-2 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-blauw mb-1">Achternaam</label>
                          <input name="achternaam" required type="text" className="w-full px-3 py-2 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-blauw mb-1">Zakelijk e-mailadres</label>
                        <input name="email" required type="email" className="w-full px-3 py-2 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-blauw mb-1">Bedrijfsnaam</label>
                        <input name="bedrijf" required type="text" className="w-full px-3 py-2 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-blauw mb-1">Functie</label>
                        <select name="functie" required className="w-full px-3 py-2 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30 bg-white">
                          <option value="">Selecteer...</option>
                          <option>Directeur / eigenaar</option>
                          <option>Manager / teamleider</option>
                          <option>HR / P&O</option>
                          <option>Inkoop / aanbesteding</option>
                          <option>Gemeente / overheid</option>
                          <option>Anders</option>
                        </select>
                      </div>
                      <label className="flex items-start gap-2 text-xs text-grijs cursor-pointer">
                        <input name="akkoord" required type="checkbox" className="mt-0.5 accent-magenta" />
                        <span>Ik ga akkoord met de verwerking van mijn gegevens om het whitepaper toe te sturen.</span>
                      </label>
                      {wpStatus === 'error' && <p className="text-red-500 text-xs">Er ging iets mis. Probeer opnieuw.</p>}
                      <button
                        type="submit"
                        disabled={wpStatus === 'sending'}
                        className="w-full bg-magenta hover:bg-[#a8005a] disabled:opacity-60 text-white font-medium py-3 rounded-full transition-colors text-sm mt-1"
                      >
                        {wpStatus === 'sending' ? 'Versturen…' : 'Whitepaper ontvangen →'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </section>
          </>
        )}

        {/* ── Technologische ontwikkeling placeholder ──────────────────────── */}
        {activeTab === 'tech' && (
          <section className="py-24 px-6 bg-blue-50">
            <div className="max-w-xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-[#185FA5]/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#185FA5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-2xl font-medium text-blauw mb-3">Technologische ontwikkeling</h2>
              <p className="text-grijs leading-relaxed mb-6">
                We werken aan slimme tools voor werkgevers die technologie willen inzetten om hun sociale impact te vergroten. Van matching-algoritmen tot rapportage-dashboards.
              </p>
              <span className="inline-block bg-[#185FA5]/10 text-[#185FA5] text-sm font-semibold px-4 py-2 rounded-full">
                Volgt binnenkort
              </span>
            </div>
          </section>
        )}

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-medium text-blauw mb-4">Klaar om de stap te zetten?</h2>
            <p className="text-grijs leading-relaxed mb-8">
              Laat ons een gratis SROI-scan maken voor jouw organisatie. We brengen in kaart wat er mogelijk is — en wat het oplevert.
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-magenta hover:bg-[#a8005a] text-white font-medium px-8 py-4 rounded-full transition-colors"
            >
              Gratis SROI-scan aanvragen
            </button>
          </div>
        </section>
      </main>

      <Footer />
      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
