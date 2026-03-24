"use client";

import { motion } from "framer-motion";

const faqs = [
  {
    question: "How does iRebar AI work?",
    answer:
      "iRebar AI uses advanced machine learning languages to analyze your uploaded construction drawings, specifications, and notes. It automatically identifies rebar elements, extracts quantities, and generates detailed takeoff reports, significantly reducing manual effort and errors.",
  },
  {
    question: "What types of trades does iRebar AI support?",
    answer:
      "iRebar AI is primarily built for rebar contractors, fabricators, and estimators. It focuses on Reinforcing Steel Estimates and quantity takeoffs .",
  },
  {
    question: "Who can use iRebar AI?",
    answer:
      "iRebar AI is designed for estimators, contractors, construction firms, and rebar suppliers. Whether you're a small contractor or a large enterprise, the platform helps streamline your estimating workflow and improve bidding efficiency.",
  },
  {
    question: "What are the benefits of using iRebar AI for takeoffs?",
    answer:
      "iRebar AI helps you save time, reduce human error, and increase bid capacity. You can generate accurate takeoffs faster, standardize your estimation process, and focus more on winning projects instead of 100% manual calculations.",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-100 via-white to-blue-100 text-gray-700 shadow-2xl border-t-2 border-t-gray-100">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          FAQs
          
        </h2>
        <div className="w-8 h-1 bg-primary mx-auto mb-12 rounded"></div>

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
  );
}