"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Smartphone, FileText, Settings, GraduationCap, Building2, UserCheck, Wallet, PieChart, Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled
        ? 'bg-white border-b border-gray-200 shadow-sm'
        : 'bg-brand-navy border-b border-[#1c3660]'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        {/* Left Column - Logo (flex-1) */}
        <div className="flex-1 flex items-center">
          <img
            src="/logo_uswah.png"
            alt="PT Uswah Salam AlAzhar"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Middle Column - Navigation Menu (flex-1) */}
        <NavigationMenu className="flex-1 hidden md:flex justify-center">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/" className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary-brand' : 'text-white hover:text-gray-200'
                }`}>
                  Beranda
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className={`text-sm font-medium transition-colors bg-transparent ${
                isScrolled ? 'text-gray-700 hover:text-primary-brand' : 'text-white hover:text-gray-200'
              }`}>
                Produk & Layanan
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <div className="grid gap-1">
                    <h3 className="text-sm font-medium leading-none text-gray-900 mb-2">Solusi Digital</h3>
                    <ListItem href={isHomePage ? "#mobile" : "/#mobile"} title="Mobile Application" icon={<Smartphone className="h-4 w-4" />}>
                      Native mobile apps untuk iOS dan Android
                    </ListItem>
                    <ListItem href={isHomePage ? "#erapor" : "/#erapor"} title="e-Rapor System" icon={<FileText className="h-4 w-4" />}>
                      Sistem rapor digital dengan tracking otomatis
                    </ListItem>
                    <ListItem href={isHomePage ? "#backoffice" : "/#backoffice"} title="Backoffice System" icon={<Settings className="h-4 w-4" />}>
                      Platform administratif komprehensif
                    </ListItem>
                    <ListItem href={isHomePage ? "#lms" : "/#lms"} title="Learning Management System" icon={<GraduationCap className="h-4 w-4" />}>
                      LMS dengan konten interaktif dan analytics
                    </ListItem>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-sm font-medium leading-none text-gray-900 mb-2">Sistem Manajemen</h3>
                    <ListItem href={isHomePage ? "#ams" : "/#ams"} title="AMS - Academic Management" icon={<Building2 className="h-4 w-4" />}>
                      Solusi manajemen akademik lengkap
                    </ListItem>
                    <ListItem href={isHomePage ? "#hris" : "/#hris"} title="HRIS - Human Resources" icon={<UserCheck className="h-4 w-4" />}>
                      Sistem HR terintegrasi untuk payroll dan attendance
                    </ListItem>
                    <ListItem href={isHomePage ? "#ziswaf" : "/#ziswaf"} title="ZISWAF Management" icon={<Wallet className="h-4 w-4" />}>
                      Sistem Zakat, Infaq, Sedekah, dan Wakaf
                    </ListItem>
                    <ListItem href={isHomePage ? "#bi" : "/#bi"} title="BI Dashboard" icon={<PieChart className="h-4 w-4" />}>
                      Business Intelligence dengan real-time analytics
                    </ListItem>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/portfolio" className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary-brand' : 'text-white hover:text-gray-200'
                }`}>
                  Portfolio
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/tentang" className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary-brand' : 'text-white hover:text-gray-200'
                }`}>
                  Tentang
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/blog" className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary-brand' : 'text-white hover:text-gray-200'
                }`}>
                  Blog
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link to="/karir" className={`text-sm font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-primary-brand' : 'text-white hover:text-gray-200'
                }`}>
                  Karir
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Column - Contact & Support (flex-1) */}
        <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-4">
          <Button variant="ghost" size="sm" asChild className={`hidden sm:inline-flex bg-transparent hover:bg-transparent transition-colors ${
            isScrolled ? 'text-gray-700 hover:text-primary-brand' : 'text-white hover:text-gray-200'
          }`}>
            <Link to="/contact">Contact</Link>
          </Button>
          <Button size="sm" className="hidden sm:flex items-center gap-2 text-xs sm:text-sm px-3 sm:px-4 sm:py-4 rounded-sm text-black bg-yellow-300 hover:bg-yellow-500 transition-colors">
            <img
              src="/icon/support.svg"
              alt="Support"
              className="w-4 h-4"
            />
            Support
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className={`md:hidden ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}>
          <div
            className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-brand-navy shadow-lg transform transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-end p-4 border-b border-[#1c3660]">
              <Button
                variant="ghost"
                size="sm"
                className="text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Mobile Menu Items */}
            <div className="p-4 space-y-4">
              <Link
                to="/"
                className="block py-2 text-base font-medium text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Beranda
              </Link>

              {/* Mobile Products Dropdown */}
              <div className="space-y-2">
                <div className="py-2 text-base font-medium text-white">
                  Produk & Layanan
                </div>
                <div className="pl-4 space-y-3">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-300">Solusi Digital</h4>
                    <div className="pl-2 space-y-2">
                      <a href={isHomePage ? "#mobile" : "/#mobile"} className="block text-sm text-gray-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Mobile Application</a>
                      <a href={isHomePage ? "#erapor" : "/#erapor"} className="block text-sm text-gray-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>e-Rapor System</a>
                      <a href={isHomePage ? "#backoffice" : "/#backoffice"} className="block text-sm text-gray-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Backoffice System</a>
                      <a href={isHomePage ? "#lms" : "/#lms"} className="block text-sm text-gray-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>Learning Management System</a>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-300">Sistem Manajemen</h4>
                    <div className="pl-2 space-y-2">
                      <a href={isHomePage ? "#ams" : "/#ams"} className="block text-sm text-gray-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>AMS - Academic Management</a>
                      <a href={isHomePage ? "#hris" : "/#hris"} className="block text-sm text-gray-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>HRIS - Human Resources</a>
                      <a href={isHomePage ? "#ziswaf" : "/#ziswaf"} className="block text-sm text-gray-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>ZISWAF Management</a>
                      <a href={isHomePage ? "#bi" : "/#bi"} className="block text-sm text-gray-400 hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>BI Dashboard</a>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/portfolio"
                className="block py-2 text-base font-medium text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>

              <Link
                to="/tentang"
                className="block py-2 text-base font-medium text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tentang
              </Link>

              <Link
                to="/blog"
                className="block py-2 text-base font-medium text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>

              <Link
                to="/karir"
                className="block py-2 text-base font-medium text-white hover:text-gray-200 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Karir
              </Link>

              {/* Mobile Support Buttons */}
              <div className="pt-4 border-t border-[#1c3660] space-y-3">
                <Button variant="ghost" size="sm" asChild className="w-full justify-start text-white hover:text-gray-200">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </Button>
                <Button size="sm" className="w-full justify-center items-center gap-2 text-sm px-4 py-3 rounded-sm text-black bg-yellow-300 hover:bg-yellow-500 transition-colors">
                  <img
                    src="/icon/support.svg"
                    alt="Support"
                    className="w-4 h-4"
                  />
                  Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { title: string; icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li className="list-none">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";