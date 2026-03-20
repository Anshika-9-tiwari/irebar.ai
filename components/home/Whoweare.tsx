"use client";

import { motion } from "framer-motion";

export default function Whoweare() {
  return (
    <section className="py-20 bg-linear-to-b from-blue-50 to-white text-center text-gray-800">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            <span className="text-primary">Takeoff and Estimating</span> Software
          </h2>
          <div className="w-15 h-1 bg-gradient-to-b from-gray-600 via-white to-sky-600  mx-auto mb-8 rounded"></div>

          <h3 className="text-lg font-semibold mb-5">
            Tool For Rebar Fabricator and Suppliers
          </h3>

          <p className="text-gray-700 mb-12 text-md">
            Rebar AI takeoff and estimating software provides instant automated
            Excel-based estimates, turning drawings into accurate quantities.
          </p>
        </motion.div>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4">
          {["Faster Estimates", "Custom Templates", "Saving"].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-blue-100 rounded-xl shadow-sm "
            >
              {item}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}