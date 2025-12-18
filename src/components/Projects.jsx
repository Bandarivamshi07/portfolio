import "../styles/projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <img src="/e-commerce.png" alt="E-Commerce Website" />

          <div className="project-content">
            <h3>E-Commerce Website</h3>
            <p>
              Full-stack MERN e-commerce application with user authentication,
              product management, cart, and secure checkout.
              Designed with focus on scalability and clean UI.
            </p>

            <div className="tech-stack">
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express.js</span>
            </div>

            <div className="project-links">
              <a
                href="https://e-commerce-one-mauve-55.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/Bandarivamshi07/E-commerce"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img src="/zerodha.png" alt="Zerodha Clone" />

          <div className="project-content">
            <h3>Zerodha Clone</h3>
            <p>
              A responsive trading platform UI clone built with React,
              featuring dashboards, charts, and authentication flow.
              Focused on performance and real-world fintech UI experience.
            </p>

            <div className="tech-stack">
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express.js</span>
            </div>

            <div className="project-links">
              <a
                href="https://major-project-0odu.onrender.com/listings"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/Bandarivamshi07/Zerodha-Clone"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img src="/wanderlust.png" alt="Wanderlust" />

          <div className="project-content">
            <h3>Wanderlust</h3>
            <p>
              Airbnb-style travel booking web app using MERN stack,
              with listings, reviews, and CRUD functionality.
              Emphasis on user experience and responsive design.
            </p>

            <div className="tech-stack">
              <span>JavaScript</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Express.js</span>
            </div>

            <div className="project-links">
              <a
                href="https://zerodha-clone-bay.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
              <a
                href="https://github.com/Bandarivamshi07/wanderlust-fullstack-project"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
