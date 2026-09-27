import { useState } from 'react';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="wrap nav-inner">
        <a href="#" className="mark">Anuoluwa Odebiyi</a>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>

        <div className={`links ${open ? 'open' : ''}`}>
          <a href="#about" onClick={() => setOpen(false)}>About</a>
          <a href="#work" onClick={() => setOpen(false)}>Work</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
          <a className="cta" href="#contact" onClick={() => setOpen(false)}>Let's talk</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
