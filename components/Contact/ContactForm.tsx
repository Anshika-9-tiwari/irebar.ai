"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { MapPin, Phone, Mail, UploadCloud } from "lucide-react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
  });

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      const formData = new FormData();

      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("mobile", form.mobile);
      formData.append("company", form.company);

      if (file) {
        formData.append("file", file);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", mobile: "", company: "" });
        setFile(null);
        setPreview(null);
      }
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <section className="bg-gradient-to-b from-blue-100 via-white to-blue-50 py-18">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-800">
            <span className="text-primary">Explore AI-Based</span><br />
            Takeoffs & Estimates with human-in-loop.
          </h2>

          <p className="text-gray-500 mb-8">
            Get a personalized demo with our product expert to explore how iRebar AI fully automates takeoffs & estimates.
          </p>

          {/* CONTACT INFO */}
          <div className="text-sm text-gray-600 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="text-primary mt-1" size={18} />
              <p>
                <strong>Address :</strong> 142A/20A Noida SEZ, Noida, India
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-primary" size={18} />
              <p><strong>Phone :</strong> +1-888-777-3048</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-primary" size={18} />
              <p><strong>Email:</strong> contact@irebar.ai</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-md border"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 text-center">
            Book a Free Trial
          </h3>

          <div className="w-16 h-1 bg-primary mx-auto mb-8 rounded"></div>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="input input-bordered w-full mt-6 mb-6 p-4"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="input input-bordered w-full mb-6 p-4"
            required
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={form.mobile}
            onChange={handleChange}
            className="input input-bordered w-full mb-6 p-4"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            className="input input-bordered w-full mb-6 p-4"
          />

          <button
            type="submit"
            className="btn btn-primary w-full rounded-full mt-4"
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
      
      {/* IMAGE UPLOAD BOX */}
      <div className="max-w-4xl  mx-auto px-6 bg-white py-6 rounded-xl shadow-md border mt-15 text-center">
        <label className="cursor-pointer block">
          
          {/* Hidden Input */}
          <input
            type="file"
            accept="image/*,.pdf"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Upload UI */}
          {!preview ? (
            <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-primary transition">
              <UploadCloud size={40} className="text-primary mb-3" />
              <p className="text-gray-600 font-medium">
                Click to Upload Drawing / File
              </p>
              <p className="text-sm text-gray-400">
                PNG, JPG, PDF supported
              </p>
            </div>
          ) : (
            <div>
              <img
                src={preview}
                alt="Preview"
                className="w-full h-48 object-cover rounded-lg border"
              />
              <p className="text-sm text-gray-500 mt-2">
                Click to change file
              </p>
            </div>
          )}
        </label>
      </div>
    </section>
  );
}