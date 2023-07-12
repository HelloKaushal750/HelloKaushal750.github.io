import "./Skill.css";
import data from "./skillData.json";

function Skill() {
  return (
    <div id="skills">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "60px",
        }}
      >
        <h1 style={{ fontSize: "40px", fontWeight: "600", color: "white" }}>
          My&nbsp;<span style={{ color: "#4000ff" }}>Technical </span>Skills
        </h1>
      </div>
      <div
        style={{
          width: "80%",
          margin: "auto",
          marginTop: "50px",
          paddingBottom: "150px",
        }}
        id="skillcardtechnical"
      >
        {data.map((item,i) => {
          return (
            <div
            key={i}
            className="skills-card"
              style={{
                textAlign: "center",
                padding: "10px",
                backgroundColor: "#0f1624",
                borderRadius: "10px",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              }}
            >
              <div style={{ height: "100px" }}>
                <img src={item.image} className="skills-card-img" alt="" height={"100%"} />
              </div>
              <p style={{ color: "white" }}  className="skills-card-name">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skill;
