import "../styles/navbar.css";
import profile from "/profile.png"; // public folder image

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* LEFT SIDE */}
      <div className="nav-left">
        <img src={profile} alt="profile" className="nav-avatar" />
        <span className="nav-name">Bandari Vamshi</span>
      </div>

      {/* RIGHT SIDE */}
      <ul className="nav-links">
        <li>
          <a href="#home">
            <i className="fa-solid fa-house"></i> Home
          </a>
        </li>
        <li>
          <a href="#about">
            <i className="fa-solid fa-user"></i> About
          </a>
        </li>
        <li>
             <a href="#skills">
            <i className="fa-solid fa-laptop-code"></i> Skills
          </a>
        </li>
        <li>
          <a href="#projects">
            <i className="fa-solid fa-code"></i> Projects
          </a>
        </li>
        <li>
         
          <a href="#contact">
            <i className="fa-solid fa-envelope"></i> Connect
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
