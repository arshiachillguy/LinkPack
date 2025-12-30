import { useContext } from "react";
import { UIContext } from "../App";
import ProfileMenu from "../ProfileMenu";

export default function Profile() {
  const { theme, setTheme, fontSize, setFontSize } = useContext(UIContext);

  return (
    <div
      className={`
        min-h-screen w-full pt-24 transition duration-500 font-${fontSize}
        ${
          theme === "dark"
            ? "bg-gradient-to-br from-[#0f172a] via-[#0b1f3a] to-[#020617] text-white"
            : "bg-gradient-to-br from-[#f8fafc] via-[#eef2f7] to-[#e2e8f0] text-gray-900"
        }
      `}
    >
      {/* Sidebar Menu */}
      <div className="fixed top-6 left-6 z-50">
        <ProfileMenu />
      </div>

      {/* Profile Card */}
      <div className="flex justify-center px-6">
        <div
          className={`
            w-full max-w-3xl rounded-3xl p-10 shadow-2xl backdrop-blur-xl
            border transition-all duration-300
            ${
              theme === "dark"
                ? "bg-white/10 border-white/20"
                : "bg-white/80 border-gray-300"
            }
          `}
        >
          {/* Header */}
          <h1 className="text-3xl font-bold mb-8 text-center">
            Profile Settings
          </h1>

          {/* ===== Security ===== */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4">Security</h2>

            <div
              className={`
                rounded-xl p-5 space-y-4
                ${
                  theme === "dark"
                    ? "bg-white/5 border border-white/10"
                    : "bg-gray-100 border border-gray-300"
                }
              `}
            >
              <button className="w-full text-left hover:opacity-70 transition">
                Change Email
              </button>

              <div
                className={`border-b ${
                  theme === "dark" ? "border-white/10" : "border-gray-300"
                }`}
              />

              <button className="w-full text-left hover:opacity-70 transition">
                Change Password
              </button>
            </div>
          </section>

          {/* ===== Appearance ===== */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Appearance</h2>

            <div
              className={`
                rounded-xl p-5 space-y-6
                ${
                  theme === "dark"
                    ? "bg-white/5 border border-white/10"
                    : "bg-gray-100 border border-gray-300"
                }
              `}
            >
              {/* Theme Toggle */}
              <div className="flex justify-between items-center">
                <span>Theme</span>
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={`
                    px-4 py-1 rounded-lg font-medium transition
                    ${
                      theme === "dark"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : "bg-gray-800 hover:bg-gray-900 text-white"
                    }
                  `}
                >
                  {theme === "dark" ? "Dark" : "Light"}
                </button>
              </div>

              {/* Font Size */}
              <div className="flex justify-between items-center">
                <span>Font Size</span>
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value as any)}
                  className={`
                    px-3 py-1 rounded-lg outline-none
                    ${
                      theme === "dark"
                        ? "bg-gray-900 border border-white/20 text-white"
                        : "bg-white border border-gray-400 text-gray-900"
                    }
                  `}
                >
                  <option value="sm">Small</option>
                  <option value="md">Medium</option>
                  <option value="lg">Large</option>
                  <option value="xl">XLarge</option>
                </select>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
