import "../styles/education.css";

export default function Education() {
  return (
    <section id="education" className="education">
      <h2 className="section-title">Education</h2>

      <div className="education-card">
        <h3>B.Tech – Computer Science & Engineering<p className="cgpa">CGPA 6.85/10</p> </h3>
        
        <p className="college">SVS Group Of Institutions</p>
        <p className="year">2021 – 2025</p>
        <p className="desc">
          Focused on Data Structures, Algorithms, Web Development, and Core CS
          fundamentals. Built multiple full-stack projects alongside academics.
        </p>
      </div>
    </section>
  );
}
