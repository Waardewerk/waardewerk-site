const partners = ['WSP Rijnmond', 'Stichting Mens en Verkeer', 'Baanbrekers', 'Werk in Zicht', 'UWV'];

export default function LogoBalk() {
  return (
    <div className="bg-white border-b border-lijn py-5 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-6">
        <span className="text-sm text-grijs font-medium flex-shrink-0">Actief met:</span>
        <div className="flex flex-wrap gap-x-8 gap-y-2">
          {partners.map(p => (
            <span key={p} className="text-sm text-grijs/70 font-medium">{p}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
