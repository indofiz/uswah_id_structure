"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
} from "lucide-react";

export default function Hero1() {
  return (
    <section id="home" className="relative overflow-hidden py-12 sm:py-20 md:py-32 bg-brand-navy">
      {/* Ornament decorations */}
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-[554px] sm:h-[480px]">
        <img
          src="/ornament/hero-bottom-left.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-[496px] sm:h-[472px]">
        <img
          src="/ornament/hero-top-right.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4  mx-auto sm:mb-6 text-xs sm:text-sm px-5 py-2 border border-primary-brand rounded-full w-fit text-white">
            Perusahaan Jasa Layanan IT Terpercaya
          </div>

          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white">
            <span>
              PT USWAH SALAM
            </span>
            <br />
            <span>
              AL AZHAR
            </span>
          </h1>

          <p className="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl text-white">
            Transforming Education Through Innovative Technology Solutions
          </p>

          <p className="mb-8 sm:mb-10 text-base sm:text-lg max-w-3xl mx-auto px-4 text-white">
            Empowering educational institutions across Indonesia with cutting-edge technology solutions that streamline operations, enhance learning experiences, and drive institutional growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-4 md:py-6 text-white hover:opacity-90 transition-opacity" style={{background: 'linear-gradient(135deg, #45ABD5 0%, #147BA6 100%)'}}>
              Explore Product
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="outline" className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-4 md:py-6 text-white border-white bg-transparent hover:bg-white hover:text-gray-900 transition-colors">
              Services
            </Button>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
            {[
              {
                label: "ISO 9001:2015",
                description: "Quality Management",
                image: "/sertification/iso-9001.png"
              },
              {
                label: "ISO 27001:2013",
                description: "Information Security",
                image: "/sertification/iso-27001.png"
              }
            ].map((item, index) => (
              <Card key={index} className="bg-transparent border-0 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto sm:max-w-xs flex-1">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.label}
                        className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                      />
                    </div>
                    <div className="flex flex-col text-left min-w-0">
                      <div className="text-sm sm:text-base font-semibold text-white leading-tight">{item.label}</div>
                      <div className="text-xs sm:text-sm text-white leading-tight">{item.description}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      
    </section>
  );
}