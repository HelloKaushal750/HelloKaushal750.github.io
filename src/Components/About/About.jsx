import "./About.css";

function About() {
  return (
    <div id="about" className="about section">
      <div style={{ display: "flex", justifyContent: "center", paddingTop:"20px" }}>
        <h1 style={{ fontSize: "40px", fontWeight: "600", color: "#4000ff" }}>
          About&nbsp;<span style={{ color: "white" }}>Me</span>
        </h1>
      </div>
      <div className="about_container">
        <div className="left_about">
          <img src="Images/manicon.png" alt="" style={{ height:"450px"}} />
        </div>
        <div className="right_about" id="user-detail-intro">
          <div style={{display:'flex',gap:'10px'}}>
            <div>
              <i
                className="fa-solid fa-circle-check"
                style={{ color: "#4000ff" }}
              ></i>
            </div>
            <div>
              Hello, My name is <span style={{fontWeight:"600"}} id="user-detail-name">Kaushal Ramesh Vishwakarma</span> and I
              enjoy creating thing that live on the internet.
            </div>
          </div>
          <div style={{display:'flex',gap:'10px'}}>
            <div>
              <i
                className="fa-solid fa-circle-check"
                style={{ color: "#4000ff" }}
              ></i>
            </div>
            <div>
              Quick learner and an aspiring full-stack developer with core
              knowledge of MERN stack technology.
            </div>
          </div>
          <div style={{display:'flex',gap:'10px'}}>
            <div>
              <i
                className="fa-solid fa-circle-check"
                style={{ color: "#4000ff" }}
              ></i>
            </div>
            <div>
              <span style={{fontWeight:"600"}}>Full Stack Developer</span> with hands on experience in
              building React Apps. Works efficiently both in frontend (React.js) as well as
              backend (Node.js, Express.js, MongoDB) and proficient in Data Structure and Algorithms with good
              problem solving skills.
            </div>
          </div>
          <div style={{display:'flex',gap:'10px'}}>
            <div>
              <i
                className="fa-solid fa-circle-check"
                style={{ color: "#4000ff" }}
              ></i>
            </div>
            <div>
              I built 5 major projects and some mini projects. Learned a great
              deal about teamwork, leadership, and communication. After months
              of rigorous training, here I am looking for an opportunity as a
              full Stack web Developer.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
