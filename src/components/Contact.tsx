import { useState } from 'react';

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<FormState>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch('https://formsubmit.co/ajax/ruudmblom@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          voornaam: data.get('voornaam'),
          achternaam: data.get('achternaam'),
          bedrijf: data.get('bedrijf') || '',
          email: data.get('email'),
          gemeente: data.get('gemeente') || '',
          vraag: data.get('vraag'),
          _subject: `Nieuwe aanvraag van ${data.get('voornaam')} ${data.get('achternaam')}`,
          _captcha: 'false',
          _template: 'table',
        }),
      });
      if (res.ok) { setStatus('sent'); form.reset(); }
      else setStatus('error');
    } catch { setStatus('error'); }
  }

  return (
    <section id="contact" className="bg-magenta-licht py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
        <div>
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="text-3xl font-medium text-blauw leading-snug mb-5">Samen aan de slag?</h2>
          <p className="text-grijs leading-relaxed mb-8">
            Vraag een gratis SROI-scan aan en ontdek wat Waardewerk voor uw bedrijf kan betekenen. We reageren binnen één werkdag.
          </p>
          <div className="flex flex-col gap-4 text-sm">
            {[
              { icon: '✉', label: 'E-mail', val: 'info@waardewerk.org', href: 'mailto:info@waardewerk.org' },
              { icon: '📍', label: 'Vestiging', val: "'s-Hertogenbosch", href: undefined },
              { icon: '🌐', label: 'Website', val: 'waardewerk.org', href: 'https://waardewerk.org' },
            ].map(c => (
              <div key={c.label} className="flex items-center gap-3">
                <span className="text-lg">{c.icon}</span>
                <div>
                  <div className="text-grijs text-xs">{c.label}</div>
                  {c.href
                    ? <a href={c.href} className="text-blauw font-medium hover:text-magenta transition-colors">{c.val}</a>
                    : <span className="text-blauw font-medium">{c.val}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-lijn p-7">
          {status === 'sent' ? (
            <div className="flex flex-col items-center text-center py-8 gap-3">
              <div className="w-12 h-12 rounded-full bg-magenta-licht flex items-center justify-center">
                <svg className="w-6 h-6 text-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-blauw font-medium">Bericht ontvangen\!</h3>
              <p className="text-grijs text-sm">We reageren binnen één werkdag.</p>
              <button onClick={() => setStatus('idle')} className="mt-2 text-sm text-magenta font-medium hover:underline">Nieuw bericht sturen</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-blauw mb-1">Voornaam</label>
                  <input name="voornaam" required type="text" placeholder="Jan"
                    className="w-full px-3 py-2.5 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-blauw mb-1">Achternaam</label>
                  <input name="achternaam" required type="text" placeholder="de Vries"
                    className="w-full px-3 py-2.5 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-blauw mb-1">Bedrijfsnaam</label>
                <input name="bedrijf" type="text" placeholder="Uw bedrijf BV"
                  className="w-full px-3 py-2.5 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30" />
              </div>
              <div>
                <label className="block text-xs font-medium text-blauw mb-1">E-mailadres</label>
                <input name="email" required type="email" placeholder="u@bedrijf.nl"
                  className="w-full px-3 py-2.5 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30" />
              </div>
              <div>
                <label className="block text-xs font-medium text-blauw mb-1">Gemeente (waar actief)</label>
                <input name="gemeente" type="text" placeholder="Bijv. Rotterdam, Eindhoven"
                  className="w-full px-3 py-2.5 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30" />
              </div>
              <div>
                <label className="block text-xs font-medium text-blauw mb-1">Uw vraag</label>
                <textarea name="vraag" required rows={3} placeholder="Wat kunnen we voor u betekenen?"
                  className="w-full px-3 py-2.5 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30 resize-none" />
              </div>
              {status === 'error' && <p className="text-red-500 text-xs">Er ging iets mis. Stuur een e-mail naar info@waardewerk.org.</p>}
              <button type="submit" disabled={status === 'sending'}
                className="w-full bg-magenta hover:bg-[#a8005a] disabled:opacity-60 text-white font-medium py-3.5 rounded-full transition-colors text-sm">
                {status === 'sending' ? 'Versturen...' : 'Gratis scan aanvragen \u2192'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
