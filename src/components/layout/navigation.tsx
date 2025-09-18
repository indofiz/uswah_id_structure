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
import { Smartphone, FileText, Settings, GraduationCap, Building2, UserCheck, Wallet, PieChart } from "lucide-react";
import React from "react";

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="/logo_uswah.png"
            alt="PT Uswah Salam AlAzhar"
            className="h-8 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#home" className="text-sm font-medium text-gray-700 hover:text-primary-brand transition-colors">
                Beranda
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-primary-brand transition-colors bg-transparent">
                Produk & Layanan
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <div className="grid gap-1">
                    <h3 className="text-sm font-medium leading-none text-gray-900 mb-2">Solusi Digital</h3>
                    <ListItem href="#mobile" title="Mobile Application" icon={<Smartphone className="h-4 w-4" />}>
                      Native mobile apps untuk iOS dan Android
                    </ListItem>
                    <ListItem href="#erapor" title="e-Rapor System" icon={<FileText className="h-4 w-4" />}>
                      Sistem rapor digital dengan tracking otomatis
                    </ListItem>
                    <ListItem href="#backoffice" title="Backoffice System" icon={<Settings className="h-4 w-4" />}>
                      Platform administratif komprehensif
                    </ListItem>
                    <ListItem href="#lms" title="Learning Management System" icon={<GraduationCap className="h-4 w-4" />}>
                      LMS dengan konten interaktif dan analytics
                    </ListItem>
                  </div>
                  <div className="grid gap-1">
                    <h3 className="text-sm font-medium leading-none text-gray-900 mb-2">Sistem Manajemen</h3>
                    <ListItem href="#ams" title="AMS - Academic Management" icon={<Building2 className="h-4 w-4" />}>
                      Solusi manajemen akademik lengkap
                    </ListItem>
                    <ListItem href="#hris" title="HRIS - Human Resources" icon={<UserCheck className="h-4 w-4" />}>
                      Sistem HR terintegrasi untuk payroll dan attendance
                    </ListItem>
                    <ListItem href="#ziswaf" title="ZISWAF Management" icon={<Wallet className="h-4 w-4" />}>
                      Sistem Zakat, Infaq, Sedekah, dan Wakaf
                    </ListItem>
                    <ListItem href="#bi" title="BI Dashboard" icon={<PieChart className="h-4 w-4" />}>
                      Business Intelligence dengan real-time analytics
                    </ListItem>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#portfolio" className="text-sm font-medium text-gray-700 hover:text-primary-brand transition-colors">
                Portofolio
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#blog" className="text-sm font-medium text-gray-700 hover:text-primary-brand transition-colors">
                Blog
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#career" className="text-sm font-medium text-gray-700 hover:text-primary-brand transition-colors">
                Karir
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex bg-transparent hover:bg-transparent text-gray-700 hover:text-primary-brand">Contact</Button>
          <Button size="sm" className="text-xs sm:text-sm px-3 sm:px-4 text-white" style={{background: 'linear-gradient(135deg, #45ABD5 0%, #01193F 100%)'}}>
            Support
          </Button>
        </div>
      </div>
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