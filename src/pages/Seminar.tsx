import Button from "../component/ui/Button";

export default function Seminar() {
  return (
    <div className="bg-rose-50 min-h-screen">
      <section className="py-20 px-10 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-rose-600 mb-6">Beauty Seminar 2025</h1>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">"The Future of Organic Skincare & Aesthetic Medicine"</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Seminar nasional yang menghadirkan pakar dermatologi dan ahli kecantikan ternama. 
            Kita akan membahas transisi teknologi kecantikan dari bahan kimia ke bahan organik berkelanjutan, 
            serta bagaimana teknologi laser terbaru dapat membantu kesehatan kulit jangka panjang.
          </p>
          <Button label="Daftar Seminar" variant="primary" className="bg-rose-500 border-none px-8 py-4" />
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=2000&auto=format&fit=crop" 
            alt="Seminar" 
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
}