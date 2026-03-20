"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  CheckCircle,
  DraftingCompass,
  Ruler,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    title: "Efficient Utilization",
    description:
      "Services are used to avoid delays and waste of material.",
    icon: CheckCircle,
  },
  {
    title: "Precise Detailing",
    description:
      "Services accurately show required anchors and laps details.",
    icon: DraftingCompass,
  },
  {
    title: "Rebar Specifications",
    description:
      "Each rebar is detailed showing diameter, length, shape, and quantities.",
    icon: Ruler,
  },
  {
    title: "Rebar Assistance",
    description:
      "Outsourced support saves time, cost, and manpower while ensuring smooth execution.",
    icon: Headphones,
  },
];

export default function WhatWeDoPage() {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-white to-blue-50">

      {/* BANNER */}
      <section className="relative h-[250px] md:h-[400px] flex items-center justify-center">
        <img
          src="/Rebar-ESTIMATING.WEBP"
          alt="Construction Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <h1 className="relative z-10 text-white text-3xl md:text-5xl font-bold">
          What We Do
        </h1>
      </section>

      {/* 🔹 CONTENT SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Rebar Estimating Services
          </h2>

          <p className="text-gray-600 leading-relaxed">
            Rebar estimating services demand experience; thus, world estimating stood competitive among competitors due to its competitive team of Rebar estimators. A steel reinforcing rod effectively strengthens concrete and cast into concrete as an integral part of the construction process. Concrete pricing demands an estimate in which an evaluation of demanding Rebar is involved for a certain construction project.

            <br /><br />
            Rebar AI  work is one of the most required services for simplifying work
            and reducing installation costs.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-[250px] md:h-[300px]">
          <Image
            src="/Rebar-Takeoff-1.jpg"
            alt="Rebar Detailing"
            fill
            className="object-cover rounded-xl shadow-md"
          />
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-6 text-gray-600">
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-bold text-center mb-10"
        >
          Benefits of Rebar Estimating Services
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6">
          {benefits.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur border border-primary/20 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-4">
                  <Icon className="text-primary" size={24} />
                </div>

                {/* TITLE */}
                <h3 className="font-semibold text-lg mb-2 text-gray-800">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </section>

    </div>
  );
}