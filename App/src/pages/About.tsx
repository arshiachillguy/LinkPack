import { useContext } from "react";
import { UIContext } from "../App";
import ProfileMenu from "../ProfileMenu";

export default function About() {
  const { theme, fontSize } = useContext(UIContext);

  return (
    <div
      className={`
        min-h-screen w-full pt-20 pb-16 transition duration-500 font-${fontSize}
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

      {/* محتوا با عرض کمتر و متعادل‌تر */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-12 space-y-12">
        {/* Project Name */}
        <div className="text-center pt-6">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            LinkPack
          </h1>
          <p className="text-xl md:text-2xl opacity-80 mt-2">
            Shorter , Cleaner , and easy to make .
          </p>
        </div>

        {/* توضیح کوتاه */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            LinkPack is a modern URL shortener that turns your long links into
            short, beautiful and easy to share ones. Simple, fast and looks good
            on every device.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <div
            className={`
              p-8 rounded-2xl text-center border transition-all hover:scale-105 hover:shadow-xl
              ${
                theme === "dark"
                  ? "bg-white/6 border-white/10 backdrop-blur-lg"
                  : "bg-white/75 border-gray-200 shadow-lg backdrop-blur-md"
              }
            `}
          >
            <div className="text-5xl mb-5">⚡</div>
            <h3 className="text-2xl font-bold mb-3">Super Fast</h3>
            <p className="text-base opacity-85">
              Instant shortening and redirecting
            </p>
          </div>

          <div
            className={`
              p-8 rounded-2xl text-center border transition-all hover:scale-105 hover:shadow-xl
              ${
                theme === "dark"
                  ? "bg-white/6 border-white/10 backdrop-blur-lg"
                  : "bg-white/75 border-gray-200 shadow-lg backdrop-blur-md"
              }
            `}
          >
            <div className="text-5xl mb-5">🎨</div>
            <h3 className="text-2xl font-bold mb-3">Beautiful Design</h3>
            <p className="text-base opacity-85">
              Modern glass style + dark/light mode
            </p>
          </div>

          <div
            className={`
              p-8 rounded-2xl text-center border transition-all hover:scale-105 hover:shadow-xl
              ${
                theme === "dark"
                  ? "bg-white/6 border-white/10 backdrop-blur-lg"
                  : "bg-white/75 border-gray-200 shadow-lg backdrop-blur-md"
              }
            `}
          >
            <div className="text-5xl mb-5">🔒</div>
            <h3 className="text-2xl font-bold mb-3">Safe & Private</h3>
            <p className="text-base opacity-85">
              No tracking, no ads, just links
            </p>
          </div>
        </div>

        {/* About Me */}
        <div className="pt-16 text-center">
          <h2 className="text-4xl font-bold mb-6">Hey, I'm Arshia 👋</h2>

          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90 mb-10">
            I'm a Backend Developer who loves building clean, fast and modern
            web applications. I mostly work with java and golang .
          </p>

          {/* دکمه‌های ارتباطی */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 max-w-xl mx-auto">
            <a
              href="https://github.com/arshiachillguy"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex-1 py-5 px-8 text-lg font-medium rounded-xl transition-all transform hover:scale-105 shadow-lg
                ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700 border border-gray-600"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }
              `}
            >
              <span className="mr-2 text-xl">🐱</span>GitHub
            </a>

            <a
              href="https://t.me/lilarshii"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                flex-1 py-5 px-8 text-lg font-medium rounded-xl transition-all transform hover:scale-105 shadow-lg
                bg-green-600 hover:bg-green-500 text-white
              `}
            >
              <span className="mr-2 text-xl">💬</span> Telegram
            </a>

            <a
              href="#"
              target="_blank"
              className={`
                flex-1 py-5 px-8 text-lg font-medium rounded-xl transition-all transform hover:scale-105 shadow-lg
                ${
                  theme === "dark"
                    ? "bg-blue-900/70 hover:bg-blue-800/70 border border-blue-700"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
                }
              `}
            >
              <span className="mr-2 text-xl">💼</span>LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
