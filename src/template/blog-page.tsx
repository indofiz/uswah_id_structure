"use client";
import BlogHero from "@/section/blog/blog-hero";
import BlogListing from "@/section/blog/blog-listing";
import Footer from "@/section/footer/footer";
import Navigation from "@/components/layout/navigation";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Blog Hero Section */}
      <BlogHero />

      {/* Blog Listing with Search and Filters */}
      <BlogListing />

      {/* Footer */}
      <Footer />
    </div>
  );
}
