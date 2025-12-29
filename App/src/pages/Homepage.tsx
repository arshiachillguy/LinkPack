import { useContext, useState } from "react";
import { UIContext } from "../App";
import ProfileMenu from "../ProfileMenu";

export default function Homepage() {
  const { theme, fontSize } = useContext(UIContext);

  const [url, setUrl] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const shortenUrl = async () => {
    if (!url.trim()) return setError("URL cannot be empty!");
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/api1/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl: url }),
      });
      const data = await res.json();
      setShortLink(data.shortUrl);
    } catch {
      setError("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div
      className={`
        w-screen min-h-screen font-${fontSize}
        ${
          theme === "dark"
            ? "bg-gradient-to-br from-[#0f172a] via-[#0b1f3a] to-[#020617] text-white"
            : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900"
        }
      `}
    >
      {/* Menu */}
      <div className="fixed top-6 left-6 z-50">
        <ProfileMenu />
      </div>

      {/* ================= HERO ================= */}
      <section className="min-h-screen flex items-center px-10">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <h1 className="text-6xl font-bold leading-tight">
              <span className="text-blue-500">Link</span>{" "}
              <span className="opacity-90">Pack</span>
            </h1>

            <p className="mt-6 text-lg opacity-75 max-w-lg">
              A modern way to shorten, manage and share links. Turn long ugly
              URLs into clean, powerful links in seconds.
            </p>
          </div>

          {/* Right */}
          <div className="space-y-6">
            {/* Before */}
            <div
              className={`
                p-5 rounded-xl border
                ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-white border-gray-300"
                }
              `}
            >
              <p className="text-sm opacity-60 mb-2">Before</p>
              <p className="text-sm break-all opacity-80">
                https://example.com/some/really/long/url/that/looks/bad
              </p>
            </div>

            {/* Arrow */}
            <div className="text-center text-2xl opacity-60">↓</div>

            {/* After */}
            <div
              className={`
                p-5 rounded-xl border
                ${
                  theme === "dark"
                    ? "bg-white/10 border-white/20"
                    : "bg-gray-100 border-gray-300"
                }
              `}
            >
              <p className="text-sm opacity-60 mb-2">With LinkPack</p>
              <p className="text-sm font-semibold text-blue-400">
                https://lp.io/aB9xQ
              </p>
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60 animate-bounce">
          <span className="text-sm">Scroll</span>
          <div className="w-1 h-6 bg-current rounded-full mt-1" />
        </div>
      </section>

      {/* ================= TOOL ================= */}
      <section className="min-h-screen flex justify-center items-center px-6">
        <div
          className={`
            w-full max-w-xl p-10 rounded-3xl border shadow-2xl backdrop-blur-xl
            ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-white/70 border-gray-300"
            }
          `}
        >
          <h2 className="text-2xl font-semibold mb-6">Shorten your link</h2>

          <div className="flex gap-3">
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste your URL here..."
              className={`
                flex-1 px-4 py-3 rounded-xl outline-none border
                focus:ring-2 focus:ring-blue-500
                ${
                  theme === "dark"
                    ? "bg-[#020617] border-white/10"
                    : "bg-gray-100 border-gray-300"
                }
              `}
            />

            <button
              onClick={shortenUrl}
              disabled={loading}
              className="px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition active:scale-95"
            >
              {loading ? "Loading..." : "Pack it"}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

          {shortLink && (
            <div
              className={`
                mt-6 p-4 rounded-xl border flex items-center gap-3
                ${
                  theme === "dark"
                    ? "bg-white/5 border-white/10"
                    : "bg-gray-100 border-gray-300"
                }
              `}
            >
              <a
                href={shortLink}
                target="_blank"
                className="flex-1 underline break-all text-blue-500"
              >
                {shortLink}
              </a>
              <button
                onClick={() => navigator.clipboard.writeText(shortLink)}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white"
              >
                Copy
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
