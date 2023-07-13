import "./Navbar.css";
import { Link } from "react-router-dom";
import myFile from "../../static/Kaushal-Vishwakarma-Resume.pdf";
import { useState, useEffect } from "react";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480); // Adjust the breakpoint according to your needs
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const downloadResume = () => {
    const previewUrl =
      "https://drive.google.com/file/d/1Ij3goZ8PSCdvsNC6MQj030UuLtlbzL48/view?usp=sharing";
    const downloadUrl =
      "https://www.dropbox.com/scl/fi/pctnskkbwtfoabg2zdxqb/Kaushal-Vishwakarma-Resume.pdf?rlkey=yxzx344zofzihuz5y04u3q78l&dl=1";

    window.open(previewUrl, "_blank");
    window.location.href = downloadUrl;
  };
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
      <div
        className="mynamelogo"
        style={{ marginBottom: "-20px", marginTop: "-15px" }}
      >
        <Link
          style={{ color: "white", textDecoration: "none" }}
          className="mynamestyle"
        >
          <h1>
            KAU<span style={{ color: "#4000ff" }}>SHAL</span>
          </h1>
        </Link>
      </div>
      {isMobile ? (
        <Mobilemenu />
      ) : (
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

          <button
            style={{
              fontSize: "17px",
              fontWeight: "600",
              border: "none",
              backgroundColor: "black",
            }}
            id="resume-button-1"
            onClick={downloadResume}
            className="nav-link resume"
          >
            RESUME
          </button>
        </div>
      )}
    </div>
  );
}

function Mobilemenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mobile-menu">
      <button
        className="menu-button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <i
          class="fa-solid fa-bars"
          style={{ color: "white", fontSize: "25px" }}
        ></i>
      </button>
      {isOpen && (
        <div className="mobile-menu-links">
          <div>
            <a
              href="#home"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              HOME
            </a>
          </div>
          <div>
            <a
              href="#about"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              ABOUT
            </a>
          </div>
          <div>
            <a
              href="#projects"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              PROJECT
            </a>
          </div>
          <div>
            <a
              href="#githuboverview"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              GITHUB
            </a>
          </div>
          <div>
            <a
              href="#skills"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              SKILLS
            </a>
          </div>
          <div>
            <a
              href="#contact"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              CONTACT
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
