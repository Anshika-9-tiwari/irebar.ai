import CTA from "@/components/home/Contact";
import Whoweare from "@/components/home/Whoweare";

export default function page() {
  return (
    <main>
      <section className="relative h-[280px] md:h-[400px] flex items-center justify-center">
        
        {/* Background Image */}
        <img
          src="/rebar-esti.jpg"
          alt="Rebar Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Who we are
          </h1>
          <p className="text-sm md:text-lg text-gray-200">
            Let’s build smarter Rebar Steel Estimates with AI
          </p>
        </div>
      </section>

      <Whoweare/>
      <CTA/>
    </main>
  );
}