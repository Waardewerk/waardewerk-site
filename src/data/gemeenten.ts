export type Status = 'Verplicht' | 'Actief beleid' | 'In ontwikkeling';

export interface BouwblokItem {
  label: string;
  waarde: string;
}

export interface MaatwerkActiviteit {
  categorie: string;
  regels: string[];
}

export interface Succesverhaal {
  titel: string;
  tekst: string;
}

export interface GemeenteProfile {
  code: string;
  naam: string;
  provincie: string;
  sroiPct: string;
  status: Status;
  drempel: number;
  typeOpdrachten: string;
  aanbestedingsvol: number;
  contactEmail?: string;
  uitvoerder?: string;
  methode?: string;
  bouwblokken?: {
    waarden: BouwblokItem[];
    bonussen: BouwblokItem[];
    andereMogelijkheden: BouwblokItem[];
  };
  maatwerkActiviteiten?: MaatwerkActiviteit[];
  erkendPartners?: string[];
  succesverhalen?: Succesverhaal[];
}

export const GEMEENTEN: GemeenteProfile[] = [
  {
    code: 'GM0344',
    naam: 'Utrecht',
    provincie: 'Utrecht',
    sroiPct: '5%',
    status: 'Verplicht',
    drempel: 250000,
    typeOpdrachten: 'Werken, Diensten',
    aanbestedingsvol: 890000000,
    contactEmail: 'socialreturn@utrecht.nl',
    methode: 'Bouwblokken',
    bouwblokken: {
      waarden: [
        { label: 'Participatiewet', waarde: '€ 40.000' },
        { label: 'Ingeschreven in doelgroepregister UWV (met arbeidsbeperking)', waarde: '€ 50.000' },
        { label: 'Leerwerkplek praktijk- en voortgezet speciaal onderwijs / mbo niveau 1', waarde: '€ 35.000' },
        { label: 'WIA- of WAO-uitkering van UWV', waarde: '€ 40.000' },
        { label: 'WW-uitkering van UWV', waarde: '€ 20.000' },
        { label: 'Mbo bbl niveau 2, 3 en 4', waarde: '€ 35.000' },
        { label: 'Mbo bol niveau 2, 3 en 4', waarde: '€ 20.000' },
        { label: 'Geen recht op uitkering', waarde: '€ 10.000' },
      ],
      bonussen: [
        { label: 'Ouder dan 50 jaar', waarde: '€ 10.000' },
        { label: 'Statushouders en werkzoekenden met taalachterstand', waarde: '€ 10.000' },
        { label: 'Vast contract', waarde: '€ 10.000' },
      ],
      andereMogelijkheden: [
        { label: 'Inkopen bij sociale bedrijven', waarde: 'Loonkosten excl. btw' },
        { label: 'Scholing, kennis of middelen', waarde: 'Kosten of € 100 per medewerker per uur' },
        { label: 'Sociaal project steunen', waarde: 'Kosten of € 100 per medewerker per uur' },
        { label: 'Scholing en ontwikkeling social return-medewerkers', waarde: 'In overleg met adviseur' },
        { label: 'Werkzoekenden met uitkering ondersteunen richting werk', waarde: 'In overleg met adviseur' },
      ],
    },
  },
  { code: 'GM0363', naam: 'Amsterdam', provincie: 'Noord-Holland', sroiPct: '5%', status: 'Verplicht', drempel: 250000, typeOpdrachten: 'Werken, Diensten', aanbestedingsvol: 3100000000 },
  { code: 'GM0599', naam: 'Rotterdam', provincie: 'Zuid-Holland', sroiPct: '5%', status: 'Verplicht', drempel: 250000, typeOpdrachten: 'Werken, Diensten', aanbestedingsvol: 2400000000 },
  { code: 'GM0518', naam: 'Den Haag', provincie: 'Zuid-Holland', sroiPct: '5%', status: 'Verplicht', drempel: 250000, typeOpdrachten: 'Werken, Diensten', aanbestedingsvol: 1800000000 },
  { code: 'GM0772', naam: 'Eindhoven', provincie: 'Noord-Brabant', sroiPct: '5%', status: 'Verplicht', drempel: 250000, typeOpdrachten: 'Werken', aanbestedingsvol: 680000000 },
  {
    code: 'GM0392',
    naam: 'Groningen',
    provincie: 'Groningen',
    sroiPct: '5%',
    status: 'Verplicht',
    drempel: 250000,
    typeOpdrachten: 'Werken, Diensten',
    aanbestedingsvol: 560000000,
    contactEmail: 'SocialReturn@werkinzicht.nl',
    uitvoerder: 'Coördinatiepunt Social Return Groningen / Werk in Zicht',
    methode: 'Bouwblokken (Uitvoering Social Return 3.0 – 2025)',
    maatwerkActiviteiten: [
      {
        categorie: 'Inkopen bij sociale ondernemingen',
        regels: [
          'Arbeidskosten tellen mee, materiaalkosten alleen in overleg',
          'Lunch, bloemen, vergaderzaal bij sociale onderneming: volledige factuur telt mee',
        ],
      },
      {
        categorie: 'Lokale maatschappelijke activiteiten (gastcollege, rondleiding, kennisdeling)',
        regels: ['€ 100 per uur, maximum 10 uur inclusief voorbereiding per persoon'],
      },
      {
        categorie: 'Werkervaringsplaats',
        regels: [
          '€ 75 per uur, maximum 10 uur per week (SR 3.0 – 2025)',
          'Maximale duur: 3 maanden',
        ],
      },
      {
        categorie: 'Taalstage',
        regels: [
          '€ 75 per uur, maximum 10 uur per week (SR 3.0 – 2025)',
          'Maximale duur: 3 maanden',
        ],
      },
      {
        categorie: 'Scholing medewerkers met taalachterstand',
        regels: ['Premieblok € 10.000 eenmalig'],
      },
      {
        categorie: 'Taal Werkt! training',
        regels: ['Fictieve kosten tot € 1.000 als maatwerk-verantwoording'],
      },
      {
        categorie: 'Deelname evenement werk en ontwikkeling regio Groningen',
        regels: ['€ 1.250 per dagdeel per aanwezige persoon inclusief voorbereiding en materiaal'],
      },
      {
        categorie: 'Praktijkleren met mbo-Praktijkverklaring',
        regels: ['€ 17.500 op jaarbasis naar rato (SR 3.0 – 2025)'],
      },
      {
        categorie: 'Jobcoaching',
        regels: ['€ 25 per uur, maximum 10 uur per week'],
      },
      {
        categorie: 'Co-financiering re-integratieproject',
        regels: ['Waarde in overleg met opdrachtgever'],
      },
      {
        categorie: 'Duurzame inzetbaarheid medewerkers',
        regels: ['In overleg met accountmanager'],
      },
      {
        categorie: 'Bijdrage maatschappelijke initiatieven (laatste optie, alleen als andere invulling niet mogelijk)',
        regels: ['In overleg met accountmanager, na goedkeuring Coördinatiepunt SR'],
      },
    ],
    erkendPartners: [
      'Jeugd Educatie Fonds',
      'Kijk dat werkt (Techniek voor de Klas)',
      'Everyday Heroes',
      'Stichting Present',
      'Stichting Klushulp Groningen',
      'JINC',
      'Vanhulley / Zowerkthet! (€ 100 per uur bezoek)',
    ],
    succesverhalen: [
      {
        titel: 'Vanberkel Foundation — Sociaal Jaarverslag 2025',
        tekst: 'Vanuit de Vanberkel Foundation is team SROI het hele jaar door bezig met sociaal-maatschappelijke partnerschappen en activiteiten. Op pagina 22 van hun Sociaal Jaarverslag 2025 wordt beschreven hoe Vanberkel invulling heeft gegeven aan Social Return binnen het programma BMB Duurzaam Herstel Groningen voor opdrachtgever Instituut Mijnbouwschade Groningen (IMG).',
      },
      {
        titel: 'Vanhulley – Zowerkthet!',
        tekst: 'Vanhulley is een sociale onderneming die vrouwen met een afstand tot de arbeidsmarkt een netwerk biedt voor hun loopbaan. Deelname aan het Zowerkthet! programma wordt door het Coördinatiepunt Social Return Groningen gewaardeerd op € 100 per uur voor de uren dat een Vanhulley-vrouw bij het bedrijf op bezoek komt. De Hanzehogeschool Groningen onderzocht hoe het ecosysteem van sociale ondernemingen via dit project kan worden versterkt.',
      },
    ],
  },
  { code: 'GM0503', naam: 'Tilburg', provincie: 'Noord-Brabant', sroiPct: '5%', status: 'Verplicht', drempel: 250000, typeOpdrachten: 'Werken', aanbestedingsvol: 480000000 },
  { code: 'GM0268', naam: 'Almere', provincie: 'Flevoland', sroiPct: '5%', status: 'Verplicht', drempel: 250000, typeOpdrachten: 'Werken, Diensten', aanbestedingsvol: 420000000 },
  { code: 'GM0797', naam: "'s-Hertogenbosch", provincie: 'Noord-Brabant', sroiPct: '5%', status: 'Actief beleid', drempel: 250000, typeOpdrachten: 'Werken', aanbestedingsvol: 410000000 },
  { code: 'GM0060', naam: 'Arnhem', provincie: 'Gelderland', sroiPct: '5%', status: 'Verplicht', drempel: 250000, typeOpdrachten: 'Werken, Diensten', aanbestedingsvol: 380000000 },
  { code: 'GM0394', naam: 'Enschede', provincie: 'Overijssel', sroiPct: '5%', status: 'Verplicht', drempel: 250000, typeOpdrachten: 'Werken, Diensten', aanbestedingsvol: 360000000 },
  { code: 'GM0243', naam: 'Nijmegen', provincie: 'Gelderland', sroiPct: '5%', status: 'Verplicht', drempel: 250000, typeOpdrachten: 'Werken, Diensten', aanbestedingsvol: 350000000 },
  { code: 'GM0153', naam: 'Breda', provincie: 'Noord-Brabant', sroiPct: '3%', status: 'In ontwikkeling', drempel: 500000, typeOpdrachten: 'Werken', aanbestedingsvol: 320000000 },
  { code: 'GM0796', naam: 'Haarlem', provincie: 'Noord-Holland', sroiPct: '5%', status: 'Verplicht', drempel: 250000, typeOpdrachten: 'Werken, Diensten', aanbestedingsvol: 310000000 },
  { code: 'GM0050', naam: 'Amersfoort', provincie: 'Utrecht', sroiPct: '5%', status: 'Verplicht', drempel: 250000, typeOpdrachten: 'Werken, Diensten', aanbestedingsvol: 290000000 },
  { code: 'GM0034', naam: 'Apeldoorn', provincie: 'Gelderland', sroiPct: '5%', status: 'Actief beleid', drempel: 250000, typeOpdrachten: 'Werken', aanbestedingsvol: 280000000 },
  { code: 'GM0867', naam: 'Zwolle', provincie: 'Overijssel', sroiPct: '5%', status: 'Verplicht', drempel: 250000, typeOpdrachten: 'Werken, Diensten', aanbestedingsvol: 260000000 },
  { code: 'GM0882', naam: 'Haarlemmermeer', provincie: 'Noord-Holland', sroiPct: '5%', status: 'Actief beleid', drempel: 500000, typeOpdrachten: 'Werken', aanbestedingsvol: 240000000 },
];

export function formatBedrag(n: number): string {
  if (n >= 1_000_000_000) return `€ ${(n / 1_000_000_000).toFixed(1).replace('.', ',')} mld`;
  if (n >= 1_000_000) return `€ ${(n / 1_000_000).toFixed(0)} mln`;
  return `€ ${n.toLocaleString('nl-NL')}`;
}

export const STATUS_COLOR: Record<Status, string> = {
  'Verplicht': 'bg-green-100 text-green-700',
  'Actief beleid': 'bg-blue-100 text-blue-700',
  'In ontwikkeling': 'bg-yellow-100 text-yellow-700',
};
