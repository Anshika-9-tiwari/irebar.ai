"use client";

export default function CTA() {
  return (
    <section className="relative py-18 text-white text-center">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Rebar-Takeoff-1.jpg"
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        
        <h2 className="text-xl md:text-3xl font-bold mb-5">
          Get started with our AI-based takeoff and construction estimating software today!
        </h2>

        <p className="text-gray-100 mb-6">
          Talk to us and get your first AI takeoff done free of cost for 100 tons quantity.
        </p>

        <a
          href="/contact"
          className="btn btn-primary rounded-full px-6"
        >
          Book Demo
          <span className="ml-1 text-2xl font-bold">→</span>
        </a>

      </div>
    </section>
  );
}