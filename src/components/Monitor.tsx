export default function Monitor() {
  return (
    <section id="monitor" className="bg-blauw py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="eyebrow mb-4">SROI Monitor</p>
        <iframe
          src="https://sroi-monitor.vercel.app"
          width="100%"
          height="700"
          style={{ borderRadius: 16, border: 'none', display: 'block' }}
          title="SROI Monitor Nederland"
        />
      </div>
    </section>
  );
}
