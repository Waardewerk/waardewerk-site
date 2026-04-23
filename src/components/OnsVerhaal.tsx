export default function OnsVerhaal() {
  return (
    <section id="ons-verhaal" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Intro , volle breedte */}
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
                De ontwikkelingen gaan nog nooit zo snel als nu. Dat geeft kansen, en bedreigingen. Omdat we zuinig moeten zijn op onze mensen, en soms omdat regelgeving ons dat vraagt, is technologie omarmen geen keuze meer. Van het robotiseren van straatwerk tot strategisch nadenken over AI: dit zijn vraagstukken waar Waardewerk zich graag in vastbijt. We helpen je de juiste keuzes maken en je mensen door de verandering loodsen.
              </p>
            </div>

            {/* Sociale Innovatie */}
            <div className="border-l-4 border-magenta pl-5 mb-8">
              <h3 className="font-semibold text-magenta mb-3">Sociale Innovatie</h3>
              <p className="text-grijs leading-relaxed text-sm">
                De arbeidsmarkt in de bouwsector dwingt tot meer sociale innovatie. Mensen centraal stellen, dienend leiderschap tonen, het gaat om je menselijk kapitaal. Als mensen alleen maar uitstromen, moet je creatief worden. Wij helpen je ontdekken wat werkt, pragmatisch en altijd met een gezonde kijk op de businesscase.
              </p>
            </div>

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
