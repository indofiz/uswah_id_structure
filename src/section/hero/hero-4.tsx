"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ArrowRight, Building2, Users, CheckCircle, Shield, Play } from "lucide-react";

export default function Hero4() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg" style={{background: 'linear-gradient(135deg, #45ABD5 0%, #01193F 100%)'}}>
              <span className="text-white font-bold text-sm flex items-center justify-center h-full">UA</span>
            </div>
            <span className="font-bold text-lg sm:text-xl hidden sm:block">PT Uswah Salam AlAzhar</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#products" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Products</a>
            <a href="#portfolio" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
            <a href="#blog" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">News</a>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">Contact</Button>
            <Button size="sm" className="text-white" style={{background: 'linear-gradient(135deg, #45ABD5 0%, #01193F 100%)'}}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Highlight Effect */}
      <HeroHighlight containerClassName="h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="mb-6 text-sm" style={{borderColor: '#45ABD5', color: '#01193F'}}>
            Leading Educational Technology Provider
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <Highlight className="text-black dark:text-white">
              PT Uswah Salam
            </Highlight>
            <br />
            <span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(135deg, #45ABD5 0%, #01193F 100%)'}}>
              AlAzhar
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-4xl mx-auto">
            Transforming Education Through{" "}
            <Highlight className="text-black dark:text-white">
              Innovative Technology
            </Highlight>{" "}
            Solutions
          </p>

          <p className="text-lg text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed">
            Empowering educational institutions across Indonesia with cutting-edge technology solutions that streamline operations, enhance learning experiences, and drive institutional growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="text-lg px-8 py-6 text-white" style={{background: 'linear-gradient(135deg, #45ABD5 0%, #01193F 100%)'}}>
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="text-lg px-8 py-6 group">
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Interactive Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Schools Served", value: "500+", icon: Building2, color: '#45ABD5' },
              { label: "Active Users", value: "50K+", icon: Users, color: '#01193F' },
              { label: "System Uptime", value: "99.9%", icon: CheckCircle, color: '#45ABD5' },
              { label: "Support", value: "24/7", icon: Shield, color: '#01193F' }
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
              >
                <CardContent className="pt-6 pb-6">
                  <div className="relative">
                    <stat.icon
                      className="h-8 w-8 mx-auto mb-3 transition-all duration-300 group-hover:scale-110"
                      style={{color: stat.color}}
                    />
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1 group-hover:scale-105 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-1/3 right-10 w-32 h-32 bg-purple-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-cyan-400/10 rounded-full blur-xl animate-pulse delay-500"></div>
        </div>
      </HeroHighlight>
    </div>
  );
}