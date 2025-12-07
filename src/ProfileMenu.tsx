import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* دکمه منو */}
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
      >
        Menu
      </button>

      {/* پس‌زمینه تار وقتی منو بازه */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        />
      )}

      {/* سایدبار */}
      <div
        className={`fixed top-0 left-0 h-full w-56 bg-gray-900 text-white shadow-2xl 
                    transform transition-transform duration-300 
                    ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-5 text-lg font-bold border-b border-gray-700">Menu</div>

        <nav className="flex flex-col text-base">
          <Link to="/" className="px-5 py-3 hover:bg-gray-800" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/profile" className="px-5 py-3 hover:bg-gray-800" onClick={() => setOpen(false)}>Profile</Link>
          <Link to="/history" className="px-5 py-3 hover:bg-gray-800" onClick={() => setOpen(false)}>History</Link>
          <Link to="/about" className="px-5 py-3 hover:bg-gray-800" onClick={() => setOpen(false)}>About me </Link>
        </nav>

        <button
          onClick={() => setOpen(false)}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-red-500 
                     hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </>
  );
}
