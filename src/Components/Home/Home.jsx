import "./Home.css";
import myFile from "../../static/Kaushal_Vishwakarma_Resume.pdf";

function Home() {
  const downloadResume = () => {
    const previewUrl = "https://drive.google.com/file/d/1n8rr2zgXUDQ8j68bLWhJeZyNSvJxZtLv/view?usp=sharing";
    const downloadUrl =
      "https://www.dropbox.com/s/xrrg9vi6f7fq1e9/Kaushal_Vishwakarma_Resume.pdf?dl=1";

    window.open(previewUrl, "_blank");
    window.location.href = downloadUrl;
  };
  return (
    <div id="home">
      <div className="left_container">
        <div style={{ marginBottom: "-12px" }}>
          <h1 style={{ fontFamily: "serif", fontSize: "30px" }}>
            Hello<span className="wave">👋</span>, My name is
          </h1>
        </div>
        <div
          style={{ fontSize: "22px", fontWeight: "900", marginBottom: "-10px" }}
        >
          <h1 style={{ marginBottom: "-23px" }}>Kaushal Ramesh</h1>
          <h1>Vishwakarma</h1>
        </div>
        <div
          style={{
            marginTop: "-30px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <h1>I am a</h1>
          <span className="profession">&nbsp;Full Stack Developer.</span>
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
          <a style={{ textDecoration: "none" }} href={myFile} target="blank">
            <button>
              Resume&nbsp;<i className="fa-solid fa-eye"></i>
            </button>
          </a>

          <button
            title="Download Resume"
            id="resume-button-2"
            style={{ width: "40px" }}
            onClick={downloadResume}
          >
            <i className="fa-solid fa-arrow-down"></i>
          </button>
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
