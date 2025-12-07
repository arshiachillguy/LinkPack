import ProfileMenu from "./ProfileMenu.tsx";
import { Routes, Route } from "react-router-dom";
import History from "./pages/History";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Homepage from "./pages/Homepage.tsx";
import { useState, useEffect, createContext } from "react";

export const UIContext = createContext<any>(null);

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg" | "xl">("md");

  // اعمال تم روی کل صفحه و بدنه
  useEffect(() => {
    document.body.className = theme === "dark" ? "dark" : "light";
  }, [theme]);

  return (
    <UIContext.Provider value={{ theme, setTheme, fontSize, setFontSize }}>
      <div
        className={`
        w-full min-h-screen transition duration-500 
        ${theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
          : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900"
        }
      `}
      >

        {/* منو */}
        <div className="absolute top-6 left-6 z-50">
          <ProfileMenu />
        </div>

        {/* مسیرها */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/history" element={<History />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </UIContext.Provider>
  );
}

export default App;
