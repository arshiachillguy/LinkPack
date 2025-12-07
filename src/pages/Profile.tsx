import { useContext } from "react";
import { UIContext } from "../App";

export default function Profile() {
  const { theme, setTheme, fontSize, setFontSize } = useContext(UIContext);

  return (
    <div 
      className={`flex justify-center items-start pt-24 min-h-screen transition duration-500 font-${fontSize}`}
    >
      <div
        className={`
          w-full max-w-md p-8 rounded-2xl shadow-xl backdrop-blur-xl 
          transition duration-500 space-y-8 border
          ${theme === "dark"
            ? "bg-white/10 border-white/20 text-white"
            : "bg-white/70 border-gray-300 text-gray-800"
          }
        `}
      >

        <h2 className="text-3xl font-bold text-center">Profile Settings</h2>

        {/* ===== Security Section ===== */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold flex items-center gap-2">🔐 Security</h3>

          <button className="w-full text-left hover:opacity-70 transition">
            Change Email
          </button>

          <div className={`border-b ${theme === "dark" ? "border-white/10" : "border-black/10"} my-2`} />

          <button className="w-full text-left hover:opacity-70 transition">
            Change Password
          </button>
        </div>


        <div className={`border-b ${theme === "dark" ? "border-white/10" : "border-black/10"} my-4`} />


        {/* ===== Appearance Section ===== */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">⚙ Appearance</h3>

          {/* Theme Toggle */}
          <div className="flex justify-between items-center">
            <span>Theme Mode</span>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="px-3 py-1 rounded-lg hover:opacity-80 transition"
            >
              {theme === "dark" ? "Dark " : "Light "}
            </button>
          </div>

          <div className={`border-b ${theme === "dark" ? "border-white/10" : "border-black/10"} my-2`} />


          {/* Font Size */}
          <div className="flex items-center justify-between">
            <span>Font Size:</span>

            <select
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value as any)}
              className={`
                p-1 rounded border bg-transparent
                ${theme === "dark" ? "border-white/20" : "border-gray-500"}
              `}
            >
              <option value="sm">Small</option>
              <option value="md">Medium</option>
              <option value="lg">Large</option>
              <option value="xl">XLarge</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
}
