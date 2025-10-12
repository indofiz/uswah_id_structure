"use client";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function ProductsServices() {
  const products = [
    {
      title: "Mobile Application",
      description: "Native mobile apps for iOS and Android with seamless user experience and offline capabilities.",
      image: "/product/image 4-1.png",
      link: "/product/salam-mobile"
    },
    {
      title: "e-Rapor System",
      description: "Digital report card system with automated grading, progress tracking, and parent communication.",
      image: "/product/image 4-2.png",
      link: "/e-rapor"
    },
    {
      title: "Backoffice System",
      description: "Comprehensive administrative platform for managing operations, finances, and institutional workflows.",
      image: "/product/image 4-3.png",
      link: "/salam-admin"
    },
    {
      title: "Learning Management System",
      description: "Advanced LMS with interactive content delivery, assessment tools, and learning analytics.",
      image: "/product/image 4-4.png",
      link: "/lms-moodle"
    },
    {
      title: "Yazan System",
      description: "Digital writing and documentation platform with collaborative editing and version control.",
      image: "/product/image 4-5.png",
      link: "/lms-yazan"
    },
    {
      title: "AMS - Academic Management",
      description: "Complete academic management solution covering curriculum, scheduling, and student lifecycle management.",
      image: "/product/image 4-6.png",
      link: "/ams"
    },
    {
      title: "HRIS - Human Resources",
      description: "Integrated HR management system for payroll, attendance, performance, and employee development.",
      image: "/product/image 4-7.png"
    },
    {
      title: "ZISWAF Management",
      description: "Comprehensive system for managing Zakat, Infaq, Sedekah, and Wakaf with transparency and accountability.",
      image: "/product/image 4-8.png",
      link: "/ziswaf"
    },
    {
      title: "BI Dashboard",
      description: "Business Intelligence dashboard with real-time analytics, reporting, and data visualization tools.",
      image: "/product/image 4.png",
      link: "/bi-dashboard"
    }
  ];

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20" style={{backgroundColor: '#F5F5F5'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-4 sm:mb-6 text-xs sm:text-sm px-5 py-2 border border-primary-brand rounded-full w-fit text-primary-brand bg-white mx-auto">
            Produk Kami
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4 text-brand-navy">
            Solusi Teknologi Digital Terpadu
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4" style={{color: '#505050'}}>
            Temukan berbagai solusi inovatif yang dirancang untuk mentransformasi institusi Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group bg-white rounded-xl shadow-none border transition-all duration-300 overflow-hidden" style={{borderColor: '#DADADA'}}>
              {/* Product Image */}
              <div className="relative h-64 bg-gray-100 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />

                {/* Phone Product Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white shadow-lg flex items-center justify-center">
                  <img
                    src="/icon/phone-product.svg"
                    alt=""
                    className="h-6 w-6"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div style={{padding: '12px 32px 24px 32px'}}>
                <CardTitle className="text-xl font-semibold mb-3 text-brand-navy" style={{fontSize: '20px'}}>
                  {product.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed mb-4 line-clamp-4 text-brand-navy">
                  {product.description}
                </CardDescription>

                {/* Lihat Detail Button */}
                {product.link ? (
                  <a href={product.link}>
                    <Button variant="ghost" className="p-0 h-auto w-full text-primary-brand hover:text-primary-brand/80 hover:bg-transparent flex justify-between gap-2">
                      <span className="font-medium flex-1 text-left">Lihat Detail</span>
                      <img
                        src="/icon/arrow-right-blue.svg"
                        alt=""
                        className="h-4 w-4"
                      />
                    </Button>
                  </a>
                ) : (
                  <Button variant="ghost" className="p-0 h-auto w-full text-primary-brand hover:text-primary-brand/80 hover:bg-transparent flex justify-between gap-2">
                    <span className="font-medium flex-1 text-left">Lihat Detail</span>
                    <img
                      src="/icon/arrow-right-blue.svg"
                      alt=""
                      className="h-4 w-4"
                    />
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}