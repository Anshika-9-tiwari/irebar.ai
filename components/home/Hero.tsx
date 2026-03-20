"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-20">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        
        {/* Top Tagline */}
        <p className="text-sm md:text-base text-gray-500 mb-6">
          AI-based takeoff and  estimating tool  for  Rebar steel estimators.
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-gray-600">
          <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Bid 4X more
          </span>{" "}
          with AI takeoff and estimating software for Rebar
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
          I-Rebar is your a  takeoff and estimating software tool to accurate  estimates with a human-in-the-loop  process.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a href="contact" className="btn btn-primary rounded-full ml-4">
            Book Demo
            <span className="ml-1 text-2xl font-bold">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;