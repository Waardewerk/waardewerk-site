export default function SocialeZaak() {
  return (
    <section id="sociale-zaken" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow mb-3">Sociale zaken</p>
        <h2 className="text-3xl font-medium text-blauw leading-snug mb-8">
          Social Return: van last naar kans
        </h2>

        {/* Foto , volle breedte */}
        <img
          src="/Verkeersregelaars.png"
          alt="Verkeersregelaars aan het werk"
          className="w-full object-cover object-bottom mb-10"
          style={{ borderRadius: 12, maxHeight: 480 }}
        />

        <div className="max-w-3xl space-y-5 text-grijs leading-relaxed mb-10">
          <p>
            Een Sociale Zaak zorgt goed voor haar mensen, niet omdat ze anders weglopen, maar omdat je iets goeds wilt doen. Met een passende businesscase, want de schoorsteen moet ook roken.
          </p>
          <p>
            In Nederland biedt Social Return een concrete kans. Werk je voor de overheid? Dan besteed je een deel van de aanneemsom aan mensen met afstand tot de arbeidsmarkt. Mooi initiatief, helaas heeft iedere gemeente eigen regels, waardoor leveranciers door de bomen het bos niet meer zien. De verplichting wordt dan afgevinkt in plaats van ingevuld.
          </p>
          <p>
            Waardewerk helpt je Social Return van last naar kans te maken. We hebben daarvoor de SROI Monitor gebouwd: inzicht in de regels per gemeente waar jij werkt.
          </p>
        </div>

        <a
          href="/sroi-monitor"
          className="inline-flex items-center gap-2 bg-magenta hover:bg-[#a8005a] text-white font-medium px-7 py-3.5 rounded-full transition-colors text-sm"
        >
          Bekijk de data per gemeente
        </a>
      </div>
    </section>
  );
}
