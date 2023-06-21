import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="nav-menu" style={{ backgroundColor: "black", color: "white", opacity:"1", position:"fixed", width:"94.8%"}}>
      <div style={{ marginBottom: "-20px", marginTop: "-15px" }}>
        <Link style={{ fontSize: "20px", color:"white",textDecoration:"none" }}>
          <h1>
            KAU<span style={{ color: "#4000ff" }}>SHAL</span>
          </h1>
        </Link>
      </div>

      <div className="navlink">
        <a className="nav-link home" href="#home">HOME</a>
        <a className="nav-link about" href='#about'>ABOUT</a>
        <a className="nav-link projects" href="#projects">PROJECT</a>
        <a className="nav-link github" href="#githuboverview">GITHUB</a>
        <a className="nav-link skills" href="#skills">SKILLS</a>
        <a className="nav-link contact" href="#contact">CONTACT</a>
        <a className="nav-link resume" href="resume_view">RESUME</a>
      </div>
    </div>
  );
}

export default Navbar;
