'use client'

import Image from "next/image";
import { motion } from "framer-motion";
// import type { Metadata } from "next";
import Pricing from "@/components/home/pricing";
import CTA from "@/components/home/Contact";

// export const metadata: Metadata = {
//   title: "Pricing | irebar.ai",
// };

export default function PricingPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 via-white to-blue-50 py-22">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              {/* Small Heading */}
              <p className="text-gray-600 mb-8 text-base md:text-lg">
                AI-based takeoff and estimating tool pricing
              </p>

              {/* Main Heading */}
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
                Pricing that matches <br />
                <span className="text-primary">
                  trade-specific
                </span>{" "}
                bidding workflows
              </h1>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed">
                <span className="font-semibold">
                  I-Rebar AI fully automates takeoffs for you & delivers estimate-ready outputs.
                </span>{" "}
                Get AI takeoffs in 10 mins or AI-based takeoffs + Human-reviewed QA
                takeoffs & estimates in 48 hours - based on the trade you operate in.
              </p>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-[280px] md:h-[350px] lg:h-[400px]">
            <Image
              src="/rebarestimation.jpeg"
              alt="Pricing Hero"
              fill
              className="object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>
      <main>
        <Pricing/>
        <CTA/>
      </main>
    </>
  );
}