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
    excerpt: 'Drie bedrijven in de straatwerkbranche gaan samen met RoboHouse en Waardewerk onderzoeken of robots een rol kunnen spelen bij het kleine precisiewerk dat nu nog volledig handmatig wordt gedaan.',
    content: [
      'We zijn van start. Drie bedrijven in de straatwerkbranche \u2014 Groeneveld GWW, Gebr. van Meer en HABO GWW \u2014 zijn samen met RoboHouse en Waardewerk een innovatief traject ingegaan om te onderzoeken of robots een rol kunnen spelen bij het kleine straatwerk dat nu nog volledig handmatig wordt gedaan.',
      'Grote machines maken het machinaal straten al langer mogelijk. Maar het kleine, precisiewerk \u2014 het leggen van klinkers langs de randen, in hoeken, langs obstakels, op onregelmatige oppervlakken \u2014 is nog altijd handarbeid. Dat is precies waar dit onderzoek zich op richt.',
      'RoboHouse brengt in kaart wat een stratenmaker nu precies doet: welke stappen worden handmatig uitgevoerd, in welke volgorde, met welke krachten en bewegingen? Dat vormt de basis om te bepalen welke onderdelen van het werk robotiseerbaar zijn en hoe.',
      'De komende maanden werken alle partijen samen aan die vraag om te kijken wat er technisch haalbaar is en wat het vak vraagt.',
      'Betrokkenen: Lennard Visser (Groeneveld GWW), Rob van Meer (Gebr. van Meer), Johan Tiemersma en Ronald Baptiste (HABO GWW), Gian Broers en Boudewijn Derkx (BAM), Ruud Blom (Waardewerk), Guus Paris (GP Engineering) en het team van RoboHouse: Nelliene Molenaar, Linda de Moor, Denis Zatyagov en Rosie Paulissen.',
    ],
  },
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
