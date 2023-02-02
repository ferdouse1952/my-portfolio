import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import About from "./components/AboutSection/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Profile />}></Route>
      </Routes>
      <Routes>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Routes>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
      <Routes>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
