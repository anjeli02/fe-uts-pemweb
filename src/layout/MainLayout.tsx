import Header from "../component/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-rose-50 min-h-screen"> {/* WARNA BACKGROUND DISINI */}
      <Header />
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}