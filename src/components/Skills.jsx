import "../styles/skills.css";

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-grid">

        <div className="skill-box">
          <h3>Programming</h3>
          <p>Java, JavaScript (ES6+)</p>
        </div>

        <div className="skill-box">
          <h3>Frontend</h3>
          <p>HTML5, CSS, React.js, Redux</p>
        </div>

        <div className="skill-box">
          <h3>Backend</h3>
          <p>Node.js, Express.js</p>
        </div>

        <div className="skill-box">
          <h3>Databases</h3>
          <p>MySQL, MongoDB</p>
        </div>

  <div className="skill-box">
      <h3>DevOps & Cloud</h3>
      <p>Docker, CI/CD Pipelines, Kubernetes</p>
    </div>
        <div className="skill-box">
          <h3>Core CS Concepts</h3>
          <p>DSA, OOPS, DBMS, Computer Networks</p>
        </div>

        <div className="skill-box">
          <h3>Tools</h3>
          <p>Git, GitHub, VS Code, Postman</p>
        </div>

      </div>
    </section>
  );
}
