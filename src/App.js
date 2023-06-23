import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import Github from "./Components/Github/Github";
import Skill from "./Components/Skill/Skill";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Github />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
