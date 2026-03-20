import CTA from "@/components/home/Contact";
import FAQ from "@/components/home/FAQs";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/pricing";
import Whatwedo from "@/components/home/Whatwedo";
import Whoweare from "@/components/home/Whoweare";

export default function Home() {
  return (
    <main>
      <section className="relative h-[280px] md:h-[400px] flex items-center justify-center">
        
        {/* Background Image */}
        <img
          src="/Rebar-Takeoff-1.jpg"
          alt="Rebar Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Rebar steel AI  Estimating
          </h1>
          <p className="text-sm md:text-lg text-gray-200">
            Let’s build smarter Rebar Estimates with AI
          </p>
        </div>
      </section>

      <Hero />
      <Whatwedo/>
      <Pricing/>
      <Whoweare/>
      <CTA/>
      <FAQ/>
    </main>
  );
}