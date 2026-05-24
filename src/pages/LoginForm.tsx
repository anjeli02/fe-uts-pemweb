import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

import InputText from "../component/ui/InputText";
import InputPassword from "../component/ui/InputPasword"; 
import Button from "../component/ui/Button";
import { useAuthStore } from "../store/useAuthStore";

const schema = z.object({
  nim: z.string().min(1, "NIM wajib diisi"),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

type FormData = z.infer<typeof schema>;

export default function LoginForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((state) => state.login);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setLoading(true);
    const success = login(data.nim, data.password);
    
    setTimeout(() => {
      if (success) {
        navigate("/dashboard");
      } else {
        alert("NIM atau Password salah!");
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-rose-50 px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl border-t-8 border-rose-400 text-center">
        <h1 className="text-4xl font-bold text-rose-600 mb-2">Beauty Admin</h1>
        <p className="text-gray-400 mb-8">Silakan login</p>

        <form onSubmit={handleSubmit(onSubmit)} className="text-left space-y-6">
          <InputText label="NIM" nama="nim" register={register} error={errors.nim?.message} />
          <InputPassword label="Password" nama="password" register={register} error={errors.password?.message} />
          <Button 
            label={loading ? "Loading..." : "LOGIN"} 
            variant="primary" 
            className="w-full bg-rose-500 hover:bg-rose-600 text-white py-4 rounded-xl font-bold border-none"
          />
        </form>
      </div>
    </div>
  );
}