import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./comps/global/Navbar";
import Home from "./comps/pages/Home";
import About from "./comps/pages/About";
import Service from "./comps/pages/Service";
import Contact from "./comps/pages/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
