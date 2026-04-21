import { Link } from 'react-router-dom';
import { getLatestNews, formatNewsDate, type NewsItem } from '../data/news';

function FeaturedCard({ item }: { item: NewsItem }) {
  return (
    <Link
      to={`/nieuws/${item.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-lijn overflow-hidden hover:border-magenta/40 hover:shadow-sm transition-all h-full"
    >
      <div className="aspect-[16/9] bg-magenta-licht flex items-center justify-center overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          />
        ) : (
          <span className="text-magenta/50 text-6xl font-light select-none">W</span>
        )}
      </div>
      <div className="p-7 flex-1 flex flex-col">
        <div className="flex items-center gap-3 text-xs text-grijs mb-3">
          {item.tag && (
            <span className="bg-magenta-licht text-magenta font-medium px-2.5 py-0.5 rounded-full">
              {item.tag}
            </span>
          )}
          <span>{formatNewsDate(item.date)}</span>
        </div>
        <h3 className="text-xl md:text-2xl font-medium text-blauw leading-snug mb-3 group-hover:text-magenta transition-colors">
          {item.title}
        </h3>
        <p className="text-grijs leading-relaxed text-sm mb-4 flex-1">{item.excerpt}</p>
        <span className="text-magenta text-sm font-medium group-hover:underline">
          Lees verder →
        </span>
      </div>
    </Link>
  );
}

function CompactCard({ item }: { item: NewsItem }) {
  return (
    <Link
      to={`/nieuws/${item.slug}`}
      className="group flex flex-col bg-white rounded-2xl border border-lijn p-6 hover:border-magenta/40 hover:shadow-sm transition-all h-full"
    >
      <div className="flex items-center gap-3 text-xs text-grijs mb-3">
        {item.tag && (
          <span className="bg-magenta-licht text-magenta font-medium px-2.5 py-0.5 rounded-full">
            {item.tag}
          </span>
        )}
        <span>{formatNewsDate(item.date)}</span>
      </div>
      <h3 className="text-base font-medium text-blauw leading-snug mb-2 group-hover:text-magenta transition-colors">
        {item.title}
      </h3>
      <p className="text-grijs text-sm leading-relaxed flex-1">{item.excerpt}</p>
      <span className="text-magenta text-xs font-medium mt-4 group-hover:underline">
        Lees verder →
      </span>
    </Link>
  );
}

export default function Nieuws() {
  const items = getLatestNews(3);

  return (
    <section id="nieuws" className="py-20 px-6 bg-bg-alt">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="eyebrow mb-3">Nieuws</p>
            <h2 className="text-3xl font-medium text-blauw leading-snug">
              Wat er speelt bij Waardewerk
            </h2>
          </div>
          {items.length > 0 && (
            <Link
              to="/nieuws"
              className="text-sm font-medium text-magenta hover:underline"
            >
              Alle berichten →
            </Link>
          )}
        </div>

        {items.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {/* Uitgelicht — groot, neemt links de volle hoogte */}
            <div className="md:row-span-2">
              <FeaturedCard item={items[0]} />
            </div>

            {/* Twee kleinere kaarten rechts */}
            {items.slice(1).map(item => (
              <CompactCard key={item.slug} item={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function EmptyState() {
  return (
    <div className="bg-white rounded-2xl border border-lijn px-8 py-14 text-center">
      <p className="text-4xl md:text-5xl font-medium text-blauw mb-3">
        Geen nieuws, goed nieuws!
      </p>
      <p className="text-grijs max-w-md mx-auto leading-relaxed">
        Zodra er iets te melden is, lees je het hier.
      </p>
    </div>
  );
}
