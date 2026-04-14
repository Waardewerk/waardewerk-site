export default function OnsVerhaal() {
  return (
    <section id="ons-verhaal" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Intro — volle breedte */}
        <p className="text-grijs leading-relaxed text-lg mb-12 max-w-3xl">
          Waardewerk ondersteunt ondernemers met technologische en sociale innovaties. De huidige arbeidsmarkt en regeldruk vragen een andere manier van denken en werken, wil je als ondernemer toekomstgericht zijn en relevant blijven.
        </p>

        {/* Twee kolommen */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Links: tekst */}
          <div>
            {/* Technologische Innovatie */}
            <div className="border-l-4 border-magenta pl-5 mb-8">
              <h3 className="font-semibold text-magenta mb-3">Technologische Innovatie</h3>
              <p className="text-grijs leading-relaxed text-sm">
                Omdat we zuinig moeten zijn op onze mensen en soms ook, omdat regelgeving ons dat vraagt, is het van belang om technologie te omarmen. De ontwikkelingen gingen nog nooit zo snel als nu, dat geeft kansen en ook bedreigingen. Hoe je hier als ondernemer mee omgaat en je mensen door dit soort veranderingen heen loodst, dat is waar Waardewerk je bij kan ondersteunen. Van het robotiseren van het straatwerk tot en met strategisch vooruit kijken op het gebied van kunstmatige intelligentie, dit zijn vraagstukken waar wij ons heel graag in vast bijten.
              </p>
            </div>

            {/* Sociale Innovatie */}
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

          {/* Rechts: afbeelding */}
          <div className="md:sticky md:top-24">
            <img
              src="/robots-stratenmaker.png"
              alt="Robots en stratenmaker"
              className="w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
