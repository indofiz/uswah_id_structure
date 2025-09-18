"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { ArrowRight, Smartphone, Settings, GraduationCap, FileText, Building2, UserCheck, Wallet, PieChart } from "lucide-react";

export default function ProductsServices() {
  const products = [
    {
      title: "Mobile Application",
      description: "Native mobile apps for iOS and Android with seamless user experience and offline capabilities.",
      icon: Smartphone,
      frameType: "mobile",
      deviceColor: "#45ABD5",
      screenContent: {
        type: "app",
        primaryColor: "#45ABD5",
        secondaryColor: "#01193F"
      },
      iconColor: "#45ABD5",
      bgColor: "#ffffff"
    },
    {
      title: "e-Rapor System",
      description: "Digital report card system with automated grading, progress tracking, and parent communication.",
      icon: FileText,
      frameType: "desktop",
      deviceColor: "#01193F",
      screenContent: {
        type: "report",
        primaryColor: "#01193F",
        secondaryColor: "#45ABD5"
      },
      iconColor: "#01193F",
      bgColor: "#ffffff"
    },
    {
      title: "Backoffice System",
      description: "Comprehensive administrative platform for managing operations, finances, and institutional workflows.",
      icon: Settings,
      frameType: "desktop",
      deviceColor: "#45ABD5",
      screenContent: {
        type: "dashboard",
        primaryColor: "#45ABD5",
        secondaryColor: "#01193F"
      },
      iconColor: "#45ABD5",
      bgColor: "#ffffff"
    },
    {
      title: "Learning Management System",
      description: "Advanced LMS with interactive content delivery, assessment tools, and learning analytics.",
      icon: GraduationCap,
      frameType: "desktop",
      deviceColor: "#01193F",
      screenContent: {
        type: "lms",
        primaryColor: "#01193F",
        secondaryColor: "#45ABD5"
      },
      iconColor: "#01193F",
      bgColor: "#ffffff"
    },
    {
      title: "Yazan System",
      description: "Digital writing and documentation platform with collaborative editing and version control.",
      icon: FileText,
      frameType: "desktop",
      deviceColor: "#45ABD5",
      screenContent: {
        type: "editor",
        primaryColor: "#45ABD5",
        secondaryColor: "#01193F"
      },
      iconColor: "#45ABD5",
      bgColor: "#ffffff"
    },
    {
      title: "AMS - Academic Management",
      description: "Complete academic management solution covering curriculum, scheduling, and student lifecycle management.",
      icon: Building2,
      frameType: "desktop",
      deviceColor: "#01193F",
      screenContent: {
        type: "academic",
        primaryColor: "#01193F",
        secondaryColor: "#45ABD5"
      },
      iconColor: "#01193F",
      bgColor: "#ffffff"
    },
    {
      title: "HRIS - Human Resources",
      description: "Integrated HR management system for payroll, attendance, performance, and employee development.",
      icon: UserCheck,
      frameType: "desktop",
      deviceColor: "#45ABD5",
      screenContent: {
        type: "hr",
        primaryColor: "#45ABD5",
        secondaryColor: "#01193F"
      },
      iconColor: "#45ABD5",
      bgColor: "#ffffff"
    },
    {
      title: "ZISWAF Management",
      description: "Comprehensive system for managing Zakat, Infaq, Sedekah, and Wakaf with transparency and accountability.",
      icon: Wallet,
      frameType: "mobile",
      deviceColor: "#01193F",
      screenContent: {
        type: "donation",
        primaryColor: "#01193F",
        secondaryColor: "#45ABD5"
      },
      iconColor: "#01193F",
      bgColor: "#ffffff"
    },
    {
      title: "BI Dashboard",
      description: "Business Intelligence dashboard with real-time analytics, reporting, and data visualization tools.",
      icon: PieChart,
      frameType: "desktop",
      deviceColor: "#45ABD5",
      screenContent: {
        type: "analytics",
        primaryColor: "#45ABD5",
        secondaryColor: "#01193F"
      },
      iconColor: "#45ABD5",
      bgColor: "#ffffff"
    }
  ];

  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4 sm:mb-6 text-xs sm:text-sm" style={{borderColor: '#45ABD5', color: '#01193F'}}>
            Produk Kami
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Solusi Teknologi Digital Terpadu
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Temukan berbagai solusi inovatif yang dirancang untuk mentransformasi institusi Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group bg-white border border-gray-200 shadow-none hover:shadow-sm transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              {/* Device Frame Preview */}
              <div className="relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center h-64">
                {product.frameType === 'mobile' ? (
                  // Mobile Frame
                  <div className="relative">
                    <div className="w-20 h-36 rounded-2xl border-4 shadow-xl" style={{borderColor: product.deviceColor, backgroundColor: product.deviceColor}}>
                      <div className="w-full h-full rounded-xl bg-white m-0.5 overflow-hidden">
                        {/* Mobile Screen Content */}
                        <div className="h-full flex flex-col">
                          {/* Status Bar */}
                          <div className="h-1.5 bg-gray-100"></div>
                          {/* Header */}
                          <div className="h-4 flex items-center px-2" style={{backgroundColor: product.screenContent.primaryColor}}>
                            <div className="w-8 h-0.5 bg-white rounded"></div>
                          </div>
                          {/* Content Area */}
                          <div className="flex-1 p-1.5 space-y-1">
                            <div className="h-1 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-1 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-4 rounded" style={{backgroundColor: product.screenContent.secondaryColor + '20'}}></div>
                            <div className="flex space-x-1">
                              <div className="w-6 h-6 rounded" style={{backgroundColor: product.screenContent.primaryColor + '40'}}></div>
                              <div className="flex-1">
                                <div className="h-0.5 bg-gray-300 rounded mb-0.5"></div>
                                <div className="h-0.5 bg-gray-200 rounded w-2/3"></div>
                              </div>
                            </div>
                          </div>
                          {/* Bottom Navigation */}
                          <div className="h-3 border-t border-gray-100 flex items-center justify-center space-x-2">
                            <div className="w-1 h-1 rounded-full" style={{backgroundColor: product.screenContent.primaryColor}}></div>
                            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                            <div className="w-1 h-1 rounded-full bg-gray-300"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Mobile Home Button */}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full" style={{backgroundColor: product.deviceColor}}></div>
                  </div>
                ) : (
                  // Desktop Frame
                  <div className="relative">
                    <div className="w-32 h-20 rounded-lg border-2 shadow-xl" style={{borderColor: product.deviceColor, backgroundColor: product.deviceColor}}>
                      <div className="w-full h-full rounded-md bg-white m-0.5 overflow-hidden">
                        {/* Desktop Screen Content */}
                        <div className="h-full flex flex-col">
                          {/* Title Bar */}
                          <div className="h-2 border-b border-gray-100 flex items-center px-1" style={{backgroundColor: product.screenContent.primaryColor}}>
                            <div className="flex space-x-0.5">
                              <div className="w-0.5 h-0.5 rounded-full bg-white/80"></div>
                              <div className="w-0.5 h-0.5 rounded-full bg-white/80"></div>
                              <div className="w-0.5 h-0.5 rounded-full bg-white/80"></div>
                            </div>
                          </div>
                          {/* Content Area */}
                          <div className="flex-1 flex">
                            {/* Sidebar */}
                            <div className="w-6 border-r border-gray-100 p-1 space-y-1">
                              <div className="h-0.5 bg-gray-300 rounded"></div>
                              <div className="h-0.5 bg-gray-200 rounded w-3/4"></div>
                              <div className="h-0.5 bg-gray-200 rounded w-1/2"></div>
                            </div>
                            {/* Main Content */}
                            <div className="flex-1 p-1 space-y-1">
                              <div className="h-1 rounded w-3/4" style={{backgroundColor: product.screenContent.primaryColor + '40'}}></div>
                              <div className="grid grid-cols-3 gap-0.5">
                                <div className="h-3 rounded" style={{backgroundColor: product.screenContent.secondaryColor + '20'}}></div>
                                <div className="h-3 bg-gray-100 rounded"></div>
                                <div className="h-3 bg-gray-100 rounded"></div>
                              </div>
                              <div className="h-0.5 bg-gray-200 rounded w-2/3"></div>
                              <div className="h-0.5 bg-gray-200 rounded w-1/2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Desktop Stand */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-1 h-2" style={{backgroundColor: product.deviceColor}}></div>
                      <div className="w-8 h-0.5 -mt-0.5" style={{backgroundColor: product.deviceColor}}></div>
                    </div>
                  </div>
                )}

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white shadow-lg flex items-center justify-center">
                  <product.icon className="h-4 w-4" style={{color: product.iconColor}} />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <CardTitle className="text-lg font-bold text-gray-900 mb-2">{product.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </CardDescription>

                {/* Simple CTA */}
                <Button variant="ghost" className="w-full justify-between p-0 h-auto" style={{color: product.iconColor}}>
                  <span className="font-medium">Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}