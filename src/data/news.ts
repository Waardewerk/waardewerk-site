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
  {
    slug: 'is-robotisering-klaar-voor-de-straatwerkbranche',
    title: 'Is robotisering klaar voor de straatwerkbranche?',
    date: '2026-04-01',
    tag: 'Innovatie',
    image: '/robohouse-kickoff.jpeg',
    excerpt: 'Drie bedrijven in de straatwerkbranche gaan samen met RoboHouse en Waardewerk onderzoeken of robots het kleine precisiewerk bij straatwerk kunnen overnemen.',
    content: [
      'We zijn van start. Drie bedrijven in de straatwerkbranche — Groeneveld GWW, Gebr. van Meer en HABO GWW — zijn samen met RoboHouse en Waardewerk een innovatief traject ingegaan om te