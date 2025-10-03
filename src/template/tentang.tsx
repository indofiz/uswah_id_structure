"use client";
import Navigation from "@/components/layout/navigation";
import Footer from "@/section/footer/footer";
import ClientPortfolio from "@/section/portfolio/client-portfolio";
import MitraKami from "@/section/partners/mitra-kami";
import TestimonialSection from "@/section/testimonial/testimonial-section";

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Tentang Kami Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Badge */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="mb-6 sm:mb-4 text-xs sm:text-sm px-5 py-2 border border-primary-brand rounded-full w-fit text-primary-brand mx-auto">
              Tentang Kami
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-brand-navy">
              Tentang Uswah Salam Al Azhar
            </h2>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <img
              src="/logo_uswah_big.png"
              alt="Uswah Logo"
              className="w-64 sm:w-80 md:w-96 h-auto"
              style={{ maxWidth: '400px' }}
            />
          </div>

          {/* Company Description */}
          <div className="max-w-5xl mx-auto mb-12 sm:mb-16">
            <p className="text-base sm:text-lg leading-relaxed text-brand-navy text-center">
              PT. Uswah Salam AlAzhar (PTUSA) adalah perusahaan teknologi informasi yang fokus utama nya adalah memberikan layanan sistem informasi pendidikan yang terintegrasi. Dimulai dari Unit Salam Al Azhar yang sudah mulai memberikan layanan sistem informasi pendidikan terintegrasi sejak Tahun 2019 untuk lebih 80 Sekolah Al Azhar di seluruh Indonesia, PTUSA secara resmi berdiri pada 29 September 2020 dan melayani kebutuhan sekolah pada multi jenjang pendidikan. Saat ini PTUSA terus melakukan inovasi teknologi dengan pengembangan produk diantaranya sistem Zakat Infak Sedekah dan Wakaf, digital library, asset management, dan gerbang layanan pembayaran digital melelui channel Virtual Account dan QRIS.
            </p>
          </div>

          {/* Visi & Misi */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Visi */}
            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-brand-navy">
                Visi
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-brand-navy">
                Menjadi sebuah perusahaan yang berdaya saing tinggi serta mampu memberikan kontribusi baik dalam bidang penelitian teknologi informasi dan komunikasi maupun pengabdian kepada masyarakat.
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-brand-navy">
                Misi
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-brand mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-base sm:text-lg leading-relaxed text-brand-navy">
                    Membangun ICT Pendidikan Nasional yang mandiri dengan cara menyediakan beragam produk dan layanan online terpadu
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-brand mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-base sm:text-lg leading-relaxed text-brand-navy">
                    Membangun sistem pembayaran digital yang aman serta terpercaya
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary-brand mt-2 mr-3 flex-shrink-0"></span>
                  <span className="text-base sm:text-lg leading-relaxed text-brand-navy">
                    Membantu meningkatkan layanan dakwah dan sosial melalui program digitalisasi
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden" style={{ backgroundColor: '#01193F' }}>
        {/* Top Right Ornament */}
        <div className="absolute top-0 right-0 w-32 sm:w-48 md:w-64 h-auto opacity-50">
          <img
            src="/ornament/ornament-video-top-right.png"
            alt=""
            className="w-full h-auto"
          />
        </div>

        {/* Bottom Left Ornament */}
        <div className="absolute bottom-0 left-0 w-32 sm:w-48 md:w-64 h-auto opacity-50">
          <img
            src="/ornament/ornament-video-bottom-left.png"
            alt=""
            className="w-full h-auto"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Video Container */}
          <div className="max-w-3xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
                src="https://www.youtube.com/embed/QMk6OERJVxQ"
                title="Uswah Salam Al Azhar Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Client Portfolio Section */}
      <ClientPortfolio />

      {/* Mitra Kami Section */}
      <MitraKami />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
