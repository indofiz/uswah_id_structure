"use client";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function KarirHero() {
  return (
    <section id="karir-hero" className="relative overflow-hidden bg-white min-h-screen flex items-center">
      {/* Left Ornament - Vertically Centered */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-auto sm:w-48 md:w-64 lg:w-80">
        <img
          src="/ornament/left-karir.png"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Right Ornament - Vertically Centered */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-auto sm:w-48 md:w-64 lg:w-80">
        <img
          src="/ornament/right-karir.png"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto py-20 sm:py-24 md:py-32">
          {/* Main Heading with Gradient */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #204984 0%, #3C73C1 100%)'
            }}
          >
            Join with our team!
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-brand-navy mb-8 sm:mb-10 px-4">
            USWAH Salam AlAzhar - Dharmawangsa Square Unit 268, Jakarta Selatan. DKI Jakarta.
          </p>

          {/* Email Button */}
          <Button
            size="lg"
            className="text-sm sm:text-base md:text-lg px-8 sm:px-10 md:px-12 py-6 sm:py-7 md:py-8 rounded-lg text-black bg-yellow-300 hover:bg-yellow-400 transition-colors gap-3"
          >
            <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
            uswah@salam-alazhar.id
          </Button>
        </div>
      </div>
    </section>
  );
}
