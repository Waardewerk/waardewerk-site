import { useState } from 'react';
import LeadCaptureModal from './LeadCaptureModal';

type DownloadChoice = 'whitepaper' | 'infographic';

export default function TWO() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalChoice, setModalChoice] = useState<DownloadChoice>('whitepaper');

  function openModal(choice: DownloadChoice) {
    setModalChoice(choice);
    setModalOpen(true);
  }

  return (
    <section className="py-16 px-6 bg-white border-t border-lijn">
      <div style={{ maxWidth: 820, margin: '0 auto' }}>

        {/* HERO */}
        <div style={{ paddingBottom: '2.5rem', borderBottom: '0.5px solid #e2e8f0', marginBottom: '2.75rem' }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: '#C2185B', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Sociale zaken
          </p>
          <h2 style={{ fontSize: 36, fontWeight: 600, lineHeight: 1.2, color: '#1B3A6B', marginBottom: '0.5rem' }}>
            <span style={{ color: '#C2185B' }}>TWO</span> — De Tewerkstellingsorganisatie
          </h2>
          <span style={{ display: 'inline-block', fontSize: 13, fontWeight: 500, color: '#C2185B', background: '#fce4ec', padding: '4px 12px', borderRadius: 20, marginBottom: '1.25rem' }}>
            Een concept van Uri Breman
          </span>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: '#4a5568', maxWidth: 640 }}>
            Bedrijven willen wel investeren in mensen. Maar ze lopen vast. Op onduidelijke regels, versnipperde subsidies en een systeem dat te veel tijd en kennis vraagt om goed te navigeren. De TWO lost dat op.
          </p>
        </div>

        {/* DEFINITIE */}
        <div style={{ background: '#1B3A6B', borderRadius: 14, padding: '2rem 2.25rem', marginBottom: '2.75rem' }}>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: 'rgba(255,255,255,0.92)' }}>
            <strong style={{ color: '#fff', fontWeight: 600 }}>De TWO</strong> is een bedrijf of samenwerkingsvorm die de regie voert over instroom, begeleiding en subsidiëring van personeel met een afstand tot de arbeidsmarkt. Praktisch uitvoerend, samenwerkend met de lokale overheid en gericht op <strong style={{ color: '#fff', fontWeight: 600 }}>duurzame instroom</strong>.
          </p>
        </div>

        {/* HET PROBLEEM */}
        <div style={{ paddingBottom: '2.75rem', borderBottom: '0.5px solid #e2e8f0', marginBottom: '2.75rem' }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: '#C2185B', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Het probleem</p>
          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#1B3A6B', marginBottom: '0.6rem' }}>Goede bedoelingen, maar niemand die het regelt</h3>
          <p style={{ fontSize: 15, color: '#4a5568', lineHeight: 1.7, maxWidth: 620, marginBottom: '1.75rem' }}>
            De meeste bedrijven willen écht iets doen met sociale instroom. Maar in de praktijk lopen ze tegen dezelfde muren op.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
            {[
              { titel: 'Onduidelijke regels', body: 'SROI, SLIM, O&O-fondsen — elke gemeente hanteert eigen criteria. Wat telt mee? Wat niet? Tegen de tijd dat je het weet, is de deadline voorbij.' },
              { titel: 'Te weinig tijd', body: 'Een aannemer of mkb\'er heeft geen HR-afdeling die dit bijhoudt. Begeleiding, subsidieaanvragen, rapportages — het stapelt zich op naast het gewone werk.' },
              { titel: 'Niemand die borgt', body: 'Gemeenten verwijzen. Opleiders onderwijzen. Werkgevers produceren. Maar niemand is eindverantwoordelijk voor de uitkomst. Mensen vallen tussen wal en schip.' },
            ].map(k => (
              <div key={k.titel} style={{ background: '#fce4ec', borderRadius: 12, padding: '1.4rem 1.5rem', borderLeft: '4px solid #C2185B' }}>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#1B3A6B', marginBottom: '0.5rem' }}>{k.titel}</div>
                <div style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.65 }}>{k.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* VIER FUNCTIES */}
        <div style={{ paddingBottom: '2.75rem', borderBottom: '0.5px solid #e2e8f0', marginBottom: '2.75rem' }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: '#C2185B', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Wat een TWO doet</p>
          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#1B3A6B', marginBottom: '0.6rem' }}>Vier functies, één aanspreekpunt</h3>
          <p style={{ fontSize: 15, color: '#4a5568', lineHeight: 1.7, maxWidth: 620, marginBottom: '1.75rem' }}>
            De taken die nu versnipperd liggen worden gebundeld in één uitvoerende organisatie.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[
              { nr: '01', titel: 'Matchen', body: 'Kandidaten worden gekoppeld op vaardigheden en motivatie, niet op diploma.' },
              { nr: '02', titel: 'Begeleiden', body: 'Jobcoaches en leermeesters worden professioneel ingezet. Niet toevallig, maar planmatig.' },
              { nr: '03', titel: 'Subsidies regelen', body: 'SROI, SLIM en O&O worden gecombineerd en aangevraagd. Jij tekent één keer.' },
              { nr: '04', titel: 'Impact meten', body: 'Wat werkt, wordt zichtbaar. Voor jou als bedrijf én voor de gemeente.' },
            ].map(f => (
              <div key={f.nr} style={{ background: '#fce4ec', borderRadius: 12, padding: '1.4rem 1.5rem', borderLeft: '4px solid #C2185B' }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#C2185B', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{f.nr}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#1B3A6B', marginBottom: '0.5rem' }}>{f.titel}</div>
                <div style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.65 }}>{f.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* WAAROM DIT WERKT */}
        <div style={{ paddingBottom: '2.75rem', borderBottom: '0.5px solid #e2e8f0', marginBottom: '2.75rem' }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: '#C2185B', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Waarom dit werkt</p>
          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#1B3A6B', marginBottom: '1.75rem' }}>Niet nog een loket. Eén partij die het afmaakt.</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
            {[
              { titel: 'Structureel, niet tijdelijk', body: 'Geen project of subsidieronde. Een duurzame schakel die er is zolang de samenwerking loopt.' },
              { titel: 'Gedeeld eigenaarschap', body: 'Rollen zijn helder verdeeld. Niemand kan meer zeggen dat iemand anders het moet doen.' },
              { titel: 'Modulair', body: 'De TWO past zich aan op wat een regio of bedrijf nodig heeft. Van volledig ontzorgd tot alleen subsidiebegeleiding.' },
            ].map(o => (
              <div key={o.titel} style={{ background: '#e8eef7', borderRadius: 12, padding: '1.25rem', textAlign: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#1B3A6B', marginBottom: '0.35rem' }}>{o.titel}</div>
                <div style={{ fontSize: 13, color: '#4a5568', lineHeight: 1.6 }}>{o.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* AANPAK */}
        <div style={{ paddingBottom: '2.75rem', borderBottom: '0.5px solid #e2e8f0', marginBottom: '2.75rem' }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: '#C2185B', letterSpacing: '0.09em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Aanpak</p>
          <h3 style={{ fontSize: 22, fontWeight: 600, color: '#1B3A6B', marginBottom: '0.6rem' }}>Een TWO opzetten in vier stappen</h3>
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
                  'KPI\'s en dashboard inrichten zodat impact meetbaar wordt',
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

        {/* CTA */}
        <div style={{ background: '#1B3A6B', borderRadius: 16, padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', alignItems: 'center' }}>
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>Wil je de TWO in jouw regio opzetten?</h3>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', lineHeight: 1.65 }}>Waardewerk begeleidt gemeenten, aannemers en sociale ondernemers bij het inrichten van een TWO. Van eerste verkenning tot operationele uitvoering.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 190 }}>
            <a href="#contact" style={{ background: '#fff', color: '#1B3A6B', borderRadius: 8, padding: '11px 20px', fontSize: 14, fontWeight: 600, textAlign: 'center', textDecoration: 'none', display: 'block' }}>
              Neem contact op
            </a>
            <button onClick={() => openModal('whitepaper')} style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.45)', borderRadius: 8, padding: '11px 20px', fontSize: 14, fontWeight: 500, textAlign: 'center', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M8 1v9M5 7l3 3 3-3M2 12v2h12v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Download whitepaper
            </button>
            <button onClick={() => openModal('infographic')} style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.45)', borderRadius: 8, padding: '11px 20px', fontSize: 14, fontWeight: 500, textAlign: 'center', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7 }}>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none"><path d="M8 1v9M5 7l3 3 3-3M2 12v2h12v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              Download infographic
            </button>
          </div>
        </div>

      </div>
      <LeadCaptureModal open={modalOpen} onClose={() => setModalOpen(false)} initialChoice={modalChoice} />
    </section>
  );
}
