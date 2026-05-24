import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function Header() {
  const { isAuthenticated } = useAuthStore();

  return (
    <nav className="flex justify-between items-center py-5 px-10 bg-white shadow-sm sticky top-0 z-50">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <div className="bg-rose-500 text-white p-2 rounded-lg font-bold text-xl shadow-md">B</div>
        <span className="text-2xl font-bold text-rose-600 tracking-tighter">
          BEAUTY<span className="text-slate-800">ACADEMY</span>
        </span>
      </div>

      {/* MENU NAVIGASI DENGAN IKON */}
      <div className="flex gap-8 text-slate-600 font-semibold items-center">
        <Link to="/" className="flex items-center gap-2 hover:text-rose-500 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Beranda
        </Link>

        <Link to="/seminar" className="flex items-center gap-2 hover:text-rose-500 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
          Seminar
        </Link>

        <Link to="/workshop" className="flex items-center gap-2 hover:text-rose-500 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
          </svg>
          Workshop
        </Link>

        <Link to="/talkshow" className="flex items-center gap-2 hover:text-rose-500 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
          </svg>
          Talkshow
        </Link>
        
        {/* Profile / Dashboard */}
        <div className="flex items-center gap-4 ml-4 border-l pl-8">
          {isAuthenticated ? (
            <Link to="/dashboard" className="bg-rose-500 text-white px-5 py-2 rounded-full text-sm font-bold shadow-md hover:bg-rose-600 transition-all">
              Dashboard
            </Link>
          ) : (
            <Link to="/login" className="text-slate-400 hover:text-rose-500 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}