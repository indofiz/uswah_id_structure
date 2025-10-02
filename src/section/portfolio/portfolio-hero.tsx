"use client";

export default function PortfolioHero() {
  return (
    <section id="portfolio-hero" className="relative overflow-hidden bg-brand-navy">
      {/* Full Map Background Image */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
        <img
          src="/map.png"
          alt="Indonesia Map"
          className="w-full h-full object-cover object-left sm:object-center"
        />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-4 sm:mb-6 text-xs sm:text-sm px-5 py-2 border border-primary-brand rounded-full w-fit text-white mx-auto">
                Portofolio Kami
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Daftar Sekolah
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4" style={{color: '#93B4E7'}}>
                Sekolah-sekolah berikut menjanji bukti nyata perjalanan kami dalam membangun kolaborasi dan memberikan layanan terbaik.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
