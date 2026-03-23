"use client";

import { Phone, MessageCircleCode } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      {/* WhatsApp */}
      <a
        href="https://wa.me/919810017750" 
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success rounded-full shadow-xl hover:scale-110 transition-all duration-300 animate-bounce"
      >
        <MessageCircleCode size={22} />
        
      </a>

      {/* Call */}
      <a
        href="tel:+919810017750"
        className="btn btn-primary rounded-full shadow-lg hover:scale-110 transition-all duration-300 animate-pulse"
      >
        <Phone size={22} />
      </a>

    </div>
  );
}