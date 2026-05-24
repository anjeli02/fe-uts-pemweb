import Button from "../component/ui/Button";

export default function Workshop() {
  return (
    <div className="bg-rose-50 min-h-screen">
      <section className="py-20 px-10 flex flex-col md:flex-row-reverse items-center gap-12">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-rose-600 mb-6">Practical Workshop</h1>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">"Mastering Flawless Korean Look Makeup"</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Kelas praktik langsung (hands-on) di mana kamu akan belajar teknik 'Glass Skin' khas Korea. 
            Mulai dari persiapan kulit (skin prep), teknik blending foundation yang tipis namun cover, 
            hingga cara membuat ombre lips yang sempurna. Alat dan bahan sudah disediakan!
          </p>
          <ul className="mb-8 space-y-2 text-rose-700 font-medium">
            <li>✓ Sertifikat Resmi</li>
            <li>✓ Beauty Kit Senilai 500rb</li>
            <li>✓ Makan Siang & Coffee Break</li>
          </ul>
          <Button label="Amankan Kursi" variant="primary" className="bg-rose-500 border-none px-8 py-4" />
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2071&auto=format&fit=crop" 
            alt="Workshop" 
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
}