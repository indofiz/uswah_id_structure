"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GridBackground } from "@/components/ui/grid-background";
import { ArrowRight, Building2, Users, CheckCircle, Shield } from "lucide-react";

export default function Hero3() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <GridBackground
        gridSize="8:8"
        colors={{
          background: 'bg-gradient-to-br from-blue-900/90 via-slate-900/95 to-blue-950/90',
          borderColor: 'border-blue-400/20',
          borderSize: '1px',
          borderStyle: 'solid',
        }}
        beams={{
          count: 12,
          colors: ['bg-blue-400', 'bg-cyan-400', 'bg-indigo-400', 'bg-sky-400', 'bg-teal-400'],
          speed: 6,
          shadow: 'shadow-lg shadow-current/60',
        }}
      >
        {/* Navigation */}
        <nav className="absolute top-0 z-20 w-full border-b border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg" style={{background: 'linear-gradient(135deg, #45ABD5 0%, #01193F 100%)'}}>
                <span className="text-white font-bold text-sm flex items-center justify-center h-full">UA</span>
              </div>
              <span className="font-bold text-lg text-white hidden sm:block">PT Uswah Salam AlAzhar</span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Home</a>
              <a href="#products" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Products</a>
              <a href="#portfolio" className="text-sm font-medium text-white/80 hover:text-white transition-colors">Portfolio</a>
              <a href="#blog" className="text-sm font-medium text-white/80 hover:text-white transition-colors">News</a>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">Contact</Button>
              <Button size="sm" className="text-white bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center max-w-6xl mx-auto space-y-8 h-full px-8 text-center">
          <Badge variant="outline" className="mb-4 text-sm border-blue-400/50 text-blue-200 bg-blue-500/10">
            Leading Educational Technology Provider
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
              PT Uswah Salam
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              AlAzhar
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Transforming Education Through Innovative Technology Solutions
          </p>

          <p className="text-lg text-blue-200/80 max-w-3xl mx-auto leading-relaxed">
            Empowering educational institutions across Indonesia with cutting-edge technology solutions that streamline operations, enhance learning experiences, and drive institutional growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/50 px-8 py-4 text-lg"
            >
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-400/50 text-blue-200 hover:bg-blue-500/10 hover:text-white px-8 py-4 text-lg"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 w-full max-w-4xl">
            {[
              { label: "Schools Served", value: "500+", icon: Building2 },
              { label: "Active Users", value: "50K+", icon: Users },
              { label: "System Uptime", value: "99.9%", icon: CheckCircle },
              { label: "Support", value: "24/7", icon: Shield }
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-blue-400" />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-200 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </GridBackground>
    </div>
  );
}