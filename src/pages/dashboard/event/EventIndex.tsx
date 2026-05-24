import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function EventIndex() {
  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/events");
    const data = await res.json();
    setEvents(data);
  };

  const deleteData = async (id: number) => {
    if (window.confirm("Yakin hapus event ini?")) {
      await fetch(`http://localhost:3000/events/${id}`, { method: "DELETE" });
      fetchData();
    }
  };

  useEffect(() => { fetchData(); }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-8 border-b pb-6">
        <h2 className="text-3xl font-bold text-rose-600 tracking-tight">Daftar Event</h2>
        <Link to="/dashboard/event/new" className="bg-rose-600 text-white px-6 py-3 rounded-xl font-bold shadow-md hover:bg-rose-700 transition-all">
          + New Event
        </Link>
      </div>
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm text-left">
        <table className="w-full">
          <thead className="bg-rose-50 text-rose-600 font-bold">
            <tr>
              <th className="p-4">Nama Event</th>
              <th className="p-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {events.map((item: any) => (
              <tr key={item.id} className="border-b border-gray-50">
                <td className="p-4 font-semibold text-slate-700">{item.name}</td>
                <td className="p-4 text-center space-x-4 font-bold">
                  <Link to={`/dashboard/event/edit/${item.id}`} className="text-blue-500 hover:underline">Edit</Link>
                  <button onClick={() => deleteData(item.id)} className="text-red-500 hover:underline">Hapus</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}