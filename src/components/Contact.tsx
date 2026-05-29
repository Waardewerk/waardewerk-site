import { useState } from 'react';

type FormState = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<FormState>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch('https://formspree.io/f/mgoqdjeq', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (res.ok) {
      setStatus('sent');
      form.reset();
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-magenta-licht py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
        <div>
          <p className="eyebrow mb-3">Contact</p>
          <h2 className="text-3xl font-medium text-blauw leading-snug mb-5">Samen aan de slag?</h2>
          <p className="text-grijs leading-relaxed mb-8">
            Bel of mail mij gerust. Ik reageer binnen één werkdag.
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <p className="text-blauw font-semibold">Ruud Blom</p>
            <a href="tel:0657448298" className="text-blauw hover:text-magenta transition-colors font-medium">06 57 44 82 98</a>
            <a href="mailto:ruud@waardewerk.org" className="text-blauw hover:text-magenta transition-colors font-medium">ruud@waardewerk.org</a>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-lijn p-7">
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
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-magenta hover:bg-[#a8005a] disabled:opacity-60 text-white font-medium py-3.5 rounded-full transition-colors text-sm"
            >
              {status === 'sending' ? 'Verzenden...' : 'Verzenden'}
            </button>
            {status === 'sent' && (
              <p className="text-sm text-center text-green-600 font-medium">
                Bedankt! Ik neem zo snel mogelijk contact op.
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm text-center text-red-600">
                Er ging iets mis. Probeer het opnieuw of mail naar ruud@waardewerk.org
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
