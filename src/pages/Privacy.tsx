import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import Seo from '../components/Seo';

export default function PrivacyPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Seo
        title="Privacyverklaring , Waardewerk"
        description="Privacyverklaring van Waardewerk (Let's Be Well BV). Laatste update april 2026."
        path="/privacy"
      />
      <Nav onContact={() => setModalOpen(true)} />

      <main>
        <section className="bg-magenta-licht py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="eyebrow mb-3">Juridisch</p>
            <h1 className="text-4xl font-medium text-blauw leading-snug mb-2">
              Privacyverklaring
            </h1>
            <p className="text-grijs text-sm">Laatste update april 2026</p>
          </div>
        </section>

        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto space-y-10 text-grijs leading-relaxed">

            <div>
              <h2 className="text-xl font-medium text-blauw mb-3">Wie zijn wij?</h2>
              <p>
                Waardewerk is een handelsnaam van Let's Be Well BV, gevestigd in 's-Hertogenbosch (KvK 95443088).
              </p>
              <p className="mt-2">
                Contact:{' '}
                <a href="mailto:info@waardewerk.org" className="text-magenta hover:underline">info@waardewerk.org</a>
                {' '},{' '}
                <a href="https://waardewerk.org" className="text-magenta hover:underline">waardewerk.org</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-blauw mb-3">Welke gegevens verzamelen wij?</h2>
              <p>
                Uitsluitend gegevens die u zelf invult via het contactformulier: naam, e-mailadres, en eventueel organisatienaam en bericht. Wij gebruiken geen tracking, cookies of analytics.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-blauw mb-3">Waarom verwerken wij deze gegevens?</h2>
              <p>
                Uitsluitend om uw vraag te beantwoorden. Grondslag: uw toestemming via het formulier.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-blauw mb-3">Hoe lang bewaren wij uw gegevens?</h2>
              <p>
                Maximaal twee jaar na afhandeling, tenzij er een lopende zakelijke relatie is.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-blauw mb-3">Delen wij uw gegevens met derden?</h2>
              <p>
                Nee, behoudens onze hostingprovider Vercel die de website technisch beheert.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-blauw mb-3">Uw rechten</h2>
              <p>
                U kunt uw gegevens inzien, corrigeren of laten verwijderen via{' '}
                <a href="mailto:info@waardewerk.org" className="text-magenta hover:underline">info@waardewerk.org</a>.
                Wij reageren binnen twee weken. U kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens via{' '}
                <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-magenta hover:underline">autoriteitpersoonsgegevens.nl</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-medium text-blauw mb-3">Wijzigingen</h2>
              <p>
                De meest recente versie staat altijd op deze pagina.
              </p>
            </div>

          </div>
        </section>
      </main>

      <Footer />
      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
