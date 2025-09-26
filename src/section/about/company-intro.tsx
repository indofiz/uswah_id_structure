"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CompanyIntro() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-4 sm:mb-6 text-xs sm:text-sm px-5 py-2 border border-primary-brand rounded-full w-fit text-brand-navy">
              Tentang Perusahaan Kami
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-brand-navy">
              Inovasi Teknologi dengan Nilai-Nilai Kemanusiaan
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed" style={{color: '#505050'}}>
              PT Uswah Salam Alazhar adalah perusahaan teknologi informasi yang berkomitmen untuk menghadirkan solusi digital yang tidak hanya canggih secara teknologi, tetapi juga bermanfaat secara sosial dan ekonomi. Kami fokus pada pengembangan sistem pendidikan, platform crowdfunding sosial, sistem pembayaran digital, dan Sistem Informasi Travel untuk industri perjalanan modern.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {[
                { iconSrc: "/icon/tentang-check.svg", label: "Tim Profesional Berpengalaman" },
                { iconSrc: "/icon/tentang-globe.svg", label: "Solusi Aman & Terpercaya" },
                { iconSrc: "/icon/tentang-shield.svg", label: "Transformasi Digital Efisien" },
                { iconSrc: "/icon/tentang-star.svg", label: "Dampak Sosial & Ekonomi" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <img
                    src={item.iconSrc}
                    alt=""
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                  <span className="text-sm sm:text-base" style={{color: '#505050'}}>{item.label}</span>
                </div>
              ))}
            </div>

            <Button className="w-full sm:w-auto text-white px-8 py-6 text-base font-medium" style={{background: '#01193F'}}>
              Pelajari Lebih Lanjut
            </Button>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {[
                { iconSrc: "/icon/grid-about-building.svg", value: "500+", label: "Educational Institutions" },
                { iconSrc: "/icon/grid-about-users.svg", value: "50K+", label: "Daily Active Users" },
                { iconSrc: "/icon/grid-about-star.svg", value: "4.9/5", label: "Customer Rating" },
                { iconSrc: "/icon/grid-about-system.svg", value: "99.9%", label: "System Uptime" }
              ].map((stat, index) => (
                <Card key={index} className="text-center shadow-none border bg-white transition-all duration-300">
                  <CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6">
                    <div
                      className="inline-flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl mb-3 sm:mb-4 relative"
                      style={{
                        background: 'linear-gradient(135deg, #335EA3 0%, #001A42 100%)',
                        boxShadow: '8px 8px 0  rgba(69, 171, 213, 0.3)'
                      }}
                    >
                      <img
                        src={stat.iconSrc}
                        alt=""
                        className="h-6 w-6 sm:h-8 sm:w-8"
                      />
                    </div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2" style={{color: '#01193F'}}>{stat.value}</div>
                    <div className="text-xs sm:text-sm px-1" style={{color: '#505050'}}>{stat.label}</div>
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