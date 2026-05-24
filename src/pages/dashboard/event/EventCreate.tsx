import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputText from "../../../component/ui/InputText";
import Button from "../../../component/ui/Button";

export default function EventCreate() {
  const navigate = useNavigate();
  const [listKategori, setListKategori] = useState([]);
  const { register, handleSubmit } = useForm();

  // 1. Ambil data kategori dari Backend untuk isi DROPDOWN (Poin 4b Soal)
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setListKategori(data));
  }, []);

  const onSubmit = async (data: any) => {
    try {
      await fetch("http://localhost:3000/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), // Mengirim { name, category, tanggal, description }
      });
      alert("Event berhasil dipublikasikan!");
      navigate("/dashboard/event");
    } catch (error) {
      alert("Gagal membuat event");
    }
  };

  return (
    <div className="p-8 flex justify-center">
      <div className="w-full max-w-3xl bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 text-left">
        <h2 className="text-3xl font-bold text-rose-600 mb-8 border-b pb-4">New Beauty Event</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputText label="Nama Event" nama="name" register={register} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* DROPDOWN DINAMIS */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700 ml-1">Kategori</label>
              <select 
                {...register("category")} 
                className="p-4 border border-gray-100 rounded-2xl bg-slate-50 outline-rose-500"
              >
                <option value="">Pilih Kategori</option>
                {listKategori.map((c: any) => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>

            <InputText label="Tanggal (Contoh: 12 Mei 2026)" nama="tanggal" register={register} />
          </div>

          <InputText label="Deskripsi Singkat" nama="description" register={register} />
          
          <div className="pt-4 text-center">
            <Button 
              label="Buat Event Sekarang" 
              variant="primary" 
              className="w-full bg-rose-600 border-none py-4 rounded-2xl font-bold shadow-lg" 
            />
          </div>
        </form>
      </div>
    </div>
  );
}