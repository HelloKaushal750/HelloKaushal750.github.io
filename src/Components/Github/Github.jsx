import "./Github.css";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <div id="githuboverview">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "60px",
        }}
      >
        <h1 style={{ fontSize: "40px", fontWeight: "600", color: "#4000ff" }}>
          Github&nbsp;<span style={{ color: "white" }}>Overview</span>
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="github_data"
      >
        <div
          style={{ height: "200px" }}
          id="github-stats-card"
          src="https://github-readme-stats.vercel.app/api?username=HelloKaushal750&show_icons=true&theme=tokyonight"
        >
          <img
            src="https://github-readme-stats.vercel.app/api?username=HelloKaushal750&show_icons=true&theme=tokyonight"
            alt=""
          />
        </div>
        <div
          id="github-streak-stats"
          style={{ height: "180px" }}
          src="https://github-readme-streak-stats.herokuapp.com/?user=HelloKaushal750&show_icons=true&theme=tokyonight"
        >
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=HelloKaushal750&show_icons=true&theme=tokyonight"
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10px",
          paddingLeft: "45px",
        }}
        className="github_data"
      >
        <div
          style={{
            border: "1px solid #4000ff",
            padding: "5px",
            width: "45%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="react-activity-calendar"
            style={{
              height: "180px",
              border: "1px solid white",
              backgroundColor: "#1a1b27",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <GitHubCalendar
              colorScheme="light"
              style={{
                color: "white",
                width: "90%",
                padding: "20px",
                borderRadius: "5px",
              }}
              username="hellokaushal750"
            />
          </div>
        </div>
        <div
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=HelloKaushal750&layout=compact&show_icons=true&theme=tokyonight"
          style={{ height: "262px", width: "47%", padding: "5px" }}
        >
          <img
            style={{
              backgroundColor: "#1a1b27",
              width: "100%",
              height: "100%",
            }}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=HelloKaushal750&layout=compact&show_icons=true&theme=tokyonight"
            alt=""
          />
        </div>
      </div>
      <div className="hours" style={{display:"flex",width:"80%",justifyContent:"center",gap:"30px"}}>
        <div>
          <h1 style={{color:"#4000ff",marginBottom:"-15px"}}>300+</h1>
          <h1 style={{marginBottom:"-5px"}}>Hours</h1>
          <p>Coding</p>
        </div>
        <div>
          <h1 style={{color:"#4000ff",marginBottom:"-15px"}}>4+</h1>
          <h1 style={{marginBottom:"-5px"}}>Projects</h1>
          <p>Done</p>
        </div>
        <div>
          <h1 style={{color:"#4000ff",marginBottom:"-15px"}}>500+</h1>
          <h1 style={{marginBottom:"-5px"}}>DSA</h1>
          <p>Solved(OJ)</p>
        </div>
        <div>
          <h1 style={{color:"#4000ff",marginBottom:"-15px"}}>250+</h1>
          <h1 style={{marginBottom:"-5px"}}>Hours</h1>
          <p>DSA</p>
        </div>
      </div>
    </div>
  );
}

export default Github;
