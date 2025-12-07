import { useContext, useState } from "react";
import { UIContext } from "../App";

export default function History() {
  const { theme, fontSize } = useContext(UIContext);

  const [selected, setSelected] = useState<any | null>(null);

  // نمونه دیتا — بعداً وصلش می‌کنی به بک‌اند
  const history = {
    "2025-01-27": [
      { original: "https://example.com/very-long-url", short: "link.ly/abc12", time: "14:22", clicks: 12 },
      { original: "https://google.com", short: "link.ly/gg177", time: "09:10", clicks: 4 }
    ],
    "2025-01-26": []
  };

  return (
    <div
      className={`
      min-h-screen flex flex-col items-center pt-20 transition font-${fontSize}
      ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}
    `}
    >
      <h1 className="text-4xl font-bold mb-10">History</h1>

      <div
        className={`
        w-full max-w-2xl p-6 rounded-2xl backdrop-blur-xl border shadow-xl space-y-6 transition
        ${theme === "dark" ? "bg-white/10 border-white/20" : "bg-white/70 border-gray-300"}
      `}
      >
        {Object.entries(history).map(([date, items]) => (
          <div key={date} className="space-y-3">
            <div
              className={`px-4 py-2 rounded-lg font-semibold
              ${theme === "dark" ? "bg-white/10" : "bg-gray-200"}`}
            >
              {date}
            </div>

            {items.length > 0 ? (
              items.map((link, i) => (
                <div
                  key={i}
                  className={`
                  p-4 rounded-lg flex justify-between items-start border transition
                  ${theme === "dark" ? "border-white/10 bg-white/5" : "border-gray-300 bg-white"}
                `}
                >
                  <div className="text-sm break-all">
                    <p className="opacity-80">{link.original}</p>
                    <a href="#" className="text-blue-400 hover:underline">{link.short}</a>
                  </div>

                  <button
                    onClick={() => setSelected(link)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                  >
                    Details
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center py-4 opacity-60">🔹 No links this day</p>
            )}
          </div>
        ))}
      </div>

      {/* ───── Sidebar ───── */}
{selected && (
  <div className="fixed inset-0 bg-black/50 flex justify-end" onClick={() => setSelected(null)}>
    <div
      className={`
        w-80 h-full p-6 shadow-xl backdrop-blur-xl border-l transition-all duration-300 animate-slide
        ${theme === "dark" ? "bg-gray-800/90 border-white/20 text-white" : "bg-white/90 border-gray-300 text-gray-900"}
      `}
      onClick={(e) => e.stopPropagation()}
    >
      {/* 📌 Title متفاوت */}
      <div className={`
        p-3 rounded-lg text-lg font-bold mb-5 text-center
        ${theme === "dark" ? "bg-white/10 text-blue-300" : "bg-gray-200 text-blue-700"}
      `}>
        Link Details
      </div>

      {/*  لینک اصلی */}
      <div className="mb-4">
        <p className="font-semibold text-yellow-400 flex items-center gap-2">
          Original URL:
        </p>
        <p className="break-all opacity-90 mt-1">{selected.original}</p>
      </div>

      {/*  شورت لینک */}
      <div className="mb-4">
        <p className="font-semibold text-yellow-400 flex items-center gap-2">
          Short URL:
        </p>
        <a 
          href={selected.short} 
          target="_blank"
          className="break-all underline hover:opacity-80 text-blue-300"
        >
          {selected.short}
        </a>
      </div>

      <p className="mt-2"><b>Created:</b> {selected.time}</p>
      <p className="mt-2 mb-6"><b>Clicks:</b> {selected.clicks}</p>

      <button
        onClick={() => setSelected(null)}
        className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition font-medium"
      >
        Close
      </button>
    </div>
  </div>
)
}
 </div>
  );
}

