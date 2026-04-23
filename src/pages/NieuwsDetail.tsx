import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ContactModal from '../components/ContactModal';
import Seo from '../components/Seo';
import { getNewsBySlug, getAllNews, formatNewsDate } from '../data/news';

export default function NieuwsDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [modalOpen, setModalOpen] = useState(false);
  const item = slug ? getNewsBySlug(slug) : undefined;

  // Bij paginawissel altijd naar boven scrollen
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!item) {
    return (
      <>
        <Seo
          title="Bericht niet gevonden — Waardewerk"
          description="Dit nieuwsbericht bestaat niet (meer)."
          path={`/nieuws/${slug ?? ''}`}
        />
        <Nav onContact={() => setModalOpen(true)} />
        <main className="min-h-[60vh] flex items-center justify-center px-6 py-20">
          <div className="max-w-md text-center">
            <p className="eyebrow mb-3">404</p>
            <h1 className="text-3xl font-medium text-blauw mb-4">Bericht niet gevonden</h1>
            <p className="text-grijs mb-8">
              Dit nieuwsbericht bestaat niet (meer). Misschien is het hernoemd of verplaatst.
            </p>
            <Link
              to="/nieuws"
              className="inline-flex bg-magenta hover:bg-[#a8005a] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
            >
              ← Terug naar nieuwsoverzicht
            </Link>
          </div>
        </main>
        <Footer />
        {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
      </>
    );
  }

  const related = getAllNews().filter(n => n.slug !== item.slug).slice(0, 2);

  return (
    <>
      <Seo
        title={`${item.title} — Waardewerk`}
        description={item.excerpt}
        path={`/nieuws/${item.slug}`}
        image={item.image}
        type="article"
      />
      <Nav onContact={() => setModalOpen(true)} />

      <main>
        <article className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/nieuws"
              className="inline-block text-sm text-magenta hover:underline mb-8"
            >
              ← Alle berichten
            </Link>

            <div className="flex items-center gap-3 text-xs text-grijs mb-4">
              {item.tag && (
                <span className="bg-magenta-licht text-magenta font-medium px-2.5 py-0.5 rounded-full">
                  {item.tag}
                </span>
              )}
              <span>{formatNewsDate(item.date)}</span>
              {item.author && <span>· {item.author}</span>}
            </div>

            <h1 className="text-3xl md:text-4xl font-medium text-blauw leading-tight mb-8">
              {item.title}
            </h1>

            {item.youtube ? (
              <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${item.youtube}`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            ) : item.image && (
              <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-10 bg-magenta-licht">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
            )}

            <div className="space-y-5 text-grijs leading-relaxed text-base">
              {item.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-14 pt-8 border-t border-lijn flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <Link
                to="/nieuws"
                className="text-sm text-magenta font-medium hover:underline"
              >
                ← Alle berichten
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="bg-magenta hover:bg-[#a8005a] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
              >
                Gratis scan aanvragen
              </button>
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <section className="py-16 px-6 bg-bg-alt">
            <div className="max-w-5xl mx-auto">
              <p className="eyebrow mb-3">Meer nieuws</p>
              <h2 className="text-2xl font-medium text-blauw mb-8">
                Ook interessant
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {related.map(r => (
                  <Link
                    key={r.slug}
                    to={`/nieuws/${r.slug}`}
                    className="group flex flex-col bg-white rounded-2xl border border-lijn p-6 hover:border-magenta/40 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-center gap-3 text-xs text-grijs mb-3">
                      {r.tag && (
                        <span className="bg-magenta-licht text-magenta font-medium px-2.5 py-0.5 rounded-full">
                          {r.tag}
                        </span>
                      )}
                      <span>{formatNewsDate(r.date)}</span>
                    </div>
                    <h3 className="text-base font-medium text-blauw leading-snug mb-2 group-hover:text-magenta transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-grijs text-sm leading-relaxed">{r.excerpt}</p>
                    <span className="text-magenta text-xs font-medium mt-4 group-hover:underline">
                      Lees verder →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      {modalOpen && <ContactModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
