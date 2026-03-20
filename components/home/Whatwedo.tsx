"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const stepsData = [
  {
    title: "Upload Site Plan in PDF Format",
    description:
      "Drop all your spec docs, architectural plans, and legends here, rebar ai reads everything.",
    image: "/steps_1.jpg",
  },
  {
    title: "Confirm Scope of Work for your takeoff",
    description:
      "Your scope will already include quantities needed for your projects Just check to confirm. If your client has any specific breakdown or preferences .",
    image: "/ai_scope.jpeg",
  },
  {
    title: "AI does quantity takeoff",
    description:
      "Our AI scans your uploaded files, reads through specs and notes to extracts quantities of rebar ",
    image: "/steps_3.jpg",
  },
  {
    title: "Get Excel-based estimates",
    description:
      "Get custom estimates within 2-3 days, fully aligned to your internal  formats, pricing logic, and review workflows.",
    image: "/steps_4.jpg",
  },
];

export default function Whatwedo() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stepsData.length);
    },12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-5">
            Generate quantity takeoffs in simple way
          </h2>
          <div className="w-15 h-1 bg-primary mx-auto mb-8 rounded"></div>
          <p className="text-gray-500">
            Let AI do the heavy lifting and completely automate takeoffs for rebar steel
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {stepsData.map((step, index) => (
              <div
                key={index}
                className={`collapse collapse-arrow border border-base-300 shadow-sm ${
                  activeIndex === index ? "bg-white shadow-md" : "bg-white"
                }`}
              >
                <input
                  type="radio"
                  name="steps-accordion"
                  checked={activeIndex === index}
                  onChange={() => setActiveIndex(index)}
                />
                <div className="collapse-title text-lg font-medium flex items-center">
                  
                  {/* Step Number */}
                  <span className="text-primary font-bold mr-3">
                    {index + 1}.
                  </span>

                  {step.title}
                </div>
                <div className="collapse-content text-gray-600">
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* RIGHT - Image */}
          <motion.div
            key={activeIndex} 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-[300px] md:h-[400px] lg:h-[450px]"
          >
            <Image
              src={stepsData[activeIndex].image}
              alt="Step Image"
              fill
              className="object-cover rounded-xl shadow-xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}