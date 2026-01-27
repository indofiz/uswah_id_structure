"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin, type LucideIcon } from "lucide-react";

interface ProductCTAProps {
  productName: string;
  ctaText: string;
  ctaLink: string;
}

interface ContactItem {
  icon: LucideIcon;
  label: string;
  href?: string;
}

const contactItems: ContactItem[] = [
  { icon: Mail, label: "uswah@salam-alazhar.id", href: "mailto:uswah@salam-alazhar.id" },
  { icon: Phone, label: "(021) 72786730", href: "tel:02172786730" },
  { icon: MapPin, label: "Jakarta Selatan" },
];

export default function ProductCTA({ productName, ctaText, ctaLink }: ProductCTAProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-primary-brand">
          {/* Grid background */}
          <div className="absolute inset-0">
            <img
              src="/grid-bg.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Illustration - Hidden on mobile, visible from sm up */}
          <div className="hidden sm:flex absolute inset-y-0 right-4 md:right-8 lg:right-12 w-48 md:w-64 lg:w-80 items-center justify-center pointer-events-none">
            <img
              src="/ILLUSTRATION-CONTACT.svg"
              alt=""
              className="w-full h-auto object-contain opacity-90"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-14 lg:px-16 lg:py-16">
            {/* Text Content & Button */}
            <div className="max-w-md sm:max-w-lg md:max-w-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
                Siap Memulai Transformasi Digital?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8">
                Hubungi kami untuk konsultasi gratis dan demo {productName}. Tim kami siap membantu institusi Anda.
              </p>

              <Button
                className="w-full sm:w-auto text-sm sm:text-base px-5 sm:px-6 py-5 sm:py-6 bg-white text-brand-navy hover:bg-yellow-300 transition-all font-semibold"
                onClick={() => window.location.href = ctaLink}
              >
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 sm:mt-10">
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                {contactItems.map(({ icon: Icon, label, href }) => {
                  const content = (
                    <>
                      <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium">{label}</span>
                    </>
                  );

                  return href ? (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={label} className="flex items-center gap-3 text-white/90">
                      {content}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
