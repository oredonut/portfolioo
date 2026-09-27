function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <div className="badge">
            <span className="dot" /> Open to full-stack &amp; AI-engineering work
          </div>
          <div className="eyebrow">Anuoluwa Odebiyi</div>
          <h1>
            I design, build &amp;{' '}
            <span className="accent">ship real products.</span>
          </h1>
          <p>
            Full-stack developer and student in Nigeria, working across MERN and
            applied AI — from fintech platforms and spending tools to intelligent
            systems and the infrastructure underneath all of it.
          </p>
          <div className="hero-cta">
            <a className="btn-fill" href="#contact">Start a project →</a>
            <a className="btn-outline" href="#work">View work</a>
          </div>
        </div>
        <div className="photo">
           <img src="/you.jpg" alt="Anuoluwa Odebiyi" /> 
          <span className="initials">AO</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
