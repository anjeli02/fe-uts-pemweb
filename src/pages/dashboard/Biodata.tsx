// 1. Import foto kamu dari folder assets
import fotoAnjeli from "../../assets/anjeli.jpg";

export default function Biodata() {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-rose-600">Profil Pengembang</h1>
        <p className="text-slate-500">Informasi mahasiswa pembuat website Beauty Academy</p>
      </div>

      <div className="bg-white border border-rose-100 shadow-xl rounded-[2.5rem] p-10 max-w-lg w-full relative overflow-hidden">
        {/* Hiasan Background */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-full -mr-16 -mt-16"></div>
        
        <div className="flex flex-col items-center relative z-10">
          {/* 2. TAMPILKAN FOTO KAMU DISINI */}
          <div className="w-48 h-56 rounded-3xl bg-rose-100 mb-6 overflow-hidden border-4 border-white shadow-lg flex items-center justify-center">
            <img 
              src={fotoAnjeli} 
              alt="Anjelita Ikh" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 w-full">
            <div className="bg-rose-50 p-4 rounded-2xl border border-rose-100 text-center">
              <p className="text-xs uppercase tracking-widest text-rose-400 font-bold mb-1">Nama Lengkap</p>
              <p className="text-xl font-bold text-slate-800 tracking-tight">Ain Jelita Ikhwati</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">NIM</p>
                <p className="text-lg font-bold text-slate-800">24090037</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Kelas</p>
                <p className="text-lg font-bold text-slate-800">D4 TI / 4B</p>
              </div>
            </div>

            <div className="bg-slate-800 p-4 rounded-2xl text-center text-white shadow-lg">
              <p className="text-sm font-medium">Universitas Harkat Negeri</p>
              <p className="text-xs text-slate-400">Teknik Informatika</p>
            </div>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-slate-400 text-sm italic">
        "Website ini dibuat untuk memenuhi Tugas Akhir Semester Genap Pemrograman Web 2."
      </p>
    </div>
  );
}