const logos = [
  { src: '/Vanmeerlogo.png',   alt: 'Van Meer' },
  { src: '/Kvdmlogo.png',      alt: 'KVDM' },
  { src: '/Bamlogo.png',       alt: 'BAM' },
  { src: '/Tudelftlogo.png',   alt: 'TU Delft' },
  { src: '/Robohouselogo.jpg', alt: 'RoboHouse' },
];

const track = [...logos, ...logos];

export default function LogoCarrousel() {
  return (
    <div className="bg-white border-b border-lijn py-5 px-6">
      <div className="max-w-6xl mx-auto flex items-center gap-6">
        <span className="text-sm text-grijs font-medium flex-shrink-0">Actief met:</span>
        <div className="relative overflow-hidden flex-1">
          {/* Fade-randen */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-10 z-10"
            style={{ background: 'linear-gradient(to right, white, transparent)' }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-10 z-10"
            style={{ background: 'linear-gradient(to left, white, transparent)' }} />

          <div className="flex animate-marquee" style={{ width: 'max-content' }}>
            {track.map((logo, i) => (
              <div key={i} className="flex items-center justify-center mx-8 flex-shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-7 w-auto object-contain transition-all duration-300"
                  style={{ filter: 'grayscale(100%) opacity(0.4)' }}
                  onMouseEnter={e => (e.currentTarget.style.filter = 'grayscale(0%) opacity(1)')}
                  onMouseLeave={e => (e.currentTarget.style.filter = 'grayscale(100%) opacity(0.4)')}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
