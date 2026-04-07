import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-1">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-15">
        
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold  mb-3">
            iRebar.ai
          </h2>
          <p className="text-sm text-gray-300">
            AI-powered takeoff and estimating software for rebar contractors.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm ">
            <li className="hover:text-blue-300"><a href="">Home</a></li>
            <li className="hover:text-blue-300"><a href="what-we-do">What We Do</a></li>
            <li className="hover:text-blue-300"><a href="who-we-are">Who We Are</a></li>
            <li className="hover:text-blue-300"><a href="pricing">Pricing</a></li>
            <li className="hover:text-blue-300"><a href="faqs">FAQs</a></li>
            <li className="hover:text-blue-300"><a href="contact">Contact</a></li>
          </ul>
        </div>

       

        {/* CTA */}
        <div>
          <h3 className="font-semibold mb-3">Get Started</h3>
          <p className="text-sm text-gray-300 mb-4">
            Book a free trial and see how iRebar.ai works.
          </p>
          <a href="contact" className="btn btn-primary w-full rounded-2xl border-gray-400">
            Book Free Trial
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 text-center py-4 text-sm">
        © {new Date().getFullYear()} iRebar.ai. All rights reserved.
      </div>
    </footer>
  );
}