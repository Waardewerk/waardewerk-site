const refs = [
  { quote: 'Referentie volgt binnenkort.', naam: 'Naam', rol: 'Functie · Organisatie' },
  { quote: 'Referentie volgt binnenkort.', naam: 'Naam', rol: 'Functie · Organisatie' },
  { quote: 'Referentie volgt binnenkort.', naam: 'Naam', rol: 'Functie · Organisatie' },
];

export default function Referenties() {
  return (
    <section className="bg-bg-alt py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow mb-3">Referenties</p>
        <h2 className="text-3xl font-medium text-blauw mb-12">Wat anderen zeggen</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {refs.map((r, i) => (
            <div key={i} className="bg-white border border-lijn rounded-2xl p-6 flex flex-col gap-4">
              {/* Placeholder foto */}
              <div className="w-12 h-12 rounded-full bg-lijn" />
              <p className="text-grijs text-sm italic leading-relaxed flex-1">"{r.quote}"</p>
              <div>
                <div className="text-blauw font-medium text-sm">{r.naam}</div>
                <div className="text-grijs text-xs">{r.rol}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
