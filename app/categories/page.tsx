import { Card } from "@/components/ui/card";
import { CategoryList } from "@/components/categories/category-list";
import { CategoryPosts } from "@/components/categories/category-posts";

const mainCategories = [
  {
    name: "Web Development",
    slug: "web-development",
    description: "Frontend and backend development techniques",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80",
  },
  {
    name: "AI & Machine Learning",
    slug: "ai-ml",
    description: "Artificial Intelligence and ML innovations",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
  },
  {
    name: "Cloud Computing",
    slug: "cloud-computing",
    description: "Cloud platforms and serverless solutions",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
  },
  {
    name: "Mobile Development",
    slug: "mobile-development",
    description: "iOS, Android, and cross-platform development",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
  },
  {
    name: "DevOps",
    slug: "devops",
    description: "Development operations and automation",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80",
  },
  {
    name: "Cybersecurity",
    slug: "cybersecurity",
    description: "Security best practices and threat protection",
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80",
  }
];

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Explore Categories</h1>
      <CategoryList categories={mainCategories} />
      <div className="mt-20">
        {mainCategories.map((category) => (
          <CategoryPosts key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}