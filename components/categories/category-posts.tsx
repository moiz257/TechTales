import Link from "next/link";
import { Card } from "@/components/ui/card";
import { getAllBlogPosts } from "@/lib/blog";

interface CategoryPostsProps {
  category: {
    name: string;
    slug: string;
  };
}

export function CategoryPosts({ category }: CategoryPostsProps) {
  const posts = getAllBlogPosts()
    .filter(post => post.category.toLowerCase() === category.name.toLowerCase())
    .slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-all">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}