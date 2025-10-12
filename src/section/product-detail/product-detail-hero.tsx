"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { ProductDetail } from "@/types";

interface ProductDetailHeroProps {
  product: ProductDetail;
}

export default function ProductDetailHero({ product }: ProductDetailHeroProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 md:py-36 bg-primary-brand">
      {/* Grid background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/grid-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-4 mx-auto lg:mx-0 text-xs sm:text-sm px-4 py-2 border border-yellow-300 bg-yellow-300 rounded-full w-fit text-brand-navy font-medium">
              {product.name}
            </div>

            <h1 className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              {product.tagline}
            </h1>

            <p className="mb-8 text-base sm:text-lg text-white/80 max-w-2xl mx-auto lg:mx-0">
              {product.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                className="text-sm sm:text-base px-6 py-6 bg-white text-brand-navy hover:bg-yellow-300 hover:opacity-100 transition-all"
                onClick={() => window.location.href = product.ctaLink}
              >
                {product.ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                {product.platforms.map((platform, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white"
                  >
                    <platform.icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-lg h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/20 to-brand-navy/20 rounded-3xl blur-3xl" />

              {/* Product illustration */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={product.heroImage}
                  alt={product.name}
                  className="w-full h-full object-contain relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
