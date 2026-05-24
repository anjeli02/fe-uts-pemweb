import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SpeakerIndex() {
  const [speakers, setSpeakers] = useState([]);

  // Fungsi ambil data dari Backend
  const fetchData = async () => {
    try {
      // PASTIKAN URL INI SAMA DENGAN DI BACKEND KAMU (/speakers)
      const res = await fetch("http://localhost:3000/speakers");
      const data = await res.json();
      setSpeakers(data);
    } catch (error) {
      console.log("Gagal fetch data speaker:", error);
    }
  };

  const deleteData = async (id: number) => {
    if (window.confirm("Yakin ingin menghapus data ini?")) {
      await fetch(`http://localhost:3000/speakers/${id}`, { method: "DELETE" });
      fetchData(); // Ambil ulang data setelah hapus
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-2">
      <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-rose-600">Daftar Speaker</h1>
          <p className="text-gray-500 text-sm">Kelola narasumber workshop kecantikan</p>
        </div>
        <Link 
          to="/dashboard/seminar/speaker" 
          className="bg-rose-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-rose-700 shadow-lg"
        >
          + Add New Speaker
        </Link>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm text-left text-left">
        <table className="w-full">
          <thead className="bg-rose-50 text-rose-600 font-bold font-bold">
            <tr>
              <th className="p-4">Nama</th>
              <th className="p-4">Role</th>
              <th className="p-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {speakers.length > 0 ? (
              speakers.map((item: any) => (
                <tr key={item.id} className="border-b border-gray-50 hover:bg-rose-50/30">
                  {/* DI SINI KUNCINYA: Harus pakai item.nama dan item.role */}
                  <td className="p-4 font-semibold text-slate-700">{item.nama}</td>
                  <td className="p-4 text-slate-500">{item.role}</td>
                  
                  <td className="p-4 text-center space-x-4">
                    <Link 
                      to={`/dashboard/pembicara/edit/${item.id}`} 
                      className="text-blue-500 font-bold hover:underline"
                    >
                      Edit
                    </Link>
                    <button 
                      onClick={() => deleteData(item.id)} 
                      className="text-red-500 font-bold hover:underline"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="p-20 text-center text-gray-300 italic">
                  Belum ada data pembicara tersedia.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}