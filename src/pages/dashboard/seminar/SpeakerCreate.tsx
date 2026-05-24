import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import InputText from "../../../component/ui/InputText";
import Button from "../../../component/ui/Button";

export default function SpeakerCreate() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await fetch("http://localhost:3000/speakers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data), // Mengirim { nama: "...", role: "..." }
      });
      alert("Speaker berhasil ditambahkan!");
      navigate("/dashboard/pembicara");
    } catch (error) {
      alert("Gagal menambahkan speaker");
    }
  };

  return (
    <div className="p-8 flex justify-center">
      <div className="w-full max-w-lg bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 text-left">
        <div className="mb-8 border-b pb-4">
          <h2 className="text-2xl font-bold text-rose-600">Tambah Speaker</h2>
          <p className="text-gray-400 text-sm">Lengkapi informasi narasumber baru</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <InputText
            label="Nama Lengkap Speaker"
            nama="nama" // Sesuai Backend
            register={register}
          />
          <InputText
            label="Jabatan / Role"
            nama="role" // Sesuai Backend
            register={register}
          />
          <div className="pt-4">
            <Button
              label="Simpan Speaker"
              variant="primary"
              className="w-full bg-rose-600 border-none py-4 rounded-2xl font-bold shadow-md"
            />
          </div>
        </form>
      </div>
    </div>
  );
}