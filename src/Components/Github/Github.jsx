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
        <div style={{ height: "200px" }} id="github-stats-card">
          <img
            src="https://github-readme-stats.vercel.app/api?username=HelloKaushal750&show_icons=true&theme=tokyonight"
            alt=""
          />
        </div>
        <div id="github-streak-stats" style={{ height: "180px" }}>
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
          marginTop:"10px",
          paddingLeft:"45px"
        }}
        className="github_data"
      >
        <div
          style={{ border: "1px solid #4000ff", padding: "5px", width: "45%",display:"flex",justifyContent:"center",alignItems:"center" }}
        >
          <div
            className="react-activity-calendar"
            style={{
              height: "180px",
              border: "1px solid white",
              backgroundColor:"#1a1b27",
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
        <div id="github-top-langs" style={{ height: "200px",width:"47%" }}>
            <img style={{backgroundColor:"#1a1b27",border:"1px solid white",borderRadius:"5px",width:"100%"}}  src="toplang.png" alt="" />
        </div>
      </div>
      <div>
        <div>
            <h1>300+</h1>
            <h1>Hours</h1>
            <p>Coding</p>
        </div>
        <div>
            <h1>4+</h1>
            <h1>Projects</h1>
            <p>Done</p>
        </div>
        <div>
            <h1>500+</h1>
            <h1>DSA</h1>
            <p>Solved(OJ)</p>
        </div>
        <div>
            <h1>250+</h1>
            <h1>Hours</h1>
            <p>DSA</p>
        </div>
      </div>
    </div>
  );
}

export default Github;
