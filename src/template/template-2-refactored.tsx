// Template-2 refactored following SOLID principles
"use client";
import Hero1 from "@/section/hero/hero-1";
import CompanyIntro from "@/section/about/company-intro";
import ProductsServices from "@/section/products/products-services";
import ClientPortfolio from "@/section/portfolio/client-portfolio";
import BlogSection from "@/section/blog/blog-section";
import Footer from "@/section/footer/footer";
import Navbar from "@/components/navigation/navbar";
import type { NavigationItem } from "@/types";

// Template component following Single Responsibility Principle (SRP)
// Its only responsibility is to compose the layout
export default function Template2Refactored() {
  // Navigation configuration (Open/Closed Principle - easy to extend)
  const navigationItems: NavigationItem[] = [
    { href: "#home", label: "Home" },
    { href: "#products", label: "Products" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#blog", label: "News" }
  ];

  const navigationConfig = {
    items: navigationItems,
    logoSrc: "/logo_uswah.png",
    logoAlt: "PT Uswah Salam AlAzhar",
    companyName: "PT Uswah Salam AlAzhar",
    companyShortName: "Uswah Salam"
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Dependency Injection */}
      <Navbar {...navigationConfig} />

      {/* Page Sections - Each component has single responsibility */}
      <Hero1 />
      <CompanyIntro />
      <ProductsServices />
      <ClientPortfolio />
      <BlogSection />
      <Footer />
    </div>
  );
}