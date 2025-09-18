"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Home,
  Building2,
  Calendar,
  ArrowRight,
  Globe,
  Star,
  Shield,
  CheckCircle,
  ChevronRight
} from "lucide-react";

export default function Template1() {
  const navItems = [
    { name: "Home", link: "#home", icon: <Home className="h-4 w-4" /> },
    { name: "Products", link: "#services", icon: <Building2 className="h-4 w-4" /> },
    { name: "Portfolio", link: "#portfolio", icon: <Users className="h-4 w-4" /> },
    { name: "Blog", link: "#blog", icon: <Calendar className="h-4 w-4" /> },
  ];

  const products = [
    {
      title: "Mobile Application",
      link: "#mobile",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "e-Rapor System",
      link: "#rapor",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "Learning Management System",
      link: "#lms",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "Backoffice System",
      link: "#backoffice",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "HRIS Platform",
      link: "#hris",
      thumbnail: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "Academic Management",
      link: "#ams",
      thumbnail: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "ZISWAF Management",
      link: "#ziswaf",
      thumbnail: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "BI Dashboard",
      link: "#bi",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center"
    },
    {
      title: "Yazan System",
      link: "#yazan",
      thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop&crop=center"
    },
  ];

  const services = [
    {
      title: "Mobile Application",
      description: "Native mobile apps for iOS and Android with seamless user experience and offline capabilities. Built with cutting-edge technology for optimal performance.",
      link: "#mobile"
    },
    {
      title: "e-Rapor System",
      description: "Digital report card system with automated grading, progress tracking, and parent communication. Streamline your assessment process with our comprehensive solution.",
      link: "#rapor"
    },
    {
      title: "Backoffice System",
      description: "Comprehensive administrative platform for managing operations, finances, and institutional workflows with enterprise-grade security and reliability.",
      link: "#backoffice"
    },
    {
      title: "Learning Management System",
      description: "Advanced LMS with interactive content delivery, assessment tools, and learning analytics. Transform your educational delivery with modern technology.",
      link: "#lms"
    },
    {
      title: "Yazan System",
      description: "Digital writing and documentation platform with collaborative editing and version control. Perfect for modern content creation workflows.",
      link: "#yazan"
    },
    {
      title: "AMS - Academic Management",
      description: "Complete academic management solution covering curriculum, scheduling, and student lifecycle management with powerful analytics.",
      link: "#ams"
    },
    {
      title: "HRIS - Human Resources",
      description: "Integrated HR management system for payroll, attendance, performance, and employee development with automated workflows.",
      link: "#hris"
    },
    {
      title: "ZISWAF Management",
      description: "Comprehensive system for managing Zakat, Infaq, Sedekah, and Wakaf with transparency, accountability, and detailed reporting.",
      link: "#ziswaf"
    },
    {
      title: "BI Dashboard",
      description: "Business Intelligence dashboard with real-time analytics, reporting, and data visualization tools for informed decision making.",
      link: "#bi"
    }
  ];

  const blogPosts = [
    {
      title: "The Future of Digital Learning in Indonesia",
      description: "Exploring how advanced educational technologies are transforming the learning landscape across Indonesian institutions. Discover the latest trends and innovations.",
      link: "#blog1"
    },
    {
      title: "Advanced Analytics Dashboard Features Released",
      description: "Discover the powerful new analytics tools that help educators make data-driven decisions for better outcomes. Enhanced reporting and visualization capabilities.",
      link: "#blog2"
    },
    {
      title: "Case Study: 300% Increase in Student Engagement",
      description: "How SMA Jakarta leveraged our LMS solution to achieve remarkable improvements in student participation and learning outcomes through technology integration.",
      link: "#blog3"
    }
  ];


  return (
    <div className="w-full">
      <FloatingNav navItems={navItems} />

      {/* Hero Section */}
      <div id="home" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-20">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-sm font-medium text-white">🚀 Leading Educational Technology Provider</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 max-w-6xl leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              PT Uswah Salam
            </span>
            <br />
            <span className="text-white">AlAzhar</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl leading-relaxed">
            Transforming Education Through Innovative Technology Solutions
          </p>

          {/* Description */}
          <p className="text-lg text-white/60 mb-12 max-w-3xl leading-relaxed">
            Empowering educational institutions across Indonesia with cutting-edge technology solutions that streamline operations, enhance learning experiences, and drive institutional growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 border-0"
            >
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-sm"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-w-4xl">
            {[
              { label: "Schools Served", value: "500+", icon: Building2 },
              { label: "Active Users", value: "50K+", icon: Users },
              { label: "System Uptime", value: "99.9%", icon: CheckCircle },
              { label: "Support", value: "24/7", icon: Shield }
            ].map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
              <div className="w-1 h-3 bg-white/70 rounded-full mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Parallax Hero */}
      <HeroParallax products={products} />

      {/* Company Introduction with Background Beams */}
      <div className="relative bg-neutral-950 py-20">
        <BackgroundBeams />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-6 border-white/20 text-white">
                About Our Mission
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionizing Education Through Technology
              </h2>
              <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                We specialize in developing cutting-edge educational technology solutions that streamline operations, enhance learning experiences, and drive institutional growth. Our comprehensive suite of systems is designed to meet the evolving needs of modern educational institutions across Indonesia.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: CheckCircle, label: "Industry Leading", color: "text-green-400" },
                  { icon: Shield, label: "Secure & Reliable", color: "text-blue-400" },
                  { icon: Globe, label: "Nationwide Support", color: "text-purple-400" },
                  { icon: Star, label: "Award Winning", color: "text-yellow-400" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                    <span className="text-neutral-300">{item.label}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Learn More About Us
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Building2, value: "500+", label: "Educational Institutions", color: "from-blue-500 to-cyan-500" },
                  { icon: Users, value: "50K+", label: "Daily Active Users", color: "from-green-500 to-emerald-500" },
                  { icon: Star, value: "4.9/5", label: "Customer Rating", color: "from-yellow-500 to-orange-500" },
                  { icon: CheckCircle, value: "99.9%", label: "System Uptime", color: "from-purple-500 to-pink-500" }
                ].map((stat, index) => (
                  <div key={index} className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl opacity-20`}></div>
                    <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                      <stat.icon className="h-12 w-12 mx-auto mb-4 text-white" />
                      <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                      <div className="text-sm text-neutral-400">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section with Hover Effects */}
      <div id="services" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-white/20 text-white">
              Our Solutions
            </Badge>
            <TextGenerateEffect
              words="Comprehensive Educational Technology Suite"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            />
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Discover our range of innovative solutions designed to transform your educational institution
            </p>
          </div>

          <HoverEffect items={services} className="mb-20" />
        </div>
      </div>

      {/* Client Portfolio Section */}
      <div id="portfolio" className="relative py-20 bg-neutral-950">
        <BackgroundBeams />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-white/20 text-white">
              Our Partners
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by Leading Educational Institutions
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Join hundreds of schools and universities that have transformed their operations with our solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
            {["SDN", "SMP", "SMA", "SMK", "UNI", "PT"].map((type, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">{type}</span>
                  </div>
                  <p className="text-sm text-neutral-400 font-medium">
                    {type === "UNI" ? "Universities" : type === "PT" ? "Private Schools" : `${type} Schools`}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl p-8 border border-white/10">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { value: "500+", label: "Educational Institutions", color: "text-blue-400" },
                { value: "50K+", label: "Active Students", color: "text-green-400" },
                { value: "99.9%", label: "System Reliability", color: "text-purple-400" },
                { value: "24/7", label: "Technical Support", color: "text-orange-400" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-neutral-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div id="blog" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 border-white/20 text-white">
              Latest Updates
            </Badge>
            <TextGenerateEffect
              words="News & Insights"
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            />
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              Stay updated with the latest trends in educational technology and our company developments
            </p>
          </div>

          <HoverEffect items={blogPosts} className="mb-12" />

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              View All Articles
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative bg-neutral-950 py-16">
        <BackgroundBeams />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">UA</span>
                </div>
                <div>
                  <span className="font-bold text-xl text-white">PT Uswah Salam AlAzhar</span>
                  <p className="text-sm text-neutral-400">Educational Technology Solutions</p>
                </div>
              </div>
              <p className="text-neutral-400 mb-6 max-w-md">
                Empowering educational institutions across Indonesia with innovative technology solutions that drive growth and enhance learning experiences.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white">
                  Contact
                </Button>
                <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white">
                  Support
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Products</h3>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">e-Rapor System</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LMS Platform</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HRIS Solution</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-neutral-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-neutral-400">
              © 2024 PT Uswah Salam AlAzhar. All rights reserved. Built with excellence and innovation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}