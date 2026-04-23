import { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface Props { onContact: () => void; }

export default function Nav({ onContact: _ }: Props) {
  const [open, setOpen] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  function scrollTo(id: string) {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setShowPopover(false);
      }
    }
    if (showPopover) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showPopover]);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-lijn">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/Waardewerk-logo.png" alt="Waardewerk" className="h-[52px] w-auto" />
          <span className="text-blauw" style={{ fontSize: 17, fontWeight: 500 }}>Waardewerk</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm text-grijs font-medium">
          <Link to="/diensten" className={`hover:text-blauw transition-colors ${location.pathname === '/diensten' ? 'text-blauw' : ''}`}>Diensten</Link>
          <button onClick={() => scrollTo('sociale-zaken')} className="hover:text-blauw transition-colors">Sociale zaken</button>
          <Link to="/sroi-monitor" className={`hover:text-blauw transition-colors ${location.pathname === '/sroi-monitor' ? 'text-blauw' : ''}`}>SROI Monitor</Link>
          <button onClick={() => scrollTo('over-ons')} className="hover:text-blauw transition-colors">Over ons</button>
          <button onClick={() => scrollTo('nieuws')} className="hover:text-blauw transition-colors">Nieuws</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-blauw transition-colors">Contact</button>
        </div>

        {/* CTA + popover */}
        <div className="hidden md:block relative" ref={popoverRef}>
          <button
            onClick={() => setShowPopover(p => !p)}
            className="bg-magenta hover:bg-[#a8005a] text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            Bel me!
          </button>

          {showPopover && (
            <div className="absolute right-0 top-full mt-2 w-60 bg-white rounded-2xl shadow-xl border border-lijn p-5 z-[100]">
              <p className="text-xs font-medium text-grijs mb-3">Direct contact</p>
              <a
                href="tel:0657448298"
                className="flex items-center gap-2 text-blauw font-medium text-sm hover:text-magenta transition-colors mb-2"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 57 44 82 98
              </a>
              <a
                href="mailto:ruud@waardewerk.org"
                className="flex items-center gap-2 text-blauw font-medium text-sm hover:text-magenta transition-colors"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                ruud@waardewerk.org
              </a>
            </div>
          )}
        </div>

        <button className="md:hidden text-blauw" onClick={() => setOpen(o => !o)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-lijn px-6 py-4 flex flex-col gap-4 text-sm font-medium text-grijs">
          <Link to="/diensten" onClick={() => setOpen(false)}>Diensten</Link>
          <button className="text-left" onClick={() => scrollTo('sociale-zaken')}>Sociale zaken</button>
          <Link to="/sroi-monitor" onClick={() => setOpen(false)}>SROI Monitor</Link>
          <button className="text-left" onClick={() => scrollTo('over-ons')}>Over ons</button>
          <button className="text-left" onClick={() => scrollTo('nieuws')}>Nieuws</button>
          <button className="text-left" onClick={() => scrollTo('contact')}>Contact</button>
          <div className="border-t border-lijn pt-3 flex flex-col gap-2">
            <p className="text-xs text-grijs">Direct contact</p>
            <a href="tel:0657448298" className="flex items-center gap-2 text-blauw font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              06 57 44 82 98
            </a>
            <a href="mailto:ruud@waardewerk.org" className="flex items-center gap-2 text-blauw font-medium">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ruud@waardewerk.org
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
