"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
} from "lucide-react";

export default function Hero1() {
  return (
    <section id="home" className="relative overflow-hidden py-12 sm:py-20 md:py-32" style={{background: 'linear-gradient(135deg, #f0f9ff 0%, #ffffff 50%, #f8fafc 100%)'}}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 sm:mb-6 text-xs sm:text-sm" style={{borderColor: '#45ABD5', color: '#01193F'}}>
            Perusahaan Jasa Layanan IT Terpercaya
          </Badge>

          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900">
            <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(135deg, #249BCD 0%, #147BA6 100%)'}}>
              PT Uswah Salam
            </span>
            <br />
            AlAzhar
          </h1>

          <p className="mb-6 sm:mb-8 text-lg sm:text-xl md:text-2xl text-gray-600">
            Transforming Education Through Innovative Technology Solutions
          </p>

          <p className="mb-8 sm:mb-10 text-base sm:text-lg text-gray-500 max-w-3xl mx-auto px-4">
            Empowering educational institutions across Indonesia with cutting-edge technology solutions that streamline operations, enhance learning experiences, and drive institutional growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 md:py-6 text-white hover:opacity-90 transition-opacity" style={{background: 'linear-gradient(135deg, #45ABD5 0%, #147BA6 100%)'}}>
              Explore Product
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="outline" className="text-sm sm:text-base md:text-lg px-6 sm:px-8 py-3 sm:py-4 md:py-6">
              Services
            </Button>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-12 sm:mt-16 md:mt-20 max-w-4xl mx-auto px-4">
          {/* Mobile: Title above, Desktop: Title inline with certifications */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-8">
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
                <Card key={index} className="text-center border-gray-200 hover:shadow-md transition-shadow w-full sm:w-auto">
                  <CardContent className="pt-4 pb-4">
                    <div className="flex flex-col lg:flex-row items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.label}
                        className="h-12 w-12 sm:h-16 sm:w-16 mx-auto object-contain"
                      />
                      <div className="flex justify-start flex-col text-left">
                      <div className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{item.label}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{item.description}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}