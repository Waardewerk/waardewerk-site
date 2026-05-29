export default function OnsVerhaal() {
  return (
    <section id="ons-verhaal" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Intro */}
        <p className="text-grijs leading-relaxed text-lg mb-12 max-w-3xl">
          Waardewerk zorgt dat jouw bedrijf klaar is voor de toekomst. Mens op nummer één, technologie vaak als hefboom, continuïteit als resultaat.
        </p>

        {/* Twee kolommen */}
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Links: tekst */}
          <div>
            {/* Technologische Innovatie */}
            <div className="border-l-4 border-magenta pl-5 mb-8">
              <h3 className="font-semibold text-magenta mb-3">Technologische Innovatie</h3>
              <p className="text-grijs leading-relaxed text-sm">
                De ontwikkelingen gaan nog nooit zo snel als nu, dat geeft kansen, en bedreigingen. Omdat we zuinig moeten zijn op onze mensen, en soms omdat regelgeving ons dat vraagt, is technologie omarmen geen keuze meer. Van het robotiseren van straatwerk tot strategisch nadenken over AI: hier ondersteunen we bij en ontzorgen we jou in het proces. We helpen je de juiste keuzes te maken en je bedrijf met de mensen door de verandering te loodsen.
              </p>
            </div>

            {/* Sociale Innovatie */}
            <div className="border-l-4 border-magenta pl-5 mb-8">
              <h3 className="font-semibold text-magenta mb-3">Sociale Innovatie</h3>
              <p className="text-grijs leading-relaxed text-sm">
                De arbeidsmarkt in de bouwsector staat zwaar onder druk, staat bij jou de mens op de eerste plaats? Social Return en SROI bieden op dit vlak ook kansen, het kan een aanjager zijn voor nieuw talent in je bedrijf. De combinatie van een sociale werkgever zijn en ondertussen een gezond bedrijf kunnen draaien, dat kan en voelt heel goed. Hier ondersteunen we je graag bij.
              </p>
              <p className="text-sm text-grijs mt-3">
                Zijn de Social Return regels onduidelijk?{' '}
                <a href="/sroi-monitor" className="text-magenta hover:underline font-medium">Kijk op de SROI Monitor</a>
              </p>
              <p className="text-sm text-grijs mt-1">
                Wil je eens samen sparren?{' '}
                <a href="#contact" className="text-magenta hover:underline font-medium">Neem contact op</a>
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
