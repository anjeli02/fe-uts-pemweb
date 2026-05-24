import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    // TAMBAHKAN KONFIRMASI AGAR TIDAK LANGSUNG KELUAR
    const yakin = window.confirm("Apakah Anda yakin ingin logout?");
    if (yakin) {
      logout();
      navigate("/login");
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex min-h-screen bg-slate-100">
      {/* SIDEBAR */}
      <aside className="w-64 bg-rose-600 text-white flex flex-col shadow-xl">
        <div className="p-8">
          <div className="flex items-center gap-2 mb-1">
            <div className="bg-white text-rose-600 px-2 py-1 rounded font-bold text-lg">B</div>
            <h1 className="text-xl font-bold tracking-tight">BEAUTY ADMIN</h1>
          </div>
          <p className="text-rose-200 text-[10px] uppercase tracking-[0.2em] font-semibold">Management System</p>
        </div>

        <nav className="flex-grow px-4 space-y-1">
          <Link
            to="/dashboard"
            className={`block p-3 rounded-lg transition-all ${
              isActive("/dashboard") ? "bg-white text-rose-600 font-bold" : "hover:bg-rose-500"
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/dashboard/category"
            className={`block p-3 rounded-lg transition-all ${
              isActive("/dashboard/category") ? "bg-white text-rose-600 font-bold" : "hover:bg-rose-500"
            }`}
          >
            Category Event
          </Link>
          <Link
            to="/dashboard/event"
            className={`block p-3 rounded-lg transition-all ${
              isActive("/dashboard/event") ? "bg-white text-rose-600 font-bold" : "hover:bg-rose-500"
            }`}
          >
            Event
          </Link>
          <Link
            to="/dashboard/pembicara"
            className={`block p-3 rounded-lg transition-all ${
              isActive("/dashboard/pembicara") ? "bg-white text-rose-600 font-bold" : "hover:bg-rose-500"
            }`}
          >
            Pembicara
          </Link>
          {/* BIODATA SEKARANG DI SINI, SEJAJAR DENGAN MENU LAIN */}
          <Link
            to="/dashboard/biodata"
            className={`block p-3 rounded-lg transition-all ${
              isActive("/dashboard/biodata") ? "bg-white text-rose-600 font-bold shadow-sm" : "hover:bg-rose-500"
            }`}
          >
            Biodata
          </Link>
        </nav>

        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full bg-rose-800 hover:bg-rose-900 text-white p-3 rounded-lg font-bold transition-all"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow p-8 overflow-auto">
        <div className="bg-white min-h-[90vh] rounded-2xl shadow-sm border border-slate-200 p-8">
            <Outlet />
        </div>
      </main>
    </div>
  );
}