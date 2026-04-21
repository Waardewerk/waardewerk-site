import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import Seo from '../components/Seo';

type FormState = 'idle' | 'sending' | 'sent' | 'error';
type DownloadChoice = 'whitepaper' | 'infographic';

const DOWNLOADS: Record<DownloadChoice, { label: string; file: string; desc: string }> = {
  whitepaper: {
    label: 'Whitepaper',
    file: '/Whitepaper.pdf',
    desc: 'Ontvang ons gratis whitepaper en ontdek hoe je als werkgever de regie neemt over Social Return — en er een duurzame strategie van maakt.',
  },
  infographic: {
    label: 'Infographic',
    file: '/two_infographic.pdf',
    desc: 'Bekijk onze infographic over de TWO en zie in één oogopslag hoe de tewerkstellingsorganisatie werkt.',
  },
};

const bulletpoints = [
  'Hoe je als werkgever eigenaarschap neemt over Social Return',
  'Waarom regie bij de werkgever leidt tot duurzamere plaatsingen',
  'Concrete aanpak voor de bouw- en infrasector',
  'Stappenplan van intake tot impact-rapportage',
  'Rekenmodel: wat levert een goede SROI-aanpak op?',
];

export default function DienstenPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'sociaal' | 'tech'>('sociaal');
  const [wpStatus, setWpStatus] = useState<FormState>('idle');
  const [downloadChoice, setDownloadChoice] = useState<DownloadChoice>('whitepaper');

  function handleChoiceChange(c: DownloadChoice) {
    setDownloadChoice(c);
    setWpStatus('idle');
  }

  async function handleWhitepaperSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setWpStatus('sending');
    const data = new FormData(e.currentTarget);
    data.append('download', DOWNLOADS[downloadChoice].label);
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
      <Seo
        title="Diensten — Waardewerk | Social Return en digitale innovatie"
        description="Van SROI-strategie en whitepapers tot praktische ondersteuning voor werkgevers in de bouw- en infrasector. Ontdek wat Waardewerk kan betekenen."
        path="/diensten"
      />
      <Nav onContact={() => setModalOpen(true)} />

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section>
          <div className="py-24 px-6" style={{ backgroundImage: "url('/linkedin-banner.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
            <div style={{ background: 'rgba(26, 46, 69, 0.55)', position: 'absolute', inset: 0 }} />
            <div className="max-w-3xl mx-auto text-center" style={{ position: 'relative' }}>
              <p className="eyebrow mb-4" style={{ color: '#F9A8D4' }}>Diensten</p>
              <h1 className="text-4xl md:text-5xl font-medium text-white leading-tight mb-6">
                De mensen zijn er.<br />De regie ontbreekt nog.
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
                De bouwsector kampt met structureel personeelstekort. Tegelijk staan tienduizenden mensen aan de kant. Waardewerk brengt beide werelden samen — met structuur, begeleiding en meetbare impact.
              </p>
            </div>
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
              <div className="font-medium text-blauw">Sociale innovatie</div>
              <div className="text-xs text-grijs mt-1">Mensen aan het werk via Social Return</div>
            </button>

            <button
              onClick={() => setActiveTab('tech')}
              className={`rounded-2xl p-6 text-left transition-all border-2 ${activeTab === 'tech' ? 'border-[#185FA5] bg-blue-50' : 'border-lijn bg-white hover:border-[#185FA5]/30'}`}
            >
              <div className="w-8 h-8 rounded-xl bg-[#185FA5] flex items-center justify-center mb-3">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-2" />
                </svg>
              </div>
              <div className="font-medium text-blauw">Technologische innovatie</div>
              <div className="text-xs text-grijs mt-1">Robotica & AI voor werkgevers</div>
            </button>
          </div>
        </section>

        {/* ── Sociale innovatie ─────────────────────────────────────────── */}
        {activeTab === 'sociaal' && (
          <>
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

            {/* Aanpak */}
            <section className="py-16 px-6 bg-white border-t border-lijn">
              <div className="max-w-3xl mx-auto">
                <p className="eyebrow mb-3">Aanpak</p>
                <h2 className="text-2xl font-medium text-blauw mb-3">Een TWO opzetten in vier stappen</h2>
                <p style={{ fontSize: 15, color: '#4a5568', lineHeight: 1.7, maxWidth: 620, marginBottom: '2rem' }}>
                  Waardewerk begeleidt jouw organisatie van eerste oriëntatie tot werkende tewerkstellingsorganisatie. We werken stapsgewijs, met jou als beslisser op elk moment.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    {
                      nr: '1', kleur: '#C4006A', titel: 'Richten', sub: 'Intake, analyse en onderbouwd besluit',
                      bullets: [
                        'We brengen jouw vraagstuk in kaart en analyseren de markt en kansen',
                        'We adviseren strategisch over de inzet van een TWO als oplossingsrichting',
                        'We maken een grove businesscase zodat jij een onderbouwd besluit kunt nemen',
                      ],
                    },
                    {
                      nr: '2', kleur: '#1a2e45', titel: 'Inrichten', sub: 'Ontwerp en businessplan',
                      bullets: [
                        'Businessplan opstellen met waardepropositie, kostenstructuur en inkomstenstromen',
                        'Governance, rechtsvorm, samenwerkingspartners en funding concretiseren',
                        "KPI's en dashboard inrichten zodat impact meetbaar wordt",
                      ],
                    },
                    {
                      nr: '3', kleur: '#C4006A', titel: 'Verrichten', sub: 'Kwartiermaken en implementatie',
                      bullets: [
                        'We maken kwartier: de eerste stappen worden gezet met ons aan je zijde',
                        'Stapsgewijze implementatie: voordoen → samen doen → jij doet het zelf',
                      ],
                    },
                    {
                      nr: '4', kleur: '#1a2e45', titel: 'Monitoren', sub: 'Borging en doorontwikkeling',
                      bullets: [
                        'Vinger aan de pols: mentoring en borging van de dienstverlening',
                        'Meten, rapporteren en het ontwerp waar nodig aanpassen',
                      ],
                    },
                  ].map(f => (
                    <div key={f.nr} style={{ background: '#f7f8fc', borderRadius: 14, padding: '1.5rem', borderTop: `4px solid ${f.kleur}` }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                        <div style={{ width: 36, height: 36, borderRadius: '50%', background: f.kleur, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{f.nr}</span>
                        </div>
                        <div>
                          <div style={{ fontSize: 15, fontWeight: 700, color: '#1B3A6B' }}>{f.titel}</div>
                          <div style={{ fontSize: 12, color: '#6b7280', marginTop: 1 }}>{f.sub}</div>
                        </div>
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {f.bullets.map((b, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: 13, color: '#4a5568', lineHeight: 1.6 }}>
                            <span style={{ width: 7, height: 7, borderRadius: '50%', background: f.kleur, flexShrink: 0, marginTop: 5 }} />
                            {b}
                          </li>
                        ))}
                      </ul>
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
                      {['Sneller toegang tot gemotiveerde medewerkers','Social Return-verplichting structureel ingevuld','Minder administratieve last','Subsidies volledig benut','Aantoonbare maatschappelijke bijdrage'].map(i => (
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

            {/* Whitepaper / Infographic */}
            <section className="py-20 px-6 bg-blauw">
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14 items-start">
                {/* Links */}
                <div>
                  <p className="eyebrow mb-3" style={{ color: '#F9A8D4' }}>Downloads</p>
                  <h2 className="text-2xl font-medium text-white leading-snug mb-4">
                    Regie & Eigenaarschap<br />bij de Werkgever
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed mb-6">
                    {DOWNLOADS[downloadChoice].desc}
                  </p>
                  {downloadChoice === 'whitepaper' && (
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
                  )}
                </div>

                {/* Formulier */}
                <div className="bg-white rounded-2xl p-6">
                  {/* Keuze-tabs */}
                  <div className="flex gap-2 mb-4">
                    {(['whitepaper', 'infographic'] as DownloadChoice[]).map(c => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => handleChoiceChange(c)}
                        className={`flex-1 py-2 text-sm font-medium rounded-xl transition-colors ${
                          downloadChoice === c
                            ? 'bg-magenta text-white'
                            : 'bg-magenta-licht text-magenta hover:bg-magenta/20'
                        }`}
                      >
                        {DOWNLOADS[c].label}
                      </button>
                    ))}
                  </div>

                  {wpStatus === 'sent' ? (
                    <div className="flex flex-col items-center text-center gap-4 py-6">
                      <div className="w-12 h-12 rounded-full bg-magenta-licht flex items-center justify-center">
                        <svg className="w-6 h-6 text-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-blauw mb-1">Aanvraag ontvangen!</p>
                        <p className="text-sm text-grijs mb-4">We sturen je de {DOWNLOADS[downloadChoice].label.toLowerCase()} zo snel mogelijk toe.</p>
                      </div>
                      <a
                        href={DOWNLOADS[downloadChoice].file}
                        download
                        className="inline-flex items-center gap-2 bg-magenta hover:bg-[#a8005a] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download {DOWNLOADS[downloadChoice].label.toLowerCase()}
                      </a>
                    </div>
                  ) : (
                    <form onSubmit={handleWhitepaperSubmit} className="flex flex-col gap-3">
                      <h3 className="font-medium text-blauw mb-1">Ontvang de {DOWNLOADS[downloadChoice].label.toLowerCase()} gratis</h3>
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
                        <span>Ik ga akkoord met de verwerking van mijn gegevens om de {DOWNLOADS[downloadChoice].label.toLowerCase()} toe te sturen.</span>
                      </label>
                      {wpStatus === 'error' && <p className="text-red-500 text-xs">Er ging iets mis. Probeer opnieuw.</p>}
                      <button
                        type="submit"
                        disabled={wpStatus === 'sending'}
                        className="w-full bg-magenta hover:bg-[#a8005a] disabled:opacity-60 text-white font-medium py-3 rounded-full transition-colors text-sm mt-1"
                      >
                        {wpStatus === 'sending' ? 'Versturen…' : `${DOWNLOADS[downloadChoice].label} ontvangen →`}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </section>
          </>
        )}

        {/* ── Technologische innovatie ──────────────────────────────────── */}
        {activeTab === 'tech' && (
          <>
            {/* Robotica */}
            <section className="py-16 px-6 bg-white">
              <div className="max-w-3xl mx-auto">
                <p className="eyebrow mb-3">Robotica</p>
                <h2 className="text-2xl font-medium text-blauw mb-6">Zwaar werk slimmer organiseren</h2>
                <p className="text-grijs leading-relaxed">
                  In de bouwsector en zeker in de infra is personeel schaars en zwaar werk steeds lastiger in te vullen. Grote machines passen niet overal en je moet toch door. Robotiseren biedt een praktische uitweg — en de techniek is toegankelijker dan je denkt. Waar begin je? Wat past bij jouw bedrijf? Waardewerk helpt je de juiste vragen te stellen, tot de kern van je uitdaging te komen en tot een oplossing met een gedegen businesscase.
                </p>
              </div>
            </section>

            {/* AI */}
            <section className="py-16 px-6 bg-bg-alt border-t border-lijn">
              <div className="max-w-3xl mx-auto">
                <p className="eyebrow mb-3">Artificiële Intelligentie</p>
                <h2 className="text-2xl font-medium text-blauw mb-6">Van kenniswerk naar automatisering</h2>
                <p className="text-grijs leading-relaxed">
                  De technologische ontwikkeling gaat razendsnel en AI maakt kennis en automatisering steeds toegankelijker en goedkoper. Wat gebeurt er in je bedrijf als je met een AI-agent de taken van een kantoormedewerker volledig kunt automatiseren — 24/7, tegen een fractie van de kosten? Dat vraagt om keuzes: operationeel, tactisch en strategisch. Waardewerk ondersteunt je daarin. Want één ding is zeker: wie nieuwe technologie omarmt, blijft toekomstbestendig.
                </p>
              </div>
            </section>

            {/* Aanpak technologie */}
            <section className="py-16 px-6 bg-white border-t border-lijn">
              <div className="max-w-3xl mx-auto">
                <p className="eyebrow mb-3">Aanpak</p>
                <h2 className="text-2xl font-medium text-blauw mb-3">Technologie implementeren in vier stappen</h2>
                <p style={{ fontSize: 15, color: '#4a5568', lineHeight: 1.7, maxWidth: 620, marginBottom: '2rem' }}>
                  Waardewerk begeleidt jouw organisatie van eerste oriëntatie tot werkende technologische oplossing. We werken stapsgewijs, met jou als beslisser op elk moment.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {[
                    {
                      nr: '1', kleur: '#C4006A', titel: 'Richten', sub: 'Technologie-scan',
                      bullets: [
                        'We brengen jouw uitdaging in kaart: waar verlies je capaciteit, tijd of geld?',
                        'We analyseren welke technologie (robotica, AI, automatisering) past bij jouw situatie',
                        'We maken een onderbouwd advies met concrete oplossingsrichtingen',
                      ],
                    },
                    {
                      nr: '2', kleur: '#1a2e45', titel: 'Inrichten', sub: 'Ontwerp en businesscase',
                      bullets: [
                        'Businesscase opstellen: wat levert de investering op?',
                        'Leveranciers, partners en implementatietraject in kaart brengen',
                        "KPI's bepalen zodat resultaat meetbaar is",
                      ],
                    },
                    {
                      nr: '3', kleur: '#C4006A', titel: 'Verrichten', sub: 'Implementatie',
                      bullets: [
                        'We begeleiden de eerste stappen: voordoen → samen doen → jij doet het zelf',
                        'Borging van adoptie bij je mensen en je organisatie',
                      ],
                    },
                    {
                      nr: '4', kleur: '#1a2e45', titel: 'Monitoren', sub: 'Doorontwikkeling',
                      bullets: [
                        'Vinger aan de pols: werkt de technologie zoals verwacht?',
                        'Bijsturen waar nodig, doorontwikkelen waar mogelijk',
                      ],
                    },
                  ].map(f => (
                    <div key={f.nr} style={{ background: '#f7f8fc', borderRadius: 14, padding: '1.5rem', borderTop: `4px solid ${f.kleur}` }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                        <div style={{ width: 36, height: 36, borderRadius: '50%', background: f.kleur, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{f.nr}</span>
                        </div>
                        <div>
                          <div style={{ fontSize: 15, fontWeight: 700, color: '#1B3A6B' }}>{f.titel}</div>
                          <div style={{ fontSize: 12, color: '#6b7280', marginTop: 1 }}>{f.sub}</div>
                        </div>
                      </div>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {f.bullets.map((b, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: 13, color: '#4a5568', lineHeight: 1.6 }}>
                            <span style={{ width: 7, height: 7, borderRadius: '50%', background: f.kleur, flexShrink: 0, marginTop: 5 }} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
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
      {modalOpen && <ContactModal onClose={() => setM