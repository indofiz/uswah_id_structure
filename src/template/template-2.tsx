"use client";
import Hero1 from "@/section/hero/hero-1";
import CompanyIntro from "@/section/about/company-intro";
import ProductsServices from "@/section/products/products-services";
import ClientPortfolio from "@/section/portfolio/client-portfolio";
import MitraKami from "@/section/partners/mitra-kami";
import BlogSection from "@/section/blog/blog-section";
import Footer from "@/section/footer/footer";
import Navigation from "@/components/layout/navigation";

export default function Template2() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <Hero1 />

      {/* Company Introduction */}
      <CompanyIntro />

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