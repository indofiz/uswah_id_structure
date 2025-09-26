"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export default function BlogSection() {
  const blogPosts = [
    {
      title: "Masa Depan Pembelajaran Digital di Indonesia",
      description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
      date: "15 Maret 2024",
      category: "Teknologi Pendidikan",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Fitur Dashboard Analytics Canggih Telah Dirilis",
      description: "Temukan alat analitik baru yang powerful untuk membantu pendidik membuat keputusan berbasis data dengan hasil yang lebih baik.",
      date: "10 Maret 2024",
      category: "Update Produk",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Studi Kasus: Peningkatan 300% Engagement Siswa",
      description: "Bagaimana SMA Jakarta memanfaatkan solusi LMS kami untuk mencapai peningkatan luar biasa dalam partisipasi siswa.",
      date: "5 Maret 2024",
      category: "Studi Kasus",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&crop=center"
    }
  ];

  return (
    <section id="blog" className="py-12 sm:py-16 md:py-20" style={{backgroundColor: '#F5F5F5'}}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-4 sm:mb-6 text-xs sm:text-sm px-5 py-2 border border-primary-brand rounded-full w-fit text-primary-brand bg-white mx-auto">
            Update Terbaru
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4 text-brand-navy">
            Berita dan Artikel Terbaru
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4" style={{color: '#505050'}}>
            Tetap terkini dengan tren terbaru dalam teknologi pendidikan dan perkembangan perusahaan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden border-gray-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3 sm:pb-4">
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500 mb-2 mt-4">
                  <Badge variant="secondary" className="text-xs">
                    {post.category}
                  </Badge>
                  <span>•</span>
                  <span className="text-xs sm:text-sm">{post.date}</span>
                </div>
                <CardTitle className="text-lg sm:text-xl text-gray-900 transition-colors leading-tight hover:text-primary-brand">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <CardDescription className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                  {post.description}
                </CardDescription>
                <Button variant="ghost" size="sm" className="p-0 text-sm" style={{color: '#45ABD5'}}>
                  Baca Selengkapnya
                  <ChevronRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" className="w-full sm:w-auto" style={{borderColor: '#45ABD5', color: '#01193F'}}>
            Lihat Semua Artikel
            <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}