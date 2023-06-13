import "./Home.css";
import myFile from "../../static/Kaushal_Vishwakarma_Resume.pdf";

function Home() {
  return (
    <div id="home">
      <div className="left_container">
        <div style={{ marginBottom: "-12px" }}>
          <h1 style={{ fontFamily: "serif", fontSize: "30px" }}>
            Hello<span className="wave">👋</span>, My name is
          </h1>
        </div>
        <div
          id="user-detail-name"
          style={{ fontSize: "22px", fontWeight: "900", marginBottom: "-10px" }}
        >
          <h1 style={{ marginBottom: "-23px" }}>Kaushal Ramesh</h1>
          <h1>Vishwakarma</h1>
        </div>
        <div>
          <h1>
            I am a{" "}
            <span style={{ color: "#4000ff" }}>Full Stack Developer</span>
          </h1>
        </div>
        <div
          style={{ display: "flex", gap: "10px" }}
          className="logo_container"
        >
          <a
            target="blank"
            href="https://www.linkedin.com/in/kaushalvish/"
            title="kaushalvish"
          >
            <div className="linked_icon">
              <i className="fa-brands fa-linkedin" id="linkedin"></i>
            </div>
          </a>

          <a
            target="blank"
            href="https://github.com/HelloKaushal750"
            title="HelloKaushal750"
          >
            <div className="github_icon">
              <i className="fa-brands fa-github" id="github"></i>
            </div>
          </a>
          <a href="mailto:kaushalv079@gmail.com" title="kaushalv079@gmail.com">
            <div className="mail_icon">
              <i className="fa-solid fa-envelope" id="mail"></i>
            </div>
          </a>
          <a href="tel:8369515207" title="Call or WhatsApp">
            <div className="phone_icon">
              <i className="fa-solid fa-phone-volume" id="phone"></i>
            </div>
          </a>
        </div>
        <div className="resume-section">
          <a
            style={{ textDecoration: "none" }}
            href={myFile}
            target="blank"
            id="resume-link-1"
          >
            <button id="resume-button-1">
              Resume&nbsp;<i className="fa-solid fa-eye"></i>
            </button>
          </a>
          <a
            href={myFile}
            download
            id="resume-link-2"
            style={{ textDecoration: "none" }}
          >
            <button
              title="Download Resume"
              id="resume-button-2"
              style={{ width: "40px" }}
            >
              <i className="fa-solid fa-arrow-down"></i>
            </button>
          </a>
        </div>
      </div>
      <div className="right_container">
        <div className="profile_container">
          <img className="home-img" src="Profile.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
