import { useReveal } from '../hooks/useReveal';

function About() {
  const { ref, inView } = useReveal();

  return (
    <section id="about" ref={ref} className={`block reveal ${inView ? 'in-view' : ''}`}>
      <div className="wrap about-grid">
        <div className="about-label">
          <div className="num-label">01 — About</div>
        </div>
        <div className="about-content">
          <h2>Problem-first, not tutorial-first.</h2>
          <p>
            I'm Anuoluwa Odebiyi — a full-stack developer and student based in
            Lagos, Nigeria. I build software that solves real problems: fintech
            platforms, productivity tools, AI-powered systems, and whatever else
            needs to exist but doesn't yet.
          </p>
          <p>
            My stack is MERN (MongoDB, Express, React, Node.js) with applied AI
            on the side — not because those are trendy, but because they let me
            prototype fast and ship real things. Every project I build starts
            from a problem I've seen up close, not from a tutorial prompt.
          </p>
          <p>
            I'm always building — whether it's a fintech product, a developer
            tool, or something with AI at its core. The projects in my work
            section are a snapshot, not the full picture. If it's worth making,
            I'm probably already prototyping it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
