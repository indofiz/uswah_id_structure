"use client";
import { Card, CardContent } from "@/components/ui/card";

export default function MitraKami() {
  const mitras = [
    { name: "Yayasan Pendidikan Contoh", logo: "/mitra/image 16.png" },
    { name: "Yayasan Pendidikan Contoh", logo: "/mitra/image 17.png" },
    { name: "Yayasan Pendidikan Contoh", logo: "/mitra/image 18.png" },
    { name: "Yayasan Pendidikan Contoh", logo: "/mitra/image 19.png" },
    { name: "Yayasan Pendidikan Contoh", logo: "/mitra/image 20.png" },
    { name: "Yayasan Pendidikan Contoh", logo: "/mitra/image 21.png" },
    { name: "Yayasan Pendidikan Contoh", logo: "/mitra/image 22.png" },
    { name: "Yayasan Pendidikan Contoh", logo: "/mitra/image 24.png" },
    { name: "Yayasan Pendidikan Contoh", logo: "/mitra/image 25.png" },
    { name: "Yayasan Pendidikan Contoh", logo: "/mitra/image 26.png" },
    { name: "Yayasan Pendidikan Contoh", logo: "/mitra/JKP INDO.png" },
    { name: "Yayasan Pendidikan Contoh", logo: "/mitra/imageeee.png" }
  ];

  return (
    <section id="mitra" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-4 sm:mb-6 text-xs sm:text-sm px-5 py-2 border border-primary-brand rounded-full w-fit text-primary-brand bg-white mx-auto">
            Mitra Kami
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4 text-brand-navy">
            Mitra Yang Berkerjasama Dengan Kami
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4" style={{color: '#505050'}}>
            Dukungan mitra menjadi bagian penting dalam perjalanan kami untuk menciptakan solusi terbaik dan memberikan manfaat nyata.
          </p>
        </div>

        {/* 4x3 Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {mitras.map((mitra, index) => (
            <Card key={index} className="text-center border hover:shadow-md transition-shadow" style={{borderColor: '#DADADA'}}>
              <CardContent className="pt-6 sm:pt-8 pb-6 sm:pb-8">
                <div className="w-full h-20 sm:h-24 mx-auto mb-3 sm:mb-4 flex items-center justify-center bg-white">
                  <img
                    src={mitra.logo}
                    alt={mitra.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-xs sm:text-sm font-medium px-1 text-brand-navy">{mitra.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}