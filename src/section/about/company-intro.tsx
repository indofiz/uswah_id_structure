"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Star, Shield, CheckCircle, ChevronRight, Building2, Users } from "lucide-react";

export default function CompanyIntro() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Badge variant="outline" className="mb-4 sm:mb-6 text-xs sm:text-sm" style={{borderColor: '#45ABD5', color: '#01193F'}}>
              Tentang Perusahaan Kami
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Inovasi Teknologi dengan Nilai-Nilai Kemanusiaan
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              PT Uswah Salam Alazhar adalah perusahaan teknologi informasi yang berkomitmen untuk menghadirkan solusi digital yang tidak hanya canggih secara teknologi, tetapi juga bermanfaat secara sosial dan ekonomi. Kami fokus pada pengembangan sistem pendidikan, platform crowdfunding sosial, sistem pembayaran digital, dan Sistem Informasi Travel untuk industri perjalanan modern.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {[
                { icon: CheckCircle, label: "Tim Profesional Berpengalaman", color: '#45ABD5' },
                { icon: Shield, label: "Solusi Aman & Terpercaya", color: '#01193F' },
                { icon: Globe, label: "Transformasi Digital Efisien", color: '#45ABD5' },
                { icon: Star, label: "Dampak Sosial & Ekonomi", color: '#01193F' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6" style={{color: item.color}} />
                  <span className="text-sm sm:text-base text-gray-700">{item.label}</span>
                </div>
              ))}
            </div>

            <Button className="w-full sm:w-auto text-white" style={{background: '#01193F'}}>
              Pelajari Lebih Lanjut
              <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {[
                { icon: Building2, value: "500+", label: "Educational Institutions", color: 'linear-gradient(135deg, #45ABD5 0%, #147BA6 100%)' },
                { icon: Users, value: "50K+", label: "Daily Active Users", color: 'linear-gradient(135deg, #45ABD5 0%, #147BA6 100%)' },
                { icon: Star, value: "4.9/5", label: "Customer Rating", color: 'linear-gradient(135deg, #45ABD5 0%, #147BA6 100%)' },
                { icon: CheckCircle, value: "99.9%", label: "System Uptime", color: 'linear-gradient(135deg, #45ABD5 0%, #147BA6 100%)' }
              ].map((stat, index) => (
                <Card key={index} className="text-center border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6">
                    <div className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg mb-3 sm:mb-4" style={{background: stat.color}}>
                      <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-600 px-1">{stat.label}</div>
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