import "../styles/about.css";

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>

      {/* 🔥 IMPORTANT WRAPPER */}
      <div className="about-container">
        {/* LEFT IMAGE */}
        <div className="about-image">
          <img src="/profile.png" alt="Bandari Vamshi" />
        </div>

        {/* RIGHT TEXT */}
        <div className="about-content">
          <p>
            I&apos;m <span className="highlight">Bandari Vamshi</span>, a
            passionate Full Stack Developer skilled in the{" "}
            <span className="highlight">MERN stack</span>. I enjoy building
            real-world applications, writing clean code, and continuously
            improving my problem-solving skills.
          </p>

          <p>
            I have built projects like <strong>E-Commerce Website</strong>,{" "}
            <strong>Zerodha Clone</strong>, and{" "}
            <strong>Wanderlust</strong>, focusing on scalability, performance,
            and user experience.
          </p>

          <p>
            Currently, I am strengthening my{" "}
            <strong>Java & DSA</strong> skills while applying for full-stack
            developer roles.
          </p>
        </div>
      </div>
    </section>
  );
}
