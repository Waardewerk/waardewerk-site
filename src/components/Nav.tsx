import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface Props { onContact: () => void; }

export default function Nav({ onContact }: Props) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  function scrollTo(id: string) {
    if (location.pathname !== '/') {
      navigate('/');
      // wait for navigation then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-lijn">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo + naam */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/Waardewerk-logo.png" alt="Waardewerk" className="h-[52px] w-auto" />
          <span className="text-blauw" style={{ fontSize: 17, fontWeight: 500 }}>Waardewerk</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7 text-sm text-grijs font-medium">
          <Link to="/diensten" className={`hover:text-blauw transition-colors ${location.pathname === '/diensten' ? 'text-blauw' : ''}`}>Diensten</Link>
          <button onClick={() => scrollTo('sociale-zaken')} className="hover:text-blauw transition-colors">Sociale zaken</button>
          <Link to="/sroi-monitor" className={`hover:text-blauw transition-colors ${location.pathname === '/sroi-monitor' ? 'text-blauw' : ''}`}>SROI Monitor</Link>
          <button onClick={() => scrollTo('over-ons')} className="hover:text-blauw transition-colors">Over ons</button>
          <button onClick={() => scrollTo('nieuws')} className="hover:text-blauw transition-colors">Nieuws</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-blauw transition-colors">Contact</button>
        </div>

        {/* CTA */}
        <button
          onClick={onContact}
          className="hidden md:inline-flex bg-magenta hover:bg-[#a8005a] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
        >
          Gratis scan aanvragen
        </button>

        {/* Mobile hamburger */}
        <button className="md:hidden text-blauw" onClick={() => setOpen(o => !o)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-lijn px-6 py-4 flex flex-col gap-4 text-sm font-medium text-grijs">
          <Link to="/diensten" onClick={() => setOpen(false)}>Diensten</Link>
          <button className="text-left" onClick={() => scrollTo('sociale-zaken')}>Sociale zaken</button>
          <Link to="/sroi-monitor" onClick={() => setOpen(false)}>SROI Monitor</Link>
          <button className="text-left" onClick={() => scrollTo('over-ons')}>Over ons</button>
          <button className="text-left" onClick={() => scrollTo('nieuws')}>Nieuws</button>
          <button className="text-left" onClick={() => scrollTo('contact')}>Contact</button>
          <button
            onClick={() => { setOpen(false); onContact(); }}
            className="bg-magenta text-white rounded-full py-2.5 font-medium"
          >
            Gratis scan aanvragen
          </button>
        </div>
      )}
    </nav>
  );
}
