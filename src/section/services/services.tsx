
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  return (
    <section className="py-12 sm:py-16  bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-4 sm:mb-6 text-xs sm:text-sm px-5 py-2 border border-primary-brand rounded-full w-fit text-primary-brand bg-white mx-auto">
            Layanan Kami
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4 text-brand-navy">
            Solusi Terbaik untuk Kebutuhan Anda
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4" style={{color: '#505050'}}>
            Kami hadir dengan layanan terpadu yang membantu Anda mencapai tujuan lebih mudah, lebih efektif, dan lebih profesional.
          </p>
        </div>

        {/* Two Column Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Development Services Card */}
          <Card
            className="relative overflow-hidden border-0 shadow-none"
            style={{
              background: 'linear-gradient(135deg, #61C9F5 0%, #3793BA 100%)',
              padding: '40px'
            }}
          >
            <CardContent className="p-0 relative z-10">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <img
                    src="/icon/services-development.svg"
                    alt="Development Services"
                    className="w-8 h-8"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-white">
                Pengembangan Aplikasi
              </h3>
              <p className="text-white text-opacity-90 mb-6 leading-relaxed">
                Kami menyediakan jasa pengembangan aplikasi dan sistem berbasis web & mobile sesuai kebutuhan bisnis Anda, mulai dari perencanaan, desain, pengembangan, hingga implementasi dan pemeliharaan.
              </p>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                {["Web App", "Mobile Apps", "Custom Systems", "Maintenance"].map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full text-brand-navy text-sm bg-white font-medium"
                    style={{padding: '6px 14px'}}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>

            {/* Ornament */}
            <div className="absolute -bottom-4 -right-4 w-40 h-40 opacity-100">
              <img
                src="/ornament/services-ornament-1.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </Card>

          {/* Cloud Services Card */}
          <Card
            className="relative overflow-hidden border-0 shadow-none"
            style={{
              background: 'linear-gradient(135deg, #01193F 0%, #093479 100%)',
              padding: '40px'
            }}
          >
            <CardContent className="p-0 relative z-10">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                  <img
                    src="/icon/services-cloud.svg"
                    alt="Cloud Services"
                    className="w-8 h-8"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 text-white">
                Cloud Services
              </h3>
              <p className="text-white text-opacity-90 mb-6 leading-relaxed">
                Solusi cloud computing yang fleksibel, aman, dan hemat biaya untuk mendukung operasional bisnis Anda. Kami menyediakan layanan SaaS, cloud hosting, email hosting, backup, disaster recovery, dan manajemen infrastruktur IT berbasis cloud.
              </p>

              {/* Service Tags */}
              <div className="flex flex-wrap gap-3 mb-6">
                {["SaaS", "Cloud Hosting", "Email Hosting", "Backup & Recovery"].map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full text-brand-navy text-sm bg-white font-medium"
                    style={{padding: '6px 14px'}}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>

            {/* Ornament */}
            <div className="absolute -bottom-4 -right-4 w-40 h-40 opacity-100">
              <img
                src="/vanilla/ornament/services-ornament-2.png"
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}