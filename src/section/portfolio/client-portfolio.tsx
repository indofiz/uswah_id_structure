"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function ClientPortfolio() {
  const partners = [
    { name: "Yayasan Al Azhar Membangun", logo: "/client/yam.png", type: "Yayasan Pendidikan" },
    { name: "Yayasan Pendidikan Islam", logo: "/client/yapi.png", type: "Lembaga Pendidikan" },
    { name: "Yayasan Kemala Ilmu", logo: "/client/ykih.png", type: "Institusi Pendidikan" },
    { name: "Yayasan Pendidikan Umat", logo: "/client/ypu.png", type: "Yayasan Pendidikan" },
    { name: "LAZ Nurul Hayat", logo: "/client/laz.png", type: "Lembaga Amil Zakat" },
    { name: "Yayasan Nurul Salam", logo: "/client/yns.png", type: "Yayasan Pendidikan" },
    { name: "Yayasan Pendidikan Islam Singapura", logo: "/client/logo_ypis_.png", type: "Lembaga Pendidikan" },
    { name: "Yayasan Pendidikan Indonesia", logo: "/client/logo_ypi_.png", type: "Yayasan Pendidikan" },
    { name: "Avicena Medical Center", logo: "/client/avicena.png", type: "Rumah Sakit" },
    { name: "Yayasan Ika Cendekia", logo: "/client/logo_yayasanikc_.png", type: "Lembaga Pendidikan" },
    { name: "Yayasan Lampung", logo: "/client/logo_yayasanlampung_.png", type: "Yayasan Pendidikan" },
    { name: "Yayasan Umulyatama", logo: "/client/logo_yayasanumulyatama_.png", type: "Lembaga Pendidikan" }
  ];

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <Badge variant="outline" className="mb-4 sm:mb-6 text-xs sm:text-sm" style={{borderColor: '#45ABD5', color: '#01193F'}}>
            Klien Kami
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">
            Dipercaya oleh Berbagai Institusi Terkemuka
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Bergabunglah dengan ratusan yayasan, lembaga pendidikan, dan organisasi yang telah mentransformasi operasional mereka dengan solusi kami
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-6 mb-12 sm:mb-16">
          {partners.map((partner, index) => (
            <Card key={index} className="text-center border-gray-200 hover:shadow-md transition-shadow">
              <CardContent className="pt-4 sm:pt-6 pb-4 sm:pb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-lg sm:rounded-xl flex items-center justify-center bg-white p-2">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium px-1">{partner.type}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-2" style={{background: 'linear-gradient(135deg, #f0f9ff 0%, #f8fafc 100%)', borderColor: '#45ABD5'}}>
          <CardContent className="p-4 sm:p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center">
              {[
                { value: "500+", label: "Educational Institutions", color: '#45ABD5' },
                { value: "50K+", label: "Active Students", color: '#01193F' },
                { value: "99.9%", label: "System Reliability", color: '#45ABD5' },
                { value: "24/7", label: "Technical Support", color: '#01193F' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 sm:mb-2" style={{color: stat.color}}>{stat.value}</div>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 px-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}