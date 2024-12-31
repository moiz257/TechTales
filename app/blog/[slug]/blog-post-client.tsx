"use client";

import { useState } from "react";
import { CommentForm } from "@/components/blog/comment-form";
import { CommentList } from "@/components/blog/comment-list";
import type { BlogPost } from "@/lib/blog";

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const [comments, setComments] = useState<Array<{
    id: number;
    name: string;
    email: string;
    content: string;
    date: string;
  }>>([]);

  const handleAddComment = ({ name, email, content }: { name: string; email: string; content: string }) => {
    setComments([
      ...comments,
      {
        id: Date.now(),
        name,
        email,
        content,
        date: new Date().toISOString()
      }
    ]);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Comments</h2>
        <CommentForm onSubmit={handleAddComment} />
      </div>
      
      <div>
        <CommentList comments={comments} />
      </div>
    </div>
  );
}