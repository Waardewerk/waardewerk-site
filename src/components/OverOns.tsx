export default function OverOns() {
  return (
    <section id="over-ons" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow mb-3">Over ons</p>

        {/* Technologische & Sociale Innovatie */}
        <p className="text-grijs leading-relaxed text-lg mb-12 max-w-3xl">
          Waardewerk ondersteunt ondernemers met technologische en sociale innovaties. De huidige arbeidsmarkt en regeldruk vragen een andere manier van denken en werken, wil je als ondernemer toekomstgericht zijn en relevant blijven.
        </p>
        <div className="grid md:grid-cols-2 gap-14 items-start mb-20">
          <div>
            <div className="border-l-4 border-magenta pl-5 mb-8">
              <h3 className="font-semibold text-magenta mb-3">Technologische Innovatie</h3>
              <p className="text-grijs leading-relaxed text-sm">
                Omdat we zuinig moeten zijn op onze mensen en soms ook, omdat regelgeving ons dat vraagt, is het van belang om technologie te omarmen. De ontwikkelingen gingen nog nooit zo snel als nu, dat geeft kansen en ook bedreigingen. Hoe je hier als ondernemer mee omgaat en je mensen door dit soort veranderingen heen loodst, dat is waar Waardewerk je bij kan ondersteunen. Van het robotiseren van het straatwerk tot en met strategisch vooruit kijken op het gebied van kunstmatige intelligentie, dit zijn vraagstukken waar wij ons heel graag in vast bijten.
              </p>
            </div>
            <div className="border-l-4 border-magenta pl-5 mb-8">
              <h3 className="font-semibold text-magenta mb-3">Sociale Innovatie</h3>
              <p className="text-grijs leading-relaxed text-sm">
                De huidige arbeidsmarkt, zeker in de bouwsector, dwingt ons tot meer sociale innovatie. Dit betekent de mens centraal stellen en dienend leiderschap tonen. Het gaat immers om je menselijk kapitaal. Wat doe je als deze mensen alleen maar de sector uitstromen, dan moet je creatief worden en zorgen voor andere methoden om aan mensen te komen. Social Return on investment (SROI) biedt daartoe een hele mooie kans om socialer te ondernemen door mensen met een afstand tot de arbeidsmarkt aan het werk te helpen en ondertussen daar zelf meer toekomstzekerheid mee op te bouwen. Wij ondersteunen je in de zoektocht naar wat precies te doen om dit tot succes te brengen.
              </p>
            </div>
            <p className="text-grijs leading-relaxed text-sm">
              In beide gevallen en wat de vraag ook is, begeleiden we jou op een hele pragmatische wijze in het maken van keuzes, het onderzoeken van opties en kritisch bevragen wat voor jou nu echt belangrijk is. En altijd met een gezonde kijk op de business case.
            </p>
          </div>
          <div className="md:sticky md:top-24">
            <img
              src="/robots-stratenmaker.png"
              alt="Robots en stratenmaker"
              className="w-full object-cover rounded-2xl"
            />
          </div>
        </div>

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
