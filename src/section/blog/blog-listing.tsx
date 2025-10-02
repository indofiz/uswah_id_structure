"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "Teknologi Pendidikan",
  "Sistem Al-Azhar",
  "Idzul Fikri",
  "Pancasila",
  "LMS",
  "PMII",
];

const blogPosts = [
  {
    id: 1,
    title: "Masa Depan Pembelajaran Digital di Indonesia",
    description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
    date: "15 Maret 2025",
    category: "Teknologi Pendidikan",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 2,
    title: "Masa Depan Pembelajaran Digital di Indonesia",
    description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
    date: "15 Maret 2025",
    category: "Teknologi Pendidikan",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 3,
    title: "Masa Depan Pembelajaran Digital di Indonesia",
    description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
    date: "15 Maret 2025",
    category: "Teknologi Pendidikan",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 4,
    title: "Masa Depan Pembelajaran Digital di Indonesia",
    description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
    date: "15 Maret 2025",
    category: "Teknologi Pendidikan",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 5,
    title: "Masa Depan Pembelajaran Digital di Indonesia",
    description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
    date: "15 Maret 2025",
    category: "Teknologi Pendidikan",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 6,
    title: "Masa Depan Pembelajaran Digital di Indonesia",
    description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
    date: "15 Maret 2025",
    category: "Teknologi Pendidikan",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 7,
    title: "Masa Depan Pembelajaran Digital di Indonesia",
    description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
    date: "15 Maret 2025",
    category: "Teknologi Pendidikan",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 8,
    title: "Masa Depan Pembelajaran Digital di Indonesia",
    description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
    date: "15 Maret 2025",
    category: "Teknologi Pendidikan",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 9,
    title: "Masa Depan Pembelajaran Digital di Indonesia",
    description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
    date: "15 Maret 2025",
    category: "Teknologi Pendidikan",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 10,
    title: "Masa Depan Pembelajaran Digital di Indonesia",
    description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
    date: "15 Maret 2025",
    category: "Teknologi Pendidikan",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 11,
    title: "Masa Depan Pembelajaran Digital di Indonesia",
    description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
    date: "15 Maret 2025",
    category: "Teknologi Pendidikan",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&crop=center"
  },
  {
    id: 12,
    title: "Masa Depan Pembelajaran Digital di Indonesia",
    description: "Mengeksplorasi bagaimana teknologi pendidikan canggih mentransformasi lanskap pembelajaran di seluruh institusi Indonesia.",
    date: "15 Maret 2025",
    category: "Teknologi Pendidikan",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=center"
  }
];

export default function BlogListing() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const totalPages = Math.ceil(blogPosts.length / rowsPerPage);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search and Filter Section */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12 border border-gray-300">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Input
              type="text"
              placeholder="Masukkan keyword judul berita ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-4 pr-12 py-6 text-base border-gray-300 rounded-lg bg-white"
            />
            <Button
              size="lg"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#45ABD5] hover:bg-[#3a96bd] text-white"
            >
              <Search className="h-5 w-5 mr-2" />
              Cari
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="rounded-full border-gray-300 hover:bg-[#45ABD5] hover:text-white hover:border-[#45ABD5] transition-colors"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {blogPosts.slice(0, rowsPerPage).map((post) => (
            <Card key={post.id} className="overflow-hidden border-gray-200 hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2 mt-4">
                  <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                    {post.category}
                  </Badge>
                  <span>•</span>
                  <span className="text-xs">{post.date}</span>
                </div>
                <CardTitle className="text-base text-gray-900 leading-tight line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {post.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-6 pt-6">
          {/* Rows per page selector */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Rows per page</span>
            <Select
              value={rowsPerPage.toString()}
              onValueChange={(value) => setRowsPerPage(Number(value))}
            >
              <SelectTrigger className="w-[70px] h-8">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Page Navigation */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="h-8 px-3"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>

            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage(1)}
                className="h-8 w-8 p-0"
              >
                1
              </Button>

              {currentPage > 3 && <span className="text-gray-400 px-1">...</span>}

              {currentPage > 2 && currentPage < totalPages - 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage(currentPage)}
                  className="h-8 w-8 p-0 bg-[#01193F] text-white hover:bg-[#012247] hover:text-white"
                >
                  {currentPage}
                </Button>
              )}

              {currentPage === 2 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage(2)}
                  className="h-8 w-8 p-0 bg-[#01193F] text-white hover:bg-[#012247] hover:text-white"
                >
                  2
                </Button>
              )}

              {currentPage < totalPages - 2 && <span className="text-gray-400 px-1">...</span>}

              {totalPages > 2 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage(3)}
                  className="h-8 w-8 p-0"
                >
                  3
                </Button>
              )}

              {totalPages > 3 && <span className="text-gray-400 px-1">...</span>}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="h-8 px-3"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
