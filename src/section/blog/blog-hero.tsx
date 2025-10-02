"use client";

export default function BlogHero() {
  return (
    <section id="blog-hero" className="relative overflow-hidden bg-brand-navy">
      {/* Background Ornaments */}
      <div className="relative w-full h-[240px] md:h-[400px]">
        {/* Ornament decorations */}
        <div className="absolute bottom-0 left-0 w-36 h-36 sm:w-[415.5px] sm:h-[360px] opacity-60">
          <img
            src="/ornament/hero-bottom-left.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute top-0 right-0 w-36 h-36 sm:w-[372px] sm:h-[354px] opacity-60">
          <img
            src="/ornament/hero-top-right.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-4 sm:mb-6 text-xs sm:text-sm px-5 py-2 border border-primary-brand rounded-full w-fit text-white mx-auto">
                Berita Terbaru
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Informasi Terbaru
              </h1>
              <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4" style={{color: '#93B4E7'}}>
                Ikuti perkembangan terkini seputar kegiatan, inovasi, dan pencapaian kami melalui berita dan informasi terbaru.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
