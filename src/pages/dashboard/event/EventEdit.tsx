import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import InputText from "../../../component/ui/InputText";
import Button from "../../../component/ui/Button";

export default function EventEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setValue("name", data.name);
        setValue("category", data.category);
        setValue("tanggal", data.tanggal);
        setValue("description", data.description);
      });
  }, [id, setValue]);

  const onSubmit = async (data: any) => {
    await fetch(`http://localhost:3000/events/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("Event berhasil diupdate!");
    navigate("/dashboard/event");
  };

  return (
    <div className="p-8 flex justify-center">
      <div className="w-full max-w-2xl bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-left">
        <h2 className="text-2xl font-bold text-rose-600 mb-8 border-b pb-4">Edit Event</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <InputText label="Nama Event" nama="name" register={register} />
          <InputText label="Kategori" nama="category" register={register} />
          <InputText label="Tanggal" nama="tanggal" register={register} />
          <InputText label="Deskripsi" nama="description" register={register} />
          <Button label="Update Event" variant="primary" className="w-full bg-rose-600 border-none py-4 font-bold" />
        </form>
      </div>
    </div>
  );
}