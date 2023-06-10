import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div id="nav-menu" style={{ backgroundColor: "black", color: "white" }}>
      <div>
        <h1>
          KAU<span style={{ color: "#3500D3" }}>SHAL</span>
        </h1>
      </div>

      <div className="navlink">
        <Link className="nav-link home">HOME</Link>
        <Link className="nav-link about">ABOUT</Link>
        <Link className="nav-link projects">PROJECT</Link>
        <Link>GITHUB</Link>
        <Link className="nav-link skills">SKILLS</Link>
        <Link className="nav-link contact">CONTACT</Link>
        <Link className="nav-link resume">RESUME</Link>
      </div>
    </div>
  );
}

export default Navbar;
