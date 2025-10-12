"use client";
import { Card, CardContent } from "@/components/ui/card";
import type { ProductFeature } from "@/types";

interface ProductFeaturesProps {
  features: ProductFeature[];
}

export default function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy mb-4">
            Fitur Unggulan
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Solusi lengkap untuk manajemen pendidikan modern dengan berbagai fitur terintegrasi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group bg-white border border-gray-200 hover:border-sky-500/50 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="mb-4 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-sky-500 to-brand-navy rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-brand-navy mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
