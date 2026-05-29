export default function OverOns() {
  return (
    <section id="over-ons" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow mb-3">Over ons</p>

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
              Mijn naam is Ruud Blom, al 30 jaar hou ik me bezig met hoe mensen omgaan met techniek en weet wat nodig is om ze te helpen aanpassen.
            </p>
            <p>
              De afgelopen jaren heb ik veel infra ondernemers/ambachtslieden bijgestaan met dit soort vraagstukken. Van het maken van een goed plan voor de toekomst tot robotisering van straatwerk. Heel praktisch en direct toepasbaar.
            </p>
            <p>
              Veranderen is hard werken, wil je kunnen voortbestaan dan zul je wel moeten. Dit betekent veel voor je mensen en vraagt leiderschap van jou als ondernemer. Hier loods ik je doorheen recht voor je raap en met veel plezier.
            </p>
            <p className="text-blauw font-semibold text-base border-l-4 border-magenta pl-4 py-1">
              Vandaar Waardewerk, eigenwaarde door te werken en waarde leveren door het werk wat je doet, wat je ook doet. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
