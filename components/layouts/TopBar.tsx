"use client";

import { Mail, Phone,  MessageCircleCode } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-blue-700 via-indigo-400 to-blue-600 text-white text-md font-semibold backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">

        {/* LEFT - Email */}
        <div className="flex items-center gap-3 ">
          <Mail size={18} />
          <a
            href="mailto:contact@irebar.ai"
            className="hover:underline "
          >
            contact@irebar.ai
          </a>
        </div>

        {/* RIGHT - Icons */}
        <div className="flex items-center gap-5">

          {/* Call */}
          <a
            href="tel:+919810017750"
            className="hover:scale-110 transition duration-200  animate-pulse"
          >
            <Phone size={20} />
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919810017750?text=Hi%20I%20want%20a%20demo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-200 animate-pulse"
          >
            <MessageCircleCode size={20} />
          </a>

        </div>
      </div>
    </div>
  );
}