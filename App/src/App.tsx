import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import History from "./pages/History";
import Profile from "./pages/Profile";
import Homepage from "./pages/Homepage";
import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./auth/ProtectedRoute";
import Login from "./pages/Login";

export const UIContext = createContext<any>(null);

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [fontSize, setFontSize] = useState<"sm" | "md" | "lg" | "xl">("md");

  return (
    <UIContext.Provider value={{ theme, setTheme, fontSize, setFontSize }}>
      <AuthProvider>
        <Routes>
          {/* PUBLIC */}
          <Route path="/login" element={<Login />} />

          {/* PROTECTED */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/history" element={<History />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </AuthProvider>
    </UIContext.Provider>
  );
}
