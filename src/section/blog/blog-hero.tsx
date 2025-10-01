"use client";

export default function BlogHero() {
  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-br from-[#01193F] via-[#012247] to-[#01193F]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#45ABD5] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 left-1/4 w-96 h-96 bg-[#45ABD5] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full border border-[#45ABD5] bg-white/5 backdrop-blur-sm">
            <span className="text-[#45ABD5] text-sm font-medium">Berita Terbaru</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Informasi Terbaru
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ikuti perkembangan terkini seputar kegiatan, inovasi, dan pencapaian kami melalui berita dan informasi terbaru.
          </p>
        </div>
      </div>
    </section>
  );
}
