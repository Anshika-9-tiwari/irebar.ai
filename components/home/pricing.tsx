"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white text-center">
      <div className="max-w-4xl mx-auto px-6">

        {/* Top Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Badge */}
          <div className="mb-12">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              New from iRebar
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-800">
            Beyond AI-based takeoff and estimating tool
          </h2>

          <p className="text-gray-700 font-semibold max-w-2xl mx-auto text-lg ">
            100% automated takeoffs and rebar estimation tool with human-in-loop.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="card bg-white text-gray-600 shadow-[0_10px_40px_rgba(59,130,246,0.15)] border border-primary/20 rounded-3xl p-10"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-6">
            Pricing →
          </h3>

          <ul className="space-y-3 text-gray-600 mb-6">
            <li>✔ No Subscription </li>
            <li>✔ No Setup Fees</li>
            <li>✔ No Monthly Fees</li>
            <li>✔ No Annual Commitment</li>
            <li>✔ Pay per takeoff</li>
          </ul>
 
          <p className="text-lg  text-gray-500 mb-8">
            <span className="text-2xl text-blue-700 font-semibold">Basic pricing starts from -</span> <br /> Residential take off - $25 USD to $100 USD <br /> Commercial take off - $100 USD to $500 USD
          </p>

          <a href="contact" className="btn btn-primary rounded-full ml-4">
            Book Free Trial
            <span className="ml-1 text-2xl font-bold">→</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}