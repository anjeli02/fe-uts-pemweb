import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import InputText from "../../../component/ui/InputText";
import Button from "../../../component/ui/Button";

export default function CategoryEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/categories/${id}`)
        .then((res) => res.json())
        .then((data) => {
          // Sesuaikan dengan backend kamu (name)
          setValue("name", data.name);
        })
        .catch((err) => console.log("Error fetch edit:", err));
    }
  }, [id, setValue]);

  const onSubmit = async (data: any) => {
    await fetch(`http://localhost:3000/categories/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("Berhasil Update Kategori!");
    navigate("/dashboard/category");
  };

  return (
    <div className="p-8">
      <div className="max-w-md mx-auto bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-rose-600 mb-8 border-b pb-4">Edit Category</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 text-left">
          <InputText label="Nama Kategori" nama="name" register={register} />
          <Button label="Update Kategori" variant="primary" className="w-full bg-rose-600 border-none py-4 font-bold" />
        </form>
      </div>
    </div>
  );
}