"use client";
import Navigation from "@/components/layout/navigation";
import KarirHero from "@/section/karir/karir-hero";
import Footer from "@/section/footer/footer";

export default function Karir() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Karir Hero Section */}
      <KarirHero />

      {/* Footer */}
      <Footer />
    </div>
  );
}
