"use client";
import Navigation from "@/components/layout/navigation";
import PortfolioHero from "@/section/portfolio/portfolio-hero";
import SchoolList from "@/section/portfolio/school-list";
import Footer from "@/section/footer/footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Portfolio Hero Section */}
      <PortfolioHero />

      {/* School List Section */}
      <SchoolList />

      {/* Footer */}
      <Footer />
    </div>
  );
}
