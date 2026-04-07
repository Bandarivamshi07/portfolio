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
    I&apos;m <span className="highlight">Bandari Vamshi</span>, a results-driven 
    <strong> Full Stack Developer</strong> specializing in the 
    <span className="highlight"> MERN Stack (MongoDB, Express.js, React.js, Node.js)</span>. 
    I build scalable, high-performance web applications with clean architecture 
    and optimized backend systems.
  </p>

  <p>
    I have hands-on experience developing real-world projects like 
    <strong> E-Commerce Platform</strong>, <strong>Zerodha Clone</strong>, and 
    <strong> Wanderlust</strong>, implementing 
    <strong> REST APIs, authentication (JWT), database optimization</strong>, 
    and responsive UI design.
  </p>

  <p>
    I am currently enhancing my expertise in 
    <strong> Data Structures & Algorithms (Java)</strong>, 
    <strong> System Design</strong>, and 
    <strong> scalable backend development</strong> to build production-ready applications 
    and contribute effectively to modern engineering teams.
  </p>
</div>
      </div>
    </section>
  );
}
