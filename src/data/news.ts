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
  youtube?: string;      // YouTube video-ID, bv. 'dQw4w9WgXcQ'
}

export const NEWS: NewsItem[] = [
  {
    slug: 'the-future-is-now',
    title: 'The Future is Now\!',
    date: '2026-04-23',
    tag: 'Innovatie',
    youtube: 'TMpqucngavY',
    image: 'https://img.youtube.com/vi/TMpqucngavY/maxresdefault.jpg',
    excerpt: 'Ik reed gisteren voor het eerst volledig hands-free van A naar B in mijn Tesla. Wat me het meest verbaasde was niet de technologie — maar hoe menselijk de auto handelde.',
    content: [
      'Gisteren heb ik mijn Tesla omgebouwd met Full Self Driving Supervised FSD (het was een software-update van 20 minuten) en toen kon ik gaan zitten, handen op schoot, ogen op de weg (je blijft zelf verantwoordelijk) en rijden maar.',
      'Het is echt mindblowing wat hier gebeurt. De rijervaring is zo soepel en veilig dat je al heel snel went dat je controle op de weg overgeeft aan een robot.',
      'Je drukt letterlijk op de knop FSD starten en hij gaat naar de ingevoerde bestemming en zet de auto voor de deur. Dat de auto kan sturen en afstanden kan inschatten, dat lijkt me logisch voor een calculerende robot vol sensoren en camera's. Wat me het meest verbaasde was het inschatten van afwijkende situaties. In een 30 km zone stond een oudere dame langs de kant van de straat, het was geen oversteekplaats en ze gaf niet duidelijk aan wat ze wilde doen. Toch stopte de auto en liet haar oversteken — zoals je dat zelf ook zou kunnen doen, niet vanuit moeten, vanuit willen. Heel bijzonder en menselijk qua handelen.',
      'Wat er direct in me opkwam is wat de impact op mobiliteit is van deze stap. Inmiddels zijn er 12 miljard kilometers gereden met FSD en de kans op ongevallen is 92% minder dan met een menselijke chauffeur. Hoelang gaat het duren voor dat verzekeraars de premie voor menselijke chauffeurs gaan verhogen of iemand helemaal niet meer gaan verzekeren — 2 jaar? 5 jaar? Verzekeraars kunnen behoorlijk bepalend zijn in sommige industrieën.',
      'Complimenten voor de RDW om dit toe te staan op de Nederlandse wegen. Dat had ik niet verwacht. Ben benieuwd welk land volgt en al helemaal wanneer het, net als in de VS in bepaalde staten, wordt toegestaan om helemaal autonoom te rijden — niet “supervised”.',
      'Wil je dit een keer ervaren en meteen eens van gedachten wisselen over wat robotisering voor jouw organisatie kan betekenen? Mail naar ruud@waardewerk.org',
    ],
  },
  {
    slug: 'is-robotisering-klaar-voor-de-straatwerkbranche',
    title: 'Is robotisering klaar voor de straatwerkbranche?',
    date: '2026-04-01',
    tag: 'Innovatie',
    image: '/robohouse-kickoff.jpeg',
    excerpt: 'Drie bedrijven in de straatwerkbranche gaan samen met RoboHouse en Waardewerk onderzoeken of robots een rol kunnen spelen bij het kleine precisiewerk dat nu nog grotendeels handmatig wordt gedaan.',
    content: [
      'We zijn van start. Drie bedrijven in de straatwerkbranche \u2014 Groeneveld GWW, Gebr. van Meer en HABO GWW \u2014 zijn samen met RoboHouse, BAM en Waardewerk een innovatief traject ingegaan om te onderzoeken of robots een rol kunnen spelen bij het kleine straatwerk dat nu nog grotendeels handmatig wordt gedaan.',
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
