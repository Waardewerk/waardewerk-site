export default function OverOns() {
  return (
    <section id="over-ons" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow mb-3">Over ons</p>

        {/* ── Waardewerk ─────────────────────────────────────────── */}
        <h2 className="text-3xl font-medium text-blauw leading-snug mb-5">
          Waardewerk
        </h2>

        <p className="text-grijs leading-relaxed mb-10 max-w-3xl">
          Waardewerk ondersteunt ondernemers met technologische en sociale innovaties. De huidige arbeidsmarkt en regeldruk vragen een andere manier van denken en werken, wil je als ondernemer toekomstgericht zijn en relevant blijven.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="border-l-4 border-magenta pl-5">
            <h3 className="font-semibold text-magenta mb-3">Technologische Innovatie</h3>
            <p className="text-grijs leading-relaxed text-sm">
              De ontwikkelingen gaan nog nooit zo snel als nu. Dat geeft kansen, en bedreigingen. Omdat we zuinig moeten zijn op onze mensen, en soms omdat regelgeving ons dat vraagt, is technologie omarmen geen keuze meer. Van het robotiseren van straatwerk tot strategisch nadenken over AI: dit zijn vraagstukken waar Waardewerk zich graag in vastbijt. We helpen je de juiste keuzes maken en je mensen door de verandering loodsen.
            </p>
          </div>
          <div className="border-l-4 border-magenta pl-5">
            <h3 className="font-semibold text-magenta mb-3">Sociale Innovatie</h3>
            <p className="text-grijs leading-relaxed text-sm">
              De arbeidsmarkt in de bouwsector dwingt tot meer sociale innovatie. Mensen centraal stellen, dienend leiderschap tonen, het gaat om je menselijk kapitaal. Als mensen alleen maar uitstromen, moet je creatief worden. Wij helpen je ontdekken wat werkt, pragmatisch en altijd met een gezonde kijk op de businesscase.
            </p>
          </div>
        </div>

        {/* ── Ruud Blom ──────────────────────────────────────────── */}
        <h2 className="text-3xl font-medium text-blauw leading-snug mb-10">
          Over Ruud Blom
        </h2>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Foto */}
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <div className="w-[160px] h-[160px] rounded-full border-[3px] border-magenta overflow-hidden bg-magenta-licht flex items-center justify-center flex-shrink-0">
              <img
                src="/ruud.jpg"
                alt="Ruud Blom"
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement | null;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <span className="text-magenta text-2xl font-bold tracking-wide select-none hidden w-full h-full items-center justify-center">
                RB
              </span>
            </div>
            <span className="text-xs text-grijs text-center">Oprichter van Waardewerk</span>
          </div>

          {/* Bio tekst */}
          <div className="flex-1 space-y-4 text-grijs leading-relaxed">
            <p>
              Ik ben Ruud Blom, oprichter van Waardewerk. Al bijna 30 jaar hou ik me bezig met hoe mensen omgaan met technologie. Begonnen in de mobiele telefonie in 1997 — en daar een enorme shift in denken en werken meegemaakt. Het heeft me altijd geboeid: hoe gaan mensen hier nu mee om?
            </p>
            <p>
              Vele jaren heb ik als trainer gewerkt en daar veel geleerd over menselijk gedrag. Hoe krijg je mensen in beweging? De tijden van keihard werken op basis van financiële prikkels liggen ver achter ons. Er is veel meer sociaal ondernemerschap nodig om überhaupt aan mensen te komen — en zeker ook om ze te behouden.
            </p>
            <p>
              Nu staan we qua techniek op een heel ander kantelpunt. Er is technologie die zelf besluiten neemt en vele malen slimmer is dan wij. Er zijn robots in aantocht die vele taken lichter gaan maken en ons op veel fronten gaan vervangen. Wat betekent dit voor ons menszijn en de waarde die we onszelf toekennen?
            </p>
            <p className="text-blauw font-semibold text-base border-l-4 border-magenta pl-4 py-1">
              Vandaar Waardewerk — eigenwaarde door te werken, en waarde leveren door het werk wat je doet, wat je ook doet. Sociaal ondernemerschap en het omarmen van technologie gaan hand in hand. Werk voor je mensen en laat techniek voor je werken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
