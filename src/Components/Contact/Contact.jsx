import "./Contact.css";
import { useReducer, useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "name": {
      return { ...state, name: action.payload };
    }
    case "email": {
      return { ...state, email: action.payload };
    }
    case "phone": {
      return { ...state, phone: action.payload };
    }
    case "message": {
      return { ...state, message: action.payload };
    }
    case "not-present": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

function Contact() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, state]);
    dispatch({ type: "not-present" });
  };
  console.log(state);
  return (
    <div id="contact">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "60px",
        }}
      >
        <h1 style={{ fontSize: "40px", fontWeight: "600", color: "#4000ff" }}>
          Contact&nbsp;<span style={{ color: "white" }}>Me</span>
        </h1>
      </div>
      <div
        style={{
          width: "80%",
          margin: "auto",
          marginTop: "50px",
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "50px",
        }}
      >
        <div className="contact_left">
          <img src="contact.png" width={"100%"} alt="" />
        </div>
        <div className="contact_right">
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            <a
              target="blank"
              href="https://www.linkedin.com/in/kaushalvish/"
              title="kaushalvish"
              id="contact-linkedin"
            >
              <button style={{ backgroundColor: "#0a66c2" }}>
                <i className="fa-brands fa-linkedin">&nbsp;</i>LinkedIn
              </button>
            </a>
            <a
              target="blank"
              href="https://github.com/HelloKaushal750"
              title="HelloKaushal750"
              id="contact-github"
            >
              <button style={{ backgroundColor: "#3f3d55" }}>
                <i className="fa-brands fa-github">&nbsp;</i>Github
              </button>
            </a>
            <a
              href="mailto:kaushalv079@gmail.com"
              title="kaushalv079@gmail.com"
              id="contact-email"
            >
              <button style={{ backgroundColor: "#f04244" }}>
                <i className="fa-solid fa-envelope">&nbsp;</i>Email
              </button>
            </a>
            <a
              href="tel:8369515207"
              title="Call or WhatsApp"
              id="contact-phone"
            >
              <button style={{ backgroundColor: "#4db946" }}>
                <i className="fa-solid fa-phone-volume">&nbsp;</i>Phone
              </button>
            </a>
          </div>
          <h1 style={{ color: "white", fontSize: "20px" }}>
            Get in <span style={{ color: "#4000ff" }}>Touch</span>
          </h1>
          <form
            className="person_details"
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Full Name"
              value={state.name}
              onChange={(e) => {
                dispatch({ type: "name", payload: e.target.value });
              }}
            />
            <input
              type="email"
              placeholder="Email"
              value={state.email}
              onChange={(e) => {
                dispatch({ type: "email", payload: e.target.value });
              }}
            />
            <input
              type="text"
              maxLength={10}
              placeholder="Phone"
              value={state.phone}
              onChange={(e) => {
                dispatch({ type: "phone", payload: e.target.value });
              }}
            />
            <textarea
              type="text"
              placeholder="Your Message"
              value={state.message}
              onChange={(e) => {
                dispatch({ type: "message", payload: e.target.value });
              }}
              rows="4"
              cols="50"
              style={{ height: "100px" }}
            ></textarea>
            <input
              style={{
                width: "20%",
                backgroundColor: "#4000ff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
              type="submit"
              value={"Submit"}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
