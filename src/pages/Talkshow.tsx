import Button from "../component/ui/Button";

export default function Talkshow() {
  return (
    <div className="bg-rose-50 min-h-screen">
      <section className="py-20 px-10 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-rose-600 mb-6">Beauty Talkshow</h1>
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">"Building Your Brand in Beauty Industry"</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Diskusi santai bersama Top Beauty Influencer dan Founder Brand Kosmetik lokal. 
            Membahas cara memulai karir sebagai MUA profesional di era digital, 
            trik membuat konten kecantikan yang viral, hingga etika dalam bekerja di industri kreatif.
          </p>
          <div className="flex gap-4">
            <Button label="Daftar Sekarang" variant="primary" className="bg-rose-500 border-none px-8 py-4" />
            <Button label="Lihat Guest Star" variant="outline" className="border-rose-500 text-rose-500 px-8 py-4" />
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=1964&auto=format&fit=crop" 
            alt="Talkshow" 
            className="rounded-3xl shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
}