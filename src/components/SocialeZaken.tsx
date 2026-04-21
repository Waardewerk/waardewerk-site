export default function SocialeZaak() {
  return (
    <section id="sociale-zaken" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow mb-3">Sociale zaken</p>
        <h2 className="text-3xl font-medium text-blauw leading-snug mb-8">
          Social Return van last naar kans
        </h2>

        {/* Foto — volle breedte */}
        <img
          src="/Verkeersregelaars.png"
          alt="Verkeersregelaars aan het werk"
          className="w-full object-cover object-bottom mb-10"
          style={{ borderRadius: 12, maxHeight: 480 }}
        />

        {/* Tekst — twee kolommen */}
        <div className="grid md:grid-cols-2 gap-10 text-grijs leading-relaxed mb-10">
          {/* Links */}
          <div className="space-y-4">
            <p>
              Onze definitie van een Sociale Zaak is een bedrijf dat goed voor haar mensen zorgt, de mensen op de eerste plaats zet — en niet alleen omdat 'ze anders weglopen'.
            </p>
            <p style={{ borderLeft: '3px solid #C4006A', paddingLeft: '1rem' }}>
              De motivatie is intrinsiek: omdat je iets goeds wilt doen voor een ander zonder eigen belang. Natuurlijk moet de schoorsteen ook roken, en is het van belang om een goede balans te creëren tussen beide — sociaal ondernemen met een passende businesscase.
            </p>
            <p>
              In Nederland hebben we dit goed geregeld en zijn er tal van voorzieningen om sociaal te kunnen ondernemen, ondersteund en/of gesubsidieerd door de overheid. Zo kennen we{' '}
              <span className="font-medium text-blauw">Social Return on Investment (SROI)</span>: wanneer je als onderneming voor de overheid werkt, besteed je een deel van de aanneemsom (tussen de 2 en 5%) aan diensten of producten geleverd door mensen met een afstand tot de arbeidsmarkt. Het doel is om meer mensen die nu niet werken — en dat wel zouden kunnen — aan het werk te helpen.
            </p>
          </div>

          {/* Rechts */}
          <div className="space-y-4">
            <p>
              Mooi initiatief, en dit wordt ook door veel bedrijven omarmd. Nederland zou Nederland niet zijn als we het niet iets te ingewikkeld hebben gemaakt. Iedere gemeente bepaalt haar eigen regels, en leveranciers zien vaak door de bomen het bos niet meer. Met als gevolg dat de Social Return-verplichting wordt ingevuld met diensten die weinig bijdragen aan de mensen die het nodig hebben — en dat verplichtingen vaak worden afgekocht. Allemaal niet duurzaam, en dat moeten we niet willen.
            </p>
            <p>
              Bij Waardewerk zien we dat zowel aan de kant van opdrachtgevers als opdrachtnemers veel onduidelijkheid bestaat. Om deze reden hebben we een SROI Monitor gemaakt zodat je kunt zien wat de regels zijn in de gemeente waar jij werkt. Wij gaan graag met je in gesprek en maken een plan hoe je Social Return van een last kunt omzetten in een kans.
            </p>
            <a
              href="https://sroi-monitor.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-magenta hover:bg-[#a8005a] text-white font-medium px-7 py-3.5 rounded-full transition-colors text-sm"
            >
              Bekijk de data per gemeente
            </a>
          </div>
        </div>

      </