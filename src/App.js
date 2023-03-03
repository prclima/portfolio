import "./App.css";
import Home from "./Pages/Home/Home";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import { ThemeState } from "./Context/Theme.js";

export default function App() {
  const { theme } = ThemeState();

  return (
    <div className="divMaster" id={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
