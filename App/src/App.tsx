import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Homepage from "./pages/Homepage";

export const UIContext = createContext<any>(null);

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg" | "xl">("md");

  return (
    <UIContext.Provider value={{ theme, setTheme, fontSize, setFontSize }}>
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* </BrowserRouter> */}
    </UIContext.Provider>
  );
}
