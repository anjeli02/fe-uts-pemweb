import Button from "../component/ui/Button";
import Card from "../component/ui/Card";
import FaqAccordion from "../component/ui/FAQ";

export default function Beranda() {
  const faqs = [
    {
      question: "Apa itu Beauty Academy?",
      answer: "Platform manajemen workshop kecantikan mulai dari makeup, skincare, hingga hair styling yang dipandu oleh MUA profesional.",
    },
    {
      question: "Bagaimana cara mendaftar?",
      answer: "Cukup pilih kelas yang kamu inginkan, klik daftar, dan amankan kursimu sebelum kuota habis!",
    },
    {
      question: "Apakah pemula bisa ikut?",
      answer: "Tentu! Kami menyediakan kategori 'Basic' untuk pemula dan 'Advance' untuk profesional.",
    },
  ];

  return (
    <div className="bg-rose-50"> {/* Background pink soft agar estetik */}
      {/* SECTION HERO */}
      <section id="hero" className="py-20 flex gap-10 justify-between items-center px-10">
        <div className="w-2/3 flex flex-col gap-6">
          <h1 className="text-6xl font-bold text-rose-600 leading-tight">
            Level Up Your <br /> 
            <span className="text-slate-800">Beauty Skills</span>
          </h1>
          <p className="text-xl text-slate-600">
            Temukan berbagai workshop eksklusif mulai dari <strong className="text-rose-500">Korean Look Makeup</strong> hingga <strong className="text-rose-500">Professional Hairstyling</strong>. Belajar langsung dari ahlinya!
          </p>
          <div className="flex gap-3">
            <Button label="LIHAT KELAS" variant="primary" className="bg-rose-600 hover:bg-rose-700 border-none" />
            <Button label="TANYA ADMIN" variant="outline" className="border-rose-600 text-rose-600" />
          </div>
        </div>
        <div className="w-1/3">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop" 
            alt="Beauty Class"
            className="rounded-3xl shadow-2xl rotate-3"
          />
        </div>
      </section>

      {/* SECTION CATEGORY CARDS */}
      <section className="py-20 px-10">
        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">Pilih Kategori <span className="text-rose-500">Workshop</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card title="Makeup Artist" description="Belajar teknik contouring, eye makeup, hingga bridal look bersama MUA ternama.">
            <Button label="Cek Jadwal" variant="primary" className="w-full bg-rose-500" />
          </Card>
          <Card title="Skincare Routine" description="Pahami kandungan skincare dan cara merawat kulit wajah agar tetap glowing dan sehat.">
            <Button label="Cek Jadwal" variant="primary" className="w-full bg-rose-500" />
          </Card>
          <Card title="Hair Styling" description="Tutorial styling rambut mulai dari daily look hingga pesta yang praktis dan elegan.">
            <Button label="Cek Jadwal" variant="primary" className="w-full bg-rose-500" />
          </Card>
        </div>
      </section>

      {/* SECTION FAQ */}
      <section className="py-20 bg-white">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-slate-800">Frequently Asked <span className="text-rose-500">Questions</span></h2>
        </div>
        <FaqAccordion faqs={faqs} />
      </section>
    </div>
  );
}