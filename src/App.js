import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
    </div>
  );
}

export default App;
