import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="nav-menu" style={{ backgroundColor: "black", color: "white" }}>
      <div style={{ marginBottom: "-20px", marginTop: "-15px" }}>
        <Link style={{ fontSize: "20px", color:"white",textDecoration:"none" }}>
          <h1>
            KAU<span style={{ color: "#4000ff" }}>SHAL</span>
          </h1>
        </Link>
      </div>

      <div className="navlink">
        <Link className="nav-link home">HOME</Link>
        <Link className="nav-link about">ABOUT</Link>
        <Link className="nav-link projects">PROJECT</Link>
        <Link className="nav-link github">GITHUB</Link>
        <Link className="nav-link skills">SKILLS</Link>
        <Link className="nav-link contact">CONTACT</Link>
        <Link className="nav-link resume">RESUME</Link>
      </div>
    </div>
  );
}

export default Navbar;
