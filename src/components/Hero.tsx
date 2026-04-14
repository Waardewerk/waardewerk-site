interface Props { onContact: () => void; }

export default function Hero({ onContact: _ }: Props) {
  return (
    <section
      className="h-screen"
      style={{
        backgroundImage: 'url(/hero-breed.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div
        className="h-full flex items-center px-6 md:px-20 py-16"
        style={{
          background: 'linear-gradient(to right, rgba(26,46,69,0.92) 0%, rgba(26,46,69,0.75) 45%, rgba(26,46,69,0.20) 75%, transparent 100%)',
        }}
      >
        <h1
          className="max-w-[640px]"
          style={{ fontSize: 44, fontWeight: 500, color: '#ffffff', lineHeight: 1.25 }}
        >
          De ondernemer van nu zet de mens centraal, is sociaal en omarmt nieuwe technologie.
          <br />
          Maak kennis met <span style={{ color: '#F9A8D4' }}>Waardewerk</span>
        </h1>
      </div>
    </section>
  );
}
