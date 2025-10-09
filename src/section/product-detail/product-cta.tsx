"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

interface ProductCTAProps {
  productName: string;
  ctaText: string;
  ctaLink: string;
}

export default function ProductCTA({ productName, ctaText, ctaLink }: ProductCTAProps) {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-sky-500 via-primary-brand to-navy-brand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <Card className="bg-white border-0 shadow-2xl overflow-hidden mb-8">
            <CardContent className="p-8 sm:p-12 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-brand mb-4">
                Siap Memulai Transformasi Digital?
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Hubungi kami untuk konsultasi gratis dan demo {productName}. Tim kami siap membantu institusi Anda mencapai excellence dalam pendidikan digital.
              </p>

              <Button
                className="text-base sm:text-lg px-8 py-6 bg-gradient-to-r from-sky-500 to-navy-brand text-white hover:opacity-90 transition-all shadow-lg"
                onClick={() => window.location.href = ctaLink}
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-6 text-center">
                <div className="mb-3 w-10 h-10 bg-white rounded-lg flex items-center justify-center mx-auto">
                  <Mail className="h-5 w-5 text-sky-500" />
                </div>
                <p className="text-sm text-white/80 mb-1">Email</p>
                <p className="text-sm font-medium text-white">uswah@salam-alazhar.id</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-6 text-center">
                <div className="mb-3 w-10 h-10 bg-white rounded-lg flex items-center justify-center mx-auto">
                  <Phone className="h-5 w-5 text-sky-500" />
                </div>
                <p className="text-sm text-white/80 mb-1">Telepon</p>
                <p className="text-sm font-medium text-white">(021) 72786730</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border border-white/20">
              <CardContent className="p-6 text-center">
                <div className="mb-3 w-10 h-10 bg-white rounded-lg flex items-center justify-center mx-auto">
                  <MapPin className="h-5 w-5 text-sky-500" />
                </div>
                <p className="text-sm text-white/80 mb-1">Lokasi</p>
                <p className="text-sm font-medium text-white">Jakarta Selatan</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
