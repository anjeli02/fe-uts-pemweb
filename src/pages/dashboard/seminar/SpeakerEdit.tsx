import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import InputText from "../../../component/ui/InputText";
import Button from "../../../component/ui/Button";

export default function SpeakerEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    fetch(`http://localhost:3000/speakers/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setValue("nama", data.nama);
        setValue("role", data.role);
      });
  }, [id, setValue]);

  const onSubmit = async (data: any) => {
    await fetch(`http://localhost:3000/speakers/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("Speaker berhasil diupdate!");
    navigate("/dashboard/pembicara");
  };

  return (
    <div className="p-8 flex justify-center">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-left">
        <h2 className="text-2xl font-bold text-rose-600 mb-8 border-b pb-4">Edit Speaker</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <InputText label="Nama Lengkap" nama="nama" register={register} />
          <InputText label="Jabatan / Role" nama="role" register={register} />
          <Button label="Update Speaker" variant="primary" className="w-full bg-rose-600 border-none py-4 font-bold" />
        </form>
      </div>
    </div>
  );
}