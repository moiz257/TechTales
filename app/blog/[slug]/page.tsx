import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import { PostContent } from "@/components/blog/post-content";
import { PostHeader } from "@/components/blog/post-header";
import { RecentPosts } from "@/components/blog/recent-posts";
import BlogPostClient from "./blog-post-client";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  const allPosts = getAllBlogPosts();
  
  if (!post) return <div>Post not found</div>;
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <article className="bg-white rounded-lg shadow-sm">
            <PostHeader
              title={post.title}
              author={post.author}
              date={post.date}
              image={post.image}
            />
            <div className="p-8">
              <PostContent post={post} />
            </div>
          </article>
          
          <div className="mt-12">
            <BlogPostClient post={post} />
          </div>
        </div>
        
        <aside className="space-y-8">
          <RecentPosts posts={allPosts} currentPostSlug={post.slug} />
        </aside>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}