import data from "./projectData.json";
import "./Project.css";


function Project() {
  return (
    <div id="projects">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "60px",
        }}
      >
        <h1 style={{ fontSize: "40px", fontWeight: "600", color: "white" }}>
          My&nbsp;<span style={{ color: "#4000ff" }}>Projects</span>
        </h1>
      </div>
      <div className="projects_container">
        {data.map((project,i) => {
          return (
            <div className="project-card" key={i}>
              <div style={{ height: "300px" }}>
                <img
                  src={project.images[0]}
                  alt=""
                  width="100%"
                  height="100%"
                  style={{ border: "1px solid #4000ff", borderRadius: "10px" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  fontSize: "10px",
                  color: "white",
                }}
              >
                <h1 className="project-title">{project.title}</h1>
              </div>
              <div style={{ height: "200px" }}>
                <p className="project-description">{project.description}</p>
                {project.type !== "Individual" ? (
                  <p>
                    <span style={{ fontWeight: "600" }}>
                      {project.type} Project
                    </span>
                    : {project.members} Collaborators |{" "}
                    <span style={{ fontWeight: "600" }}>Duration:</span>{" "}
                    {project.duration} Days
                  </p>
                ) : (
                  <p>
                    <span style={{ fontWeight: "600" }}>
                      {project.type} Project
                    </span>{" "}
                    | <span style={{ fontWeight: "600" }}>Duration:</span>{" "}
                    {project.duration} Days
                  </p>
                )}
                <p className="project-tech-stack">
                  <span style={{ color: "#4000ff", fontSize: "18px" }}>
                    TECH STACK:
                  </span>{" "}
                  {project.tech_stack}
                </p>
              </div>
              <div
                style={{
                  color: "white",
                  fontSize: "35px",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "80%",
                  margin: "auto",
                }}
                className="project_links"
              >
                <a
                  className="project-github-link"
                  target="blank"
                  href={project.github}
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a target="blank" href={project.video_link}>
                  <i className="fa-solid fa-play"></i>
                </a>
                <a
                  className="project-deployed-link"
                  target="blank"
                  href={project.deployed_link}
                >
                  <i className="fa-solid fa-eye"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
