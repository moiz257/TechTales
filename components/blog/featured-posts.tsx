import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog";

interface FeaturedPostsProps {
  posts: BlogPost[];
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  const featuredPosts = posts.slice(0, 6); // Show 6 posts

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <div className="inline-block px-4 py-1 mb-3 text-sm bg-primary text-white rounded-full">
                      {post.category}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-200">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}