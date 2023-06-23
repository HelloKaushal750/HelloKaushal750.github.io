import "./Navbar.css";
import { Link } from "react-router-dom";
import myFile from "../../static/Kaushal_Vishwakarma_Resume.pdf";

function Navbar() {
  return (
    <div
      id="nav-menu"
      style={{
        backgroundColor: "black",
        color: "white",
        opacity: "1",
        position: "fixed",
        width: "94.8%",
      }}
    >
      <div style={{ marginBottom: "-20px", marginTop: "-15px" }}>
        <Link
          style={{ fontSize: "20px", color: "white", textDecoration: "none" }}
        >
          <h1>
            KAU<span style={{ color: "#4000ff" }}>SHAL</span>
          </h1>
        </Link>
      </div>

      <div className="navlink">
        <a className="nav-link home" href="#home">
          HOME
        </a>
        <a className="nav-link about" href="#about">
          ABOUT
        </a>
        <a className="nav-link projects" href="#projects">
          PROJECT
        </a>
        <a className="nav-link github" href="#githuboverview">
          GITHUB
        </a>
        <a className="nav-link skills" href="#skills">
          SKILLS
        </a>
        <a className="nav-link contact" href="#contact">
          CONTACT
        </a>
        <a
          className="nav-link resume"
          href={myFile}
          download
          target="blank"
        >
          <button
            style={{
              fontSize: "17px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "black",
            }}
            onClick={()=>window.open(myFile,"_blank")}
            id="resume-button-1"
          >
            RESUME
          </button>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
