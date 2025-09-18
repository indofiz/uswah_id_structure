// Navigation component following Single Responsibility Principle (SRP)
"use client";
import { Button } from "@/components/ui/button";
import type { NavigationProps } from "@/types";

export default function Navbar({
  items,
  logoSrc,
  logoAlt,
  companyName,
  companyShortName
}: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-2">
          <img
            src={logoSrc}
            alt={logoAlt}
            className="h-8 w-8 rounded-lg object-contain"
          />
          <span className="font-bold text-lg sm:text-xl hidden sm:block">{companyName}</span>
          <span className="font-bold text-sm sm:hidden">{companyShortName}</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Contact
          </Button>
          <Button
            size="sm"
            className="text-xs sm:text-sm px-3 sm:px-4 text-white"
            style={{background: 'linear-gradient(135deg, #45ABD5 0%, #01193F 100%)'}}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
}