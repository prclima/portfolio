import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./Pages/About/About";
import "./App.css";
import { ThemeState } from "./Context/Theme.js";

export default function App() {
  const { theme } = ThemeState();

  return (
    <div className="divMaster" id={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}
