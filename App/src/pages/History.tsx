import { useContext, useEffect, useState } from "react";
import { UIContext } from "../App";
import ProfileMenu from "../ProfileMenu";

export default function History() {
  const { theme, setTheme, fontSize, setFontSize } = useContext(UIContext);

  const todayDate = new Date().toISOString().split("T")[0];
  const yesterdayDate = new Date(Date.now() - 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = dateTime.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const formattedTime = dateTime.toLocaleTimeString("en-US");

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

  const getDateTitle = (dateString: string) =>
    dateString === todayDate ? "Today" : dateString;

  const [selected, setSelected] = useState<any>(null);

  return (
    <div
      className={`
        min-h-screen w-full pt-24 pb-16 transition duration-500 font-${fontSize}
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

      {/* Live Date & Time - بالای صفحه، کوچک و ثابت */}
      <div className="fixed top-6 right-6 z-40">
        <div
          className={`
            px-5 py-2 rounded-xl backdrop-blur-md text-sm font-medium
            ${
              theme === "dark"
                ? "bg-white/10 border border-white/20"
                : "bg-white/70 border border-gray-200 shadow-sm"
            }
          `}
        >
          <span className="opacity-80">Now: </span>
          <span className="font-mono">{formattedTime}</span>
        </div>
      </div>

      {/* Main Content - تمام عرض، بدون باکس بزرگ مرکزی */}
      <div className="max-w-4xl mx-auto px-6 lg:px-10 space-y-12">
        {/* عنوان اصلی */}
        <div className="text-center pt-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            History
          </h1>
          <p className="mt-2 text-lg opacity-80">{formattedDate}</p>
        </div>

        {/* لیست روزها */}
        <div className="space-y-10">
          {Object.entries(history).map(([date, items]) => (
            <div key={date} className="space-y-4">
              {/* عنوان روز */}
              <h2
                className={`
                  text-2xl font-semibold px-6 py-3 rounded-xl inline-block
                  ${
                    theme === "dark"
                      ? "bg-white/10 text-blue-300"
                      : "bg-blue-50 text-blue-800"
                  }
                `}
              >
                {getDateTitle(date)}
              </h2>

              {/* کارت روز - فقط وقتی لینک داره نشون میده */}
              {items.length > 0 ? (
                <div
                  className={`
                    rounded-2xl p-6 border transition-all
                    ${
                      theme === "dark"
                        ? "bg-white/6 border-white/15 backdrop-blur-lg"
                        : "bg-white/80 border-gray-200 shadow-lg backdrop-blur-md"
                    }
                  `}
                >
                  <div className="space-y-4">
                    {items.map((link, i) => (
                      <div
                        key={i}
                        className={`
                          p-5 rounded-xl flex flex-col sm:flex-row justify-between items-start gap-5 border transition-all hover:scale-[1.01]
                          ${
                            theme === "dark"
                              ? "border-white/10 bg-white/5"
                              : "border-gray-200 bg-white"
                          }
                        `}
                      >
                        <div className="flex-1 text-sm break-all">
                          <p className="font-semibold text-yellow-400">
                            Original:
                          </p>
                          <p className="opacity-90 mt-1">{link.original}</p>

                          <p className="font-semibold text-green-400 mt-3">
                            Short:
                          </p>
                          <a className="text-blue-400 underline hover:opacity-80">
                            {link.short}
                          </a>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                          <span className="text-sm opacity-80 whitespace-nowrap">
                            {link.time}
                          </span>
                          <button
                            onClick={() => setSelected(link)}
                            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition text-sm font-medium"
                          >
                            Details
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  className={`
                    rounded-2xl p-8 text-center border
                    ${
                      theme === "dark"
                        ? "bg-white/5 border-white/10 text-gray-400"
                        : "bg-white/70 border-gray-200 text-gray-500"
                    }
                  `}
                >
                  <p className="text-lg opacity-70">
                    No shortened links created on this day yet
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar جزئیات لینک */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/60 flex justify-end z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className={`
              w-96 h-full p-8 shadow-2xl backdrop-blur-xl border-l transition-all duration-300 overflow-y-auto
              ${
                theme === "dark"
                  ? "bg-gray-900/95 border-white/10 text-white"
                  : "bg-white/95 border-gray-200 text-gray-900"
              }
            `}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              Link Details
            </h3>

            <div className="space-y-6">
              <div>
                <p className="font-semibold text-yellow-400 mb-1">
                  Original URL
                </p>
                <p className="break-all opacity-90">{selected.original}</p>
              </div>

              <div>
                <p className="font-semibold text-green-400 mb-1">Short URL</p>
                <a
                  href={selected.short}
                  className="break-all text-blue-400 underline hover:opacity-80"
                >
                  {selected.short}
                </a>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold opacity-80">Created at</p>
                  <p>{selected.time}</p>
                </div>
                <div>
                  <p className="font-semibold opacity-80">Total Clicks</p>
                  <p className="text-xl font-bold">{selected.clicks}</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelected(null)}
              className="w-full mt-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl transition font-medium text-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
