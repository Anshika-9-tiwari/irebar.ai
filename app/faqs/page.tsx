"use client";

import FAQ from "@/components/home/FAQs";

export default function page() {
  return (

    <>
      <section className="relative h-[280px] md:h-[400px] flex items-center justify-center">
        
        {/* Background Image */}
        <img
          src="/rebar_takoff.jpg"
          alt="Rebar Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            iRebar AI Estimating
          </h1>
          <p className="text-sm md:text-lg text-gray-200">
            Let’s build smarter Rebar Estimates with AI
          </p>
        </div>
      </section>
     <main>
      <FAQ/>
     </main>
    </>
  );
}