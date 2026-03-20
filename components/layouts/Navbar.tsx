"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "What We Do", href: "what-we-do" },
  { name: "Who We Are", href: "who-we-are" },
  { name: "Pricing", href: "pricing" },
  { name: "FAQs", href: "faqs" },
  { name: "Contact", href: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar bg-white text-gray-900 shadow-sm px-6 sticky top-0 z-50">
      
      {/* Left - Logo */}
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold text-primary">
          irebar.ai
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-primary">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right CTA */}
      <div className="hidden lg:flex">
        <a href="contact" className="btn btn-primary rounded-full ml-4  relative overflow-hidden animate-pulse">
          Book Demo
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          className="btn btn-ghost"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md lg:hidden">
          <ul className="menu p-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base hover:text-blue-400"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="contact"
                className="btn btn-primary w-full mt-2"
                onClick={() => setOpen(false)}
              >
                Book Demo
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}