"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Mobile Application",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "e-Rapor System",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Learning Management System",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "HRIS System",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Academic Management",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "BI Dashboard",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Backoffice System",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "ZISWAF Management",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Yazan System",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Assessment Tools",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Communication Platform",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Analytics Suite",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Resource Management",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Student Portal",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop&crop=center",
  },
  {
    title: "Parent Connect",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=center",
  },
];

const CustomHeader = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <div className="text-center">
        <Badge variant="outline" className="mb-6 text-sm" style={{borderColor: '#45ABD5', color: '#01193F'}}>
          Leading Educational Technology Provider
        </Badge>

        <h1 className="text-4xl md:text-7xl font-bold text-gray-900 mb-6">
          <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(135deg, #45ABD5 0%, #01193F 100%)'}}>
            PT Uswah Salam
          </span>
          <br />
          AlAzhar
        </h1>

        <p className="max-w-3xl text-lg md:text-xl mt-8 text-gray-600 mx-auto leading-relaxed">
          Transforming Education Through Innovative Technology Solutions.
          Empowering educational institutions across Indonesia with cutting-edge systems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button className="text-lg px-8 py-6 text-white" style={{background: 'linear-gradient(135deg, #45ABD5 0%, #01193F 100%)'}}>
            Explore Our Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="text-lg px-8 py-6">
            Watch Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default function Hero2() {
  return (
    <div className="bg-white">
      <div style={{ position: 'relative' }}>
        {/* Replace the default header with our custom one */}
        <style>{`
          .hero-parallax-header {
            display: none !important;
          }
        `}</style>
        <div className="absolute top-0 left-0 w-full z-50">
          <CustomHeader />
        </div>
        <HeroParallax products={products} />
      </div>
    </div>
  );
}