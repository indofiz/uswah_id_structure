"use client";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white py-12 sm:py-16 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-[300px] sm:h-[280px]">
        <img
          src="/ornament/hero-top-right.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">

          {/* Column 1: Logo and Company Info */}
          <div className="space-y-6">
            <div>
              <img
                src="/logo_uswah.png"
                alt="Uswah"
                className="h-12 w-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Solusi Digital</h3>
              <h4 className="text-lg font-medium text-gray-300 mb-6">Layanan Pendidikan</h4>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-primary-brand rounded-lg flex items-center justify-center hover:bg-primary-brand/80 transition-colors">
                <img
                  src="/social/facebook.svg"
                  alt="Facebook"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="w-12 h-12 bg-primary-brand rounded-lg flex items-center justify-center hover:bg-primary-brand/80 transition-colors">
                <img
                  src="/social/linkin.svg"
                  alt="LinkedIn"
                  className="w-6 h-6"
                />
              </a>
              <a href="#" className="w-12 h-12 bg-primary-brand rounded-lg flex items-center justify-center hover:bg-primary-brand/80 transition-colors">
                <img
                  src="/social/instagram.svg"
                  alt="Instagram"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          {/* Column 2: Produk & Layanan */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary-brand">PRODUK & LAYANAN</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Salam App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Salam e-Rapor</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Salam Admin</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Learning Management System</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ziswaf System</a></li>
            </ul>
          </div>

          {/* Column 3: Portfolio & About */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary-brand">PORTOFOLIO</h3>
            <ul className="space-y-3 text-gray-300 mb-8">
              <li><a href="#" className="hover:text-white transition-colors">Daftar Sekolah Terdaftar</a></li>
            </ul>

            <h3 className="text-lg font-semibold mb-6 text-primary-brand">TENTANG</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Tentang USA</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Karir USA</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-primary-brand">PRODUK & LAYANAN</h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-sm leading-relaxed">
                SalamThe Darmawangsa Square Unit 268 - Jakarta Selatan. DKI Jakarta.
              </p>
              <p className="text-sm">uswah@salam-alazhar.id</p>
              <p className="text-sm">(021) 72786730 - (021) 72786780</p>
            </div>

            {/* ISO Certifications */}
            <div className="flex space-x-4 mt-8">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <img
                  src="/sertification/iso-27001.png"
                  alt="ISO 27001"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <img
                  src="/sertification/iso-9001.png"
                  alt="ISO 9001"
                  className="w-12 h-12 object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
      </div>
      <div className="bg-brand-navy border-t border-[#092D66] pt-6 sm:pt-8 text-center">
        <p className="text-sm text-gray-300">
          © 2021. All Right Reserved. Uswah Salam AlAzhar
        </p>
      </div>
    </footer>
  );
}