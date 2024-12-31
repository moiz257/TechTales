import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog";

interface RecentPostsProps {
  posts: BlogPost[];
  currentPostSlug: string;
}

export function RecentPosts({ posts, currentPostSlug }: RecentPostsProps) {
  const recentPosts = posts
    .filter(post => post.slug !== currentPostSlug)
    .slice(0, 5);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
      {recentPosts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <Card className="p-4 hover:shadow-md transition-all">
            <div className="flex gap-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold line-clamp-2 mb-1 hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}