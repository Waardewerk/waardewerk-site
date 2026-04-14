import { useState } from 'react';

interface Props { onClose: () => void; }
type FormState = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactModal({ onClose }: Props) {
  const [status, setStatus] = useState<FormState>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch('https://formspree.io/f/xwpodqvj', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch { setStatus('error'); }
  }

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-lijn">
          <div>
            <h2 className="text-lg font-medium text-blauw">Gratis SROI-scan aanvragen</h2>
            <p className="text-sm text-grijs mt-0.5">We reageren binnen één werkdag</p>
          </div>
          <button onClick={onClose} className="text-grijs hover:text-blauw p-1 rounded-lg hover:bg-bg-alt transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {status === 'sent' ? (
          <div className="px-6 py-10 flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-full bg-magenta-licht flex items-center justify-center">
              <svg className="w-6 h-6 text-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-medium text-blauw">Aanvraag ontvangen!</p>
            <p className="text-sm text-grijs">We nemen binnen één werkdag contact op.</p>
            <button onClick={onClose} className="mt-2 px-5 py-2 bg-magenta text-white text-sm font-medium rounded-full hover:bg-[#a8005a] transition-colors">Sluiten</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-5 flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-blauw mb-1">Voornaam</label>
                <input name="voornaam" required type="text" className="w-full px-3 py-2 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30" />
              </div>
              <div>
                <label className="block text-xs font-medium text-blauw mb-1">Achternaam</label>
                <input name="achternaam" required type="text" className="w-full px-3 py-2 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30" />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-blauw mb-1">E-mailadres</label>
              <input name="email" required type="email" className="w-full px-3 py-2 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30" />
            </div>
            <div>
              <label className="block text-xs font-medium text-blauw mb-1">Bedrijfsnaam</label>
              <input name="bedrijf" type="text" className="w-full px-3 py-2 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30" />
            </div>
            <div>
              <label className="block text-xs font-medium text-blauw mb-1">Vraag</label>
              <textarea name="vraag" required rows={3} className="w-full px-3 py-2 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30 resize-none" />
            </div>
            {status === 'error' && <p className="text-red-500 text-xs">Er ging iets mis. Probeer opnieuw.</p>}
            <button type="submit" disabled={status === 'sending'}
              className="w-full bg-magenta hover:bg-[#a8005a] disabled:opacity-60 text-white font-medium py-3 rounded-full transition-colors text-sm mt-1">
              {status === 'sending' ? 'Versturen…' : 'Scan aanvragen →'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
