import { getAllBlogPosts } from "@/lib/blog";
import { FeaturedPosts } from "@/components/blog/featured-posts";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CategoryGrid } from "@/components/home/category-grid";
import Image from "next/image";

export default function Home() {
  const posts = getAllBlogPosts();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
            alt="Hero background"
            layout="fill"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Discover the Future of <span className="text-primary">Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl animate-fade-in-delay">
            Your premier destination for cutting-edge insights in technology, programming, and digital innovation.
          </p>
          <Link href="/blog">
            <Button size="lg" className="bg-primary hover:bg-primary/90 animate-fade-in-delay-2">
              Explore Articles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <FeaturedPosts posts={posts} />
      <CategoryGrid />
    </div>
  );
}