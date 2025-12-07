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
    } catch (e) {
      setError("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div
      className={`
      min-h-screen flex justify-center items-center font-${fontSize} transition duration-500
      ${theme === "dark"
        ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white"
        : "bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900"}
      `}
    >
      {/* منو */}
      <div className="absolute top-6 left-6 z-50">
        <ProfileMenu />
      </div>

      {/* کارت اصلی */}
      <div
        className={`
        w-full max-w-lg p-8 rounded-2xl shadow-xl backdrop-blur-xl transition duration-500
        border 
        ${theme === "dark"
          ? "bg-white/10 border-white/20 text-white"
          : "bg-white/70 border-gray-300 text-gray-900"}
        `}
      >
        <h1 className="text-4xl font-bold text-center mb-6">Link Pack </h1>

        {/* ورودی */}
        <div className="flex gap-3 mb-4">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste URL here..."
            className={`
            flex-1 p-3 rounded-xl outline-none border transition
            ${theme === "dark"
              ? "bg-gray-800 text-white border-white/20 placeholder-gray-400"
              : "bg-gray-100 text-gray-900 border-gray-300 placeholder-gray-500"}
            `}
          />

          <button
            onClick={shortenUrl}
            disabled={loading}
            className={`
            px-6 rounded-xl font-semibold shadow-lg transition
            ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 active:scale-95 text-white"}
            `}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                Loading...
              </span>
            ) : (
              "Pack it"
            )}
          </button>
        </div>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        {/* نمایش لینک */}
        {shortLink && (
          <div
            className={`
            mt-6 p-4 rounded-xl border backdrop-blur-sm animate-fadeIn
            ${theme === "dark"
              ? "bg-white/10 border-white/20 text-gray-200"
              : "bg-gray-100 border-gray-300"}
            `}
          >
            <p className="font-semibold mb-2">Shortened URL:</p>

            <div className="flex items-center gap-3">
              <a
                href={shortLink}
                target="_blank"
                className="flex-1 underline break-all text-blue-400 hover:text-blue-300"
              >
                {shortLink}
              </a>

              <button
                onClick={() => navigator.clipboard.writeText(shortLink)}
                className="px-3 py-2 bg-green-500 hover:bg-green-600 rounded-lg text-white active:scale-95"
              >
                Copy 
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
