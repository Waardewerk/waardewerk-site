// Nieuws-berichten voor Waardewerk.
// Nieuw bericht toevoegen? Plak een nieuw object bovenaan de NEWS-array.
// - slug: komt in de URL (/nieuws/<slug>) — alleen kleine letters, cijfers en koppeltekens
// - date: ISO-formaat (YYYY-MM-DD). Bepaalt de sortering (nieuwste eerst).
// - content: paragrafen als array van strings (elke string wordt één <p>).

export interface NewsItem {
  slug: string;
  title: string;
  date: string;           // ISO YYYY-MM-DD
  excerpt: string;        // korte intro op homepage & overzicht
  author?: string;
  image?: string;         // optioneel pad onder /public, bv. '/news/foo.jpg'
  tag?: string;           // optioneel label, bv. 'Aankondiging'
  content: string[];      // paragrafen
}

export const NEWS: NewsItem[] = [
  // Nog geen berichten. Voeg een nieuw bericht toe als object bovenaan deze array.
];

export function getAllNews(): NewsItem[] {
  return [...NEWS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getLatestNews(n: number): NewsItem[] {
  return getAllNews().slice(0, n);
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return NEWS.find(n => n.slug === slug);
}

export function formatNewsDate(iso: string): string {
  const d = new Date(iso + 'T00:00:00');
  return d.toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' });
}
