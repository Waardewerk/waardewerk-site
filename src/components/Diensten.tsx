const diensten = [
  { titel: 'SROI-scan & strategie', tekst: 'We analyseren uw aanbestedingen en leveren een concrete strategie die aansluit bij uw projectportfolio.' },
  { titel: 'Trajectbegeleiding', tekst: 'Van eerste contact tot werkende medewerker — wij begeleiden het gehele traject voor u en uw opdrachtgever.' },
  { titel: 'Monitoring & rapportage', tekst: 'Geautomatiseerde registratie en rapportage zodat u altijd kunt aantonen wat uw sociale bijdrage is.' },
  { titel: 'Gemeentebeleid', tekst: 'Inzicht in welke gemeenten Social Return verplichten, welke drempelwaarden gelden en hoe beleid zich ontwikkelt.' },
  { titel: 'Doelgroepnetwerk', tekst: 'Toegang tot een breed netwerk van sociale partners, SW-bedrijven en reintegratiebureaus in uw regio.' },
  { titel: 'Subsidie-inzicht', tekst: 'We brengen in kaart welke BUIG-budgetten en subsidies beschikbaar zijn bij uw gemeentelijke opdrachtgevers.' },
];

const stats = [
  { n: '187', l: 'gemeenten met SROI-beleid' },
  { n: '€2,1 mrd', l: 'subsidies in beeld' },
  { n: '847.000', l: 'mensen bereikbaar via Social Return' },
];

export default function Diensten() {
  return (
    <section id="diensten" className="bg-bg-alt py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow mb-3">Diensten</p>
        <h2 className="text-3xl font-medium text-blauw mb-3">Wat we voor u doen</h2>
        <p className="text-grijs max-w-xl mb-12">
          Van eerste oriëntatie tot volledige implementatie — Waardewerk ondersteunt u in elk stadium van uw SROI-traject.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {diensten.map(d => (
            <div key={d.titel} className="bg-white border border-lijn rounded-2xl p-6">
              <div className="w-9 h-9 rounded-xl bg-magenta-licht flex items-center justify-center mb-4">
                <div className="w-3.5 h-3.5 rounded-sm bg-magenta" />
              </div>
              <h3 className="text-blauw font-medium mb-2 text-sm">{d.titel}</h3>
              <p className="text-grijs text-sm leading-relaxed">{d.tekst}</p>
            </div>
          ))}
        </div>

        {/* Stats balk */}
        <div className="border border-lijn rounded-2xl grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-lijn">
          {stats.map(s => (
            <div key={s.l} className="px-8 py-6 text-center">
              <div className="text-2xl font-semibold text-blauw mb-1">{s.n}</div>
              <div className="text-grijs text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    