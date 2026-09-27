import { useReveal } from '../hooks/useReveal';

function Stats() {
  const { ref, inView } = useReveal();

  const stats = [
    { value: '02', label: 'Products in build' },
    { value: 'MERN', label: 'Primary stack' },
    { value: 'AI', label: 'Current focus' },
    { value: 'NG', label: 'Based in Nigeria' },
  ];

  return (
    <section ref={ref} className={`stats-section reveal ${inView ? 'in-view' : ''}`}>
      <div className="wrap stats-grid">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
