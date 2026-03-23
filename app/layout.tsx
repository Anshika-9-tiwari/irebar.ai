import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import type { Metadata } from "next";
import FloatingButtons from "@/components/layouts/whatsappfloat";
import TopBar from "@/components/layouts/TopBar";

export const metadata: Metadata = {
  title: "irebar.ai - AI Takeoff & Estimating Software",
  description:
    "AI-based rebar takeoff and estimating software for contractors and fabricators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <TopBar/>
        <Navbar />
        <main>{children}</main>
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}