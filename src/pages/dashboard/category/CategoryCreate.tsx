import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import InputText from "../../../component/ui/InputText";
import Button from "../../../component/ui/Button";

const schema = z.object({ name: z.string().min(1, "Nama Kategori wajib diisi") });
type FormData = { name: string };

export default function CategoryCreate() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await fetch("http://localhost:3000/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    navigate("/dashboard/category");
  };

  return (
    <div className="p-8 flex justify-center">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-rose-600 mb-8 border-b pb-4 text-center tracking-tight">New Category</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <InputText label="Nama Kategori" nama="name" register={register} error={errors.name?.message} />
          <Button label="Simpan" variant="primary" className="w-full bg-rose-600 border-none py-4 font-bold rounded-2xl" />
        </form>
      </div>
    </div>
  );
}