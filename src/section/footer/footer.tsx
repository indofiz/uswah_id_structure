"use client";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(135deg, #45ABD5 0%, #01193F 100%)'}}>
                <span className="text-white font-bold text-lg sm:text-xl">UA</span>
              </div>
              <div>
                <span className="font-bold text-lg sm:text-xl">PT Uswah Salam AlAzhar</span>
                <p className="text-xs sm:text-sm text-gray-400">Educational Technology Solutions</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-400 mb-6 max-w-md leading-relaxed">
              Empowering educational institutions across Indonesia with innovative technology solutions that drive growth and enhance learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">info@uswahsalam.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="text-sm hover:text-white transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">e-Rapor System</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">LMS Platform</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">HRIS Solution</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="text-sm hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-sm hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            © 2024 PT Uswah Salam AlAzhar. All rights reserved. Built with excellence and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}