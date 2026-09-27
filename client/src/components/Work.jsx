import { useState, useEffect } from 'react';
import { getProjects } from '../services/api';
import WorkRow from './WorkRow';
import { useReveal } from '../hooks/useReveal';

function Work() {
  const [projects, setProjects] = useState([]);
  const { ref, inView } = useReveal();

  useEffect(() => {
    getProjects()
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="work" ref={ref} className={`block reveal ${inView ? 'in-view' : ''}`}>
      <div className="wrap">
        <div className="num-label">02 — Work</div>
        <h2>Things I'm building.</h2>

        {projects.length === 0 && (
          <p className="empty-state">Projects loading or none found — seed your database via POST /api/projects.</p>
        )}

        {projects.map((p, i) => (
          <WorkRow
            key={p._id}
            index={String(i + 1).padStart(2, '0')}
            title={p.title}
            org="Independent build"
            description={p.description}
            pills={p.techStack?.slice(0, 3) ?? []}
            liveUrl={p.liveUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Work;
