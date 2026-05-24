import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* SISI KIRI: Gambar Aesthetic Beauty */}
      <div className="hidden lg:flex lg:w-1/2 bg-rose-100 items-center justify-center relative overflow-hidden">
        {/* Background Pattern atau Image */}
        <img 
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop" 
          alt="Beauty Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        
        {/* Overlay Gradasi agar teks terbaca */}
        <div className="absolute inset-0 bg-gradient-to-t from-rose-600/60 to-transparent"></div>

        {/* Teks Logo di Sisi Kiri */}
        <div className="relative z-10 text-center px-10">
           <div className="bg-white text-rose-500 w-20 h-20 rounded-2xl flex items-center justify-center text-5xl font-bold mx-auto mb-6 shadow-2xl">
              B
           </div>
           <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">
             BEAUTY <span className="font-light">ACADEMY</span>
           </h1>
           <p className="text-rose-50 text-xl font-medium">
             "Empowering your beauty skills with professional touch."
           </p>
        </div>
      </div>

      {/* SISI KANAN: Form Login (Outlet) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-rose-50 px-6">
        <div className="w-full max-w-md">
           <Outlet />
        </div>
      </div>
    </div>
  );
}