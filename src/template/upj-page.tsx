"use client";

import Navigation from "@/components/layout/navigation";
import ProductDetailHero from "@/section/product-detail/product-detail-hero";
import ProductFeatures from "@/section/product-detail/product-features";
import ProductBenefits from "@/section/product-detail/product-benefits";
import ProductCTA from "@/section/product-detail/product-cta";
import Footer from "@/section/footer/footer";
import { DataProviderFactory } from "@/data";

export default function UPJPage() {
  const productData = DataProviderFactory.createUPJProvider().getData();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <ProductDetailHero product={productData} />

      {/* Features Section */}
      <ProductFeatures features={productData.features} />

      {/* Benefits Section */}
      <ProductBenefits
        userBenefits={productData.benefits.users}
        institutionBenefits={productData.benefits.institutions}
        userBenefitsTitle="Kemudahan untuk Keluarga"
        userBenefitsDescription="Pelayanan pengurusan jenazah yang penuh kepedulian dan sesuai syariat Islam"
        institutionBenefitsTitle="Layanan untuk Komunitas"
        institutionBenefitsDescription="Solusi pemakaman Islami yang terpercaya untuk institusi dan komunitas"
      />

      {/* CTA Section */}
      <ProductCTA
        productName={productData.name}
        ctaText={productData.ctaText}
        ctaLink={productData.ctaLink}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
