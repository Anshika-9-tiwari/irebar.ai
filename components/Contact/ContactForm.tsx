"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", phone: "", company: "" });
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section className="bg-gradient-to-b from-blue-100 via-white to-blue-50 py-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-12 text-gray-800">
            <span className="text-primary">Explore AI-Based</span><br />
            Takeoffs & Estimates with human-in-loop.
          </h2>

          <p className="text-gray-500 mb-12">
            Get a personalized demo with our product expert to explore how Rebar AI fully automates takeoffs & estimates for rebar steel supplies & contractors in the U.S. and Canada.
          </p>

          <div className="text-sm text-gray-600 space-y-4">
            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1" size={18} />
              <p>
                <strong>Address :</strong> Advance Informatics, Noida, India
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="text-primary" size={18} />
              <p>
                <strong>Phone :</strong> +1-888-777-3048
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="text-primary" size={18} />
              <p>
                <strong>Email:</strong> contact@irebar.ai
              </p>
            </div>

          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md border"
        >
          {/* BOOK A DEMO HEADING */}
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center">
            Book a Demo
          </h3>
          <div className="w-12 h-1 bg-primary mx-auto mb-8 rounded"></div>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="input input-bordered w-full rounded-lg mb-5"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="input input-bordered w-full rounded-lg mb-5"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Mobile Number"
            value={form.phone}
            onChange={handleChange}
            className="input input-bordered w-full rounded-lg mb-5"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            className="input input-bordered w-full rounded-lg mb-6"
          />

          <button
            type="submit"
            className="btn btn-primary w-full rounded-full"
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {success && (
            <p className="text-green-600 mt-3 text-sm text-center">
              {success}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}