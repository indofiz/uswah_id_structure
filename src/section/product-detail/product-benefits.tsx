"use client";
import { Card, CardContent } from "@/components/ui/card";
import type { ProductBenefit } from "@/types";

interface ProductBenefitsProps {
  userBenefits: ProductBenefit[];
  institutionBenefits: ProductBenefit[];
  userBenefitsTitle?: string;
  userBenefitsDescription?: string;
  institutionBenefitsTitle?: string;
  institutionBenefitsDescription?: string;
}

export default function ProductBenefits({
  userBenefits,
  institutionBenefits,
  userBenefitsTitle = "Kemudahan untuk Siswa & Orang Tua",
  userBenefitsDescription = "Akses mudah ke informasi pendidikan dan pembayaran dalam satu aplikasi",
  institutionBenefitsTitle = "Efisiensi untuk Manajemen Sekolah",
  institutionBenefitsDescription = "Tingkatkan efisiensi operasional dengan sistem terintegrasi dan transparan"
}: ProductBenefitsProps) {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* User Benefits */}
        <div className="mb-16 sm:mb-20">
          <div className="text-center mb-12">
            <div className="mb-3 mx-auto text-sm px-4 py-2 border border-sky-500 bg-sky-50 rounded-full w-fit text-sky-700 font-medium">
              Untuk Pengguna
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              {userBenefitsTitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {userBenefitsDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {userBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-sky-50 to-white border border-sky-100 hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center mx-auto">
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      {benefit.title}
                    </h3>

                    <p className="text-sm text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Institution Benefits */}
        {institutionBenefits.length > 0 && (
          <div>
            <div className="text-center mb-12">
              <div className="mb-3 mx-auto text-sm px-4 py-2 border border-sky-500 bg-sky-50 rounded-full w-fit text-sky-700 font-medium">
                Untuk Institusi
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                {institutionBenefitsTitle}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                {institutionBenefitsDescription}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {institutionBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-brand-navy/5 to-white border border-brand-navy/10 hover:shadow-md transition-all duration-300"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 w-12 h-12 bg-brand-navy rounded-lg flex items-center justify-center mx-auto">
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      <h3 className="text-lg font-bold text-brand-navy mb-2">
                        {benefit.title}
                      </h3>

                      <p className="text-sm text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
