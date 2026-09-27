function Marquee() {
  const items = [
    'MongoDB', 'Express', 'React', 'Node.js',
    'FastAPI', 'n8n', 'Firebase', 'AI Engineering',
  ];

  // Duplicate items for seamless infinite scroll
  const track = [...items, ...items];

  return (
    <section className="marquee-section">
      <div className="marquee-track">
        {track.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </section>
  );
}

export default Marquee;
