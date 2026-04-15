import { useState, useEffect } from 'react';

type DownloadChoice = 'whitepaper' | 'infographic';
type FormState = 'idle' | 'sending' | 'sent' | 'error';

const DOWNLOADS: Record<DownloadChoice, { label: string; file: string }> = {
  whitepaper: { label: 'Whitepaper', file: '/Whitepaper.pdf' },
  infographic: { label: 'Infographic', file: '/two_infographic.pdf' },
};

interface Props {
  open: boolean;
  onClose: () => void;
  initialChoice?: DownloadChoice;
}

export default function LeadCaptureModal({ open, onClose, initialChoice = 'whitepaper' }: Props) {
  const [choice, setChoice] = useState<DownloadChoice>(initialChoice);
  const [status, setStatus] = useState<FormState>('idle');

  useEffect(() => {
    if (open) {
      setChoice(initialChoice);
      setStatus('idle');
    }
  }, [open, initialChoice]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    data.append('download', DOWNLOADS[choice].label);
    try {
      const res = await fetch('https://formspree.io/f/xwpodqvj', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  const dl = DOWNLOADS[choice];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.55)' }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-2xl p-6 w-full max-w-md relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-grijs hover:text-blauw transition-colors"
          aria-label="Sluiten"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === 'sent' ? (
          <div className="flex flex-col items-center text-center gap-4 py-6">
            <div className="w-12 h-12 rounded-full bg-magenta-licht flex items-center justify-center">
              <svg className="w-6 h-6 text-magenta" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-medium text-blauw mb-1">Aanvraag ontvangen!</p>
              <p className="text-sm text-grijs mb-4">We sturen je de {dl.label.toLowerCase()} zo snel mogelijk toe.</p>
            </div>
            <a
              href={dl.file}
              download
              className="inline-flex items-center gap-2 bg-magenta hover:bg-[#a8005a] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download {dl.label.toLowerCase()}
            </a>
          </div>
        ) : (
          <>
            <div className="flex gap-2 mb-4">
              {(['whitepaper', 'infographic'] as DownloadChoice[]).map(c => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setChoice(c)}
                  className={`flex-1 py-2 text-sm font-medium rounded-xl transition-colors ${
                    choice === c
                      ? 'bg-magenta text-white'
                      : 'bg-magenta-licht text-magenta hover:bg-magenta/20'
                  }`}
                >
                  {DOWNLOADS[c].label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <h3 className="font-medium text-blauw mb-1">Ontvang de {dl.label.toLowerCase()} gratis</h3>
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
                <label className="block text-xs font-medium text-blauw mb-1">Zakelijk e-mailadres</label>
                <input name="email" required type="email" className="w-full px-3 py-2 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30" />
              </div>
              <div>
                <label className="block text-xs font-medium text-blauw mb-1">Bedrijfsnaam</label>
                <input name="bedrijf" required type="text" className="w-full px-3 py-2 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30" />
              </div>
              <div>
                <label className="block text-xs font-medium text-blauw mb-1">Functie</label>
                <select name="functie" required className="w-full px-3 py-2 text-sm border border-lijn rounded-xl focus:outline-none focus:ring-2 focus:ring-magenta/30 bg-white">
                  <option value="">Selecteer...</option>
                  <option>Directeur / eigenaar</option>
                  <option>Manager / teamleider</option>
                  <option>HR / P&O</option>
                  <option>Inkoop / aanbesteding</option>
                  <option>Gemeente / overheid</option>
                  <option>Anders</option>
                </select>
              </div>
              <label className="flex items-start gap-2 text-xs text-grijs cursor-pointer">
                <input name="akkoord" required type="checkbox" className="mt-0.5 accent-magenta" />
                <span>Ik ga akkoord met de verwerking van mijn gegevens om de {dl.label.toLowerCase()} toe te sturen.</span>
              </label>
              {status === 'error' && <p className="text-red-500 text-xs">Er ging iets mis. Probeer opnieuw.</p>}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-magenta hover:bg-[#a8005a] disabled:opacity-60 text-white font-medium py-3 rounded-full transition-colors text-sm mt-1"
              >
                {status === 'sending' ? 'Versturen…' : `${dl.label} ontvangen →`}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
