"use client";

export default function CTA() {
  return (
    <section className="py-20 bg-base-300 text-gray-600 text-center shadow-xl">
      <div className="max-w-3xl mx-auto px-6">
        
        <h2 className="text-xl md:text-3xl font-bold mb-4">
          Get started with our AI-based takeoff and construction estimating software today!
        </h2>

        <p className="text-gray-700 mb-6">
          Talk to us and get your first AI takeoff done free of cost for 100 tons quantity.
        </p>

        <a href="contact" className="btn btn-primary rounded-full ml-4">
            Book Demo
            <span className="ml-1 text-2xl font-bold">→</span>
        </a>

      </div>
    </section>
  );
}