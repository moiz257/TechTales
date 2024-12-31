import Link from "next/link";
import { Card } from "@/components/ui/card";
import { getAllBlogPosts } from "@/lib/blog";
import Image from "next/image";

export default function BlogList() {
  const posts = getAllBlogPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}