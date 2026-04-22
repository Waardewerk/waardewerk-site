import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import Seo from '../components/Seo';
import { getAllNews, formatNewsDate } from '../data/news';

export default function NieuwsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const items = getAllNews();

  return (
    <>
      <Seo
        title="Nieuws — Waardewerk"
        description="Updates, visie en events van Waardewerk. Over sociaal ondernemerschap, Social Return, en hoe technologie werk menselijker kan maken."
        path="/nieuws"
      />
      <Nav onContact={() => setModalOpen(true)} />

      <main>
        {/* Header */}
        <section className="bg-magenta-licht py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="eyebrow mb-3">Nieuws</p>
            <h1 className="text-4xl font-medium text-blauw leading-snug mb-4">
              Alle berichten
            </h1>
            <p className="text-grijs max-w-2xl leading-relaxed">
              Updates, visie en events van Waardewerk. Over sociaal ondernemerschap, Social Return, en hoe technologie werk menselijker kan maken.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            {items.length === 0 ? (
              <div className="bg-bg-alt rounded-2xl border border-lijn px-8 py-16 text-center">
                <p className="text-4xl md:text-5xl font-medium text-blauw mb-3">
                  Geen nieuws, goed nieuws!
                </p>
                <p className="text-grijs max-w-md mx-auto leading-relaxed">
                  Zodra er iets te melden is, lees je het hier.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map(item => (
                  <Link
                    key={item.slug}
                    to={`/nieuws/${item.slug}`}
                    className="group flex flex-col bg-white rounded-2xl border border-lijn overflow-hidden hover:border-magenta/40 hover:shadow-sm transition-all"
                  >
                    <div className="aspect-[16/9] bg-magenta-licht flex items-center justify-center overflow-hidden">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                        />
                      ) : (
                        <span className="text-magenta/50 text-5xl font-light select-none">W</span>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 text-xs text-grijs mb-3">
                        {item.tag && (
                          <span className="bg-magenta-licht text-magenta font-medium px-2.5 py-0.5 rounded-full">
                            {item.tag}
                          </span>
                        )}
                        <span>{formatNewsDate(item.date)}</span>
                      </div>
                      <h2 className="text-lg font-medium text-blauw leading-snug mb-2 group-hover:text-magenta transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-grijs text-sm leading-relaxed flex-1">{item.excerpt}</p>
                      <span className="text-magenta text-sm font-medium mt-4 group-hover:underline">
                        Lees verder →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
