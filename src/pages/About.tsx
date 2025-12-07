import { useContext } from "react";
import { UIContext } from "../App";

export default function About() {
  const { theme, fontSize } = useContext(UIContext);

  return (
    <div
      className={`
        min-h-screen flex justify-center items-center p-6 transition duration-500 font-${fontSize}
        ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
            : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900"
        }
      `}
    >
      <div
        className={`
          w-full max-w-xl p-8 rounded-2xl shadow-xl backdrop-blur-xl border text-center space-y-6 transition
          ${
            theme === "dark"
              ? "bg-white/10 border-white/20"
              : "bg-white/70 border-gray-300"
          }
        `}
      >

        <h1 className="text-3xl font-bold">About This Project</h1>

        <p className="opacity-90 leading-relaxed">
          This is a simple URL shortener project that allows users to convert long links
          into short and shareable ones. Designed with a clean UI and modern glass style.
          Built for learning, practicing, and improving development workflow.
        </p>

        <div className="border-b border-white/10 dark:border-black/10 my-2"></div>

        <h2 className="text-xl font-semibold">👤 About Me</h2>
        <p className="opacity-85">
          My name is <b>Arshia</b>. I'm a <b>Backend Developer</b> who enjoys building modern
          web projects and learning new technologies every day.
        </p>

        <div className="border-b border-white/10 dark:border-black/10 my-2"></div>

        <div className="space-y-3 text-lg">

          <a 
            href="https://github.com/arshiachillguy" 
            target="_blank"
            className="block bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
          >
            🔗 GitHub
          </a>

          <a 
            href="#" 
            target="_blank"
            className="block bg-blue-700/80 hover:bg-blue-700 text-white py-2 rounded-lg transition"
          >
            🔗 LinkedIn (coming soon)
          </a>

          <a 
            href="https://t.me/lilarshii" 
            target="_blank"
            className="block bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition"
          >
            💬 Telegram: @lilarshii
          </a>
        </div>

      </div>
    </div>
  );
}
