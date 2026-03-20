import ContactForm from "@/components/Contact/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | irebar.ai",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative h-[280px] md:h-[400px] flex items-center justify-center">
        
        {/* Background Image */}
        <img
          src="/rebar-esti.jpg"
          alt="Rebar Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Contact Us
            
          </h1>
          <p className="text-sm md:text-lg text-gray-200">
            Rebar Steel Estimating
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </>
  );
}