"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does Rebar AI work?",
    answer:
      "Rebar AI uses advanced machine learning to analyze your uploaded construction drawings, specifications, and notes. It automatically identifies rebar elements, extracts quantities, and generates detailed takeoff reports, significantly reducing manual effort and errors.",
  },
  {
    question: "What types of trades does Rebar AI support?",
    answer:
      "Rebar AI is primarily built for rebar contractors, fabricators, and estimators. It focuses on reinforcement detailing and quantity takeoffs, but can also support related structural trades depending on project requirements.",
  },
  {
    question: "Who can use Rebar AI?",
    answer:
      "Rebar AI is designed for estimators, contractors, construction firms, and rebar suppliers. Whether you're a small contractor or a large enterprise, the platform helps streamline your estimating workflow and improve bidding efficiency.",
  },
  {
    question: "What are the benefits of using Rebar AI for takeoffs?",
    answer:
      "Rebar AI helps you save time, reduce human error, and increase bid capacity. You can generate accurate takeoffs faster, standardize your estimation process, and focus more on winning projects instead of manual calculations.",
  },
];

export default function FAQ() {
  return (

    <>
      <section className="relative h-[280px] md:h-[400px] flex items-center justify-center">
        
        {/* Background Image */}
        <img
          src="/rebar_takoff.jpg"
          alt="Rebar Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            Rebar AI Estimating
          </h1>
          <p className="text-sm md:text-lg text-gray-200">
            Let’s build smarter Rebar Estimates with AI
          </p>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-blue-100 via-white to-blue-100 text-gray-700    shadow-2xl border-t-2 border-t-gray-100">
        <div className="max-w-4xl mx-auto px-6">

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
            FAQs
          </h2>
          <div className="w-10 h-1 bg-primary mx-auto mb-12 rounded"></div>

          {/* FAQ List */}
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                {/* Question */}
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {faq.question}
                </h3>

                {/* Answer */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}