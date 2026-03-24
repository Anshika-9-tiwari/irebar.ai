"use client";

import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-20">
      <div className="container mx-auto px-6 text-center max-w-5xl">
        
        {/* Top Tagline */}
        <p className="text-base md:text-xl text-gray-500 mb-8">
          AI-based takeoff and  estimating tool  for  Rebar Steel Fabricators & Suppliers .
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8 text-gray-600">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
            Bid 4X more
          </span>{" "}
          with AI takeoff and estimating Tool for Rebar
        </h1>

        {/* Description */}
        <p className="text-gray-600  text-lg  md:text-xl mb-10 max-w-2xl mx-auto">
          iRebar is your a  takeoff and estimating software tool to accurate  estimates with a human-in-the-loop  process.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a href="contact" className="btn btn-primary rounded-full ml-4">
             Get Free Trial
            <span className="ml-1 text-2xl font-bold">→</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;