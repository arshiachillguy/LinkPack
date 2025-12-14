import { useContext, useEffect, useState } from "react";
import { UIContext } from "../App";

export default function History() {
  const { theme, fontSize } = useContext(UIContext);

  // Get today date as YYYY-MM-DD
  const todayDate = new Date().toISOString().split("T")[0];

  // Get yesterday date
  const yesterdayDate = new Date(
    Date.now() - 24 * 60 * 60 * 1000
  )
  .toISOString()
  .split("T")[0];

  // Live date/time
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Format Gregorian Date
  const formattedDate = dateTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString("en-US");

  // Dummy history (replace with backend later)
const [history] = useState<Record<string, any[]>>({
  [todayDate]: [
    {
      original: "https://google.com",
      short: "https://sho.rt/abc",
      time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      clicks: 12,
    },
  ],
  [yesterdayDate]: [],
});

// Format date title
const getDateTitle = (dateString: string) => {
  return dateString === todayDate ? "Today" : dateString;
};
  const [selected, setSelected] = useState<any>(null);

  return (
  <div
    className={`
      min-h-screen flex flex-col items-center pt-20 transition duration-500 font-${fontSize}
      ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}
    `}
  >
    {/* ===== Title ===== */}
    <h1 className="text-4xl font-bold mb-4">History</h1>

    {/* ===== Date & Time ===== */}
    <div className="text-center font-semibold text-lg my-4">
      <div>{formattedDate}</div>
      <div>{formattedTime}</div>
    </div>

    {/* ===== Box ===== */}
    <div
      className={`
        w-full max-w-2xl p-6 rounded-2xl backdrop-blur-xl border shadow-xl space-y-6 transition
        ${theme === "dark" ? "bg-white/10 border-white/20" : "bg-white/70 border-gray-300"}
      `}
    >
      {Object.entries(history).map(([date, items]) => (
        <div key={date} className="space-y-3">

          {/* ===== Date Label ===== */}
          <div
            className={`
              px-4 py-2 rounded-lg font-semibold
              ${theme === "dark" ? "bg-white/10" : "bg-gray-200"}
            `}
          >
            {getDateTitle(date)}
          </div>
          {/* Items list */}
            {items.length > 0 ? (
              items.map((link, i) => (
                <div
                  key={i}
                  className={`
                    p-4 rounded-lg flex justify-between items-start border transition
                    ${theme === "dark"
                      ? "border-white/10 bg-white/5"
                      : "border-gray-300 bg-white"}
                  `}
                >
                  <div className="text-sm break-all">
                    <p className="font-semibold text-yellow-400">Original URL:</p>
                    <p className="opacity-80">{link.original}</p>

                    <p className="font-semibold text-green-400 mt-2">Short URL:</p>
                    <a className="text-blue-500 underline hover:opacity-75">
                      {link.short}
                    </a>
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
              <p className="text-center py-4 opacity-60">🔹 No links for this day</p>
            )}
          </div>
        ))}
      </div>

      {/* ===== Sidebar ===== */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 flex justify-end"
          onClick={() => setSelected(null)}
        >
          <div
            className={`
              w-80 h-full p-6 shadow-xl backdrop-blur-xl border-l transition-all duration-300
              ${theme === "dark"
                ? "bg-gray-800/90 border-white/20 text-white"
                : "bg-white/90 border-gray-300 text-gray-900"}
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sidebar Title */}
            <div
              className={`
                p-3 rounded-lg text-lg font-bold mb-5 text-center
                ${theme === "dark" ? "bg-white/10 text-blue-300" : "bg-gray-200 text-blue-700"}
              `}
            >
              Link Details
            </div>

            <div className="mb-4">
              <p className="font-semibold text-yellow-400">Original URL:</p>
              <p className="break-all opacity-90 mt-1">{selected.original}</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-yellow-400">Short URL:</p>
              <a
                href={selected.short}
                className="break-all underline hover:opacity-80 text-blue-400"
              >
                {selected.short}
              </a>
            </div>

            <p className="mt-2">
              <b>Created:</b> {selected.time}
            </p>
            <p className="mt-2 mb-6">
              <b>Clicks:</b> {selected.clicks}
            </p>

            <button
              onClick={() => setSelected(null)}
              className="w-full py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
