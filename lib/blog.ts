export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js",
    author: "Sarah Johnson",
    date: "April 1, 2024",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
    excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
    content: "Next.js has emerged as one of the most popular frameworks for building React applications...",
    category: "Web Development",
    tags: ["Next.js", "React", "JavaScript"]
  },
  {
    slug: "mastering-typescript",
    title: "Mastering TypeScript in 2024",
    author: "Michael Chen",
    date: "April 2, 2024",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80",
    excerpt: "Discover the latest TypeScript features and best practices for building type-safe applications.",
    content: "TypeScript continues to evolve with each release...",
    category: "Programming",
    tags: ["TypeScript", "JavaScript", "Programming"]
  },
  {
    slug: "modern-css-techniques",
    title: "Modern CSS Techniques You Should Know",
    author: "Emma Wilson",
    date: "April 3, 2024",
    image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?auto=format&fit=crop&q=80",
    excerpt: "Explore advanced CSS techniques and modern layout patterns.",
    content: "CSS has come a long way from its humble beginnings...",
    category: "Web Development",
    tags: ["CSS", "Web Design", "Frontend"]
  },
  {
    slug: "ai-ml-basics",
    title: "Introduction to AI and Machine Learning",
    author: "David Kim",
    date: "April 4, 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    excerpt: "Get started with artificial intelligence and machine learning concepts.",
    content: "AI and ML are transforming how we build applications...",
    category: "Technology",
    tags: ["AI", "Machine Learning", "Technology"]
  },
  {
    slug: "cloud-computing-guide",
    title: "Complete Guide to Cloud Computing",
    author: "Lisa Chen",
    date: "April 5, 2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
    excerpt: "Everything you need to know about cloud computing platforms.",
    content: "Cloud computing has revolutionized how we deploy applications...",
    category: "Technology",
    tags: ["Cloud", "AWS", "Azure"]
  },
  {
    slug: "web-security-best-practices",
    title: "Web Security Best Practices",
    author: "Alex Rodriguez",
    date: "April 6, 2024",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80",
    excerpt: "Learn essential security practices for modern web applications.",
    content: "Security is crucial for any web application...",
    category: "Security",
    tags: ["Security", "Web Development", "Best Practices"]
  }
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  const formattedCategory = category
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/-/g, ' & ');
  return blogPosts.filter(post => post.category === formattedCategory);
}