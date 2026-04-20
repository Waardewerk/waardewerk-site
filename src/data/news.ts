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
    slug: 'waardewerk-lanceert-sroi-monitor',
    title: 'Waardewerk lanceert de SROI Monitor',
    date: '2026-04-15',
    tag: 'Aankondiging',
    author: 'Ruud Blom',
    excerpt:
      'Vanaf vandaag kunnen werkgevers in de bouw- en infrasector met één dashboard hun SROI-verplichting volgen, sturen en verantwoorden.',
    content: [
      'Na maanden ontwikkelen met opdrachtgevers uit de bouw- en infrasector is het zover: de Waardewerk SROI Monitor is live. Werkgevers zien in één oogopslag hoeveel SROI-waarde er openstaat, wat er al is ingevuld en welke plaatsingen op schema liggen.',
      'De monitor is gebouwd vanuit het idee dat sociaal ondernemerschap niet bij een Excel-lijstje hoort op te houden. Regie nemen betekent: zien wat er gebeurt, op tijd bijsturen, en aan het einde van het project gewoon kunnen laten zien wat er geleverd is.',
      'Benieuwd wat de monitor voor jouw organisatie kan betekenen? Vraag een gratis scan aan en we laten het je zien op jouw eigen projecten.',
    ],
  },
  {
    slug: 'regie-over-sroi-bij-de-werkgever',
    title: 'Waarom regie over SROI bij de werkgever hoort',
    date: '2026-03-28',
    tag: 'Visie',
    author: 'Ruud Blom',
    excerpt:
      'SROI-verplichtingen worden vaak gezien als een administratieve last. Dat is een gemiste kans — juist de werkgever heeft de sleutels in handen.',
    content: [
      'In veel aanbestedingen wordt SROI nog steeds afgehandeld als een papieren verplichting: een percentage halen, wat formulieren invullen, klaar. De ervaring leert dat dat zelden tot duurzame plaatsingen leidt.',
      'Werkgevers die zelf regie nemen over hun SROI-invulling — wie ze aannemen, hoe ze mensen begeleiden en hoe ze impact meten — zien structureel andere resultaten. Lagere uitval, hogere tevredenheid, en een team dat trots is op wat het levert.',
      'In dit bericht bespreken we drie concrete stappen om die regie naar je toe te trekken, zonder dat het een bureaucratische nachtmerrie wordt.',
    ],
  },
  {
    slug: 'waardewerk-aan-tafel-bij-bouwend-nederland',
    title: 'Waardewerk aan tafel bij Bouwend Nederland',
    date: '2026-03-10',
    tag: 'Event',
    author: 'Ruud Blom',
    excerpt:
      'Tijdens de sectorbijeenkomst in Utrecht gaven we een pitch over hoe technologie en sociaal ondernemerschap elkaar versterken in de bouw.',
    content: [
      'Op uitnodiging van Bouwend Nederland mochten we onze visie delen met een zaal vol HR-directeuren, projectleiders en beleidsmakers. Het thema: hoe houden we werk menselijk, in een sector die razendsnel digitaliseert?',
      'We lieten zien dat techniek het werk lichter maakt — maar alleen als we tegelijkertijd investeren in de mensen die dat werk doen. Sociaal ondernemerschap en digitalisering gaan hand in hand, niet om en om.',
      'De reacties waren positief en leverden meteen een aantal mooie vervolggesprekken op. Wordt vervolgd.',
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
