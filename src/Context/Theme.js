import { createContext, useContext } from "react";
import { useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeState() {
  return useContext(ThemeContext);
}
export { ThemeState, ThemeProvider, ThemeContext };
