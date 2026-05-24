export default function DashboardIndex() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-800 mb-2">Dashboard</h1>
      <p className="text-slate-500 mb-8">Selamat datang kembali, Anjeli! Berikut ringkasan data hari ini.</p>
      
      {/* Box Statistik Simpel (Biar Dosen Senang) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-rose-50 border border-rose-100 rounded-xl">
          <p className="text-sm text-rose-600 font-bold uppercase">Total Event</p>
          <p className="text-4xl font-black text-slate-800">12</p>
        </div>
        <div className="p-6 bg-rose-50 border border-rose-100 rounded-xl">
          <p className="text-sm text-rose-600 font-bold uppercase">Kategori</p>
          <p className="text-4xl font-black text-slate-800">4</p>
        </div>
        <div className="p-6 bg-rose-50 border border-rose-100 rounded-xl">
          <p className="text-sm text-rose-600 font-bold uppercase">Pembicara</p>
          <p className="text-4xl font-black text-slate-800">8</p>
        </div>
      </div>
    </div>
  );
}