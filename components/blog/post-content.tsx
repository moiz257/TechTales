"use client";

import { useState } from "react";
import type { BlogPost } from "@/lib/blog";
import { motion} from "framer-motion";

interface PostContentProps {
  post: BlogPost;
}

export function PostContent({ post }: PostContentProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      <motion.div 
        className="prose prose-lg max-w-none"
        animate={{ height: isExpanded ? "auto" : "300px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </motion.div>

     
    </div>
  );
}