"use client";

import CompanyIntro from "@/section/about/company-intro";
import Services from "@/section/services/services";
import ProductsServices from "@/section/products/products-services";
import ClientPortfolio from "@/section/portfolio/client-portfolio";
import MitraKami from "@/section/partners/mitra-kami";
import BlogSection from "@/section/blog/blog-section";
import Footer from "@/section/footer/footer";
import Navigation from "@/components/layout/navigation";
import Hero2 from "@/section/hero/hero-2";

export default function Template2() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero2 />

      {/* Company Introduction */}
      <CompanyIntro />

      {/* Services */}
      <Services />

      {/* Products and Services */}
      <ProductsServices />

      {/* Client Portfolio */}
      <ClientPortfolio />

      {/* Mitra Kami */}
      <MitraKami />

      {/* Blog Section */}
      <BlogSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}