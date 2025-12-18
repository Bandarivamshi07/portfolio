import "../styles/hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* LEFT CONTENT */}
      <div className="hero-left">
        <h1>
          Hi, I&apos;m <span className="highlight">Bandari Vamshi</span>
        </h1>

        <h2>Aspiring Software Developer</h2>

        <p>
          Building scalable full-stack applications and solving real-world
          problems using modern web technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View Projects
          </a>
          <a href="/resume.pdf" className="btn secondary" target="_blank">
            Download Resume
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <img src="/coding.png" alt="Bandari Vamshi" />
      </div>
    </section>
  );
}
