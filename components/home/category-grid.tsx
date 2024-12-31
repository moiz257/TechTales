
import { Card } from "@/components/ui/card";
import {
  Code,
  Terminal,
  Cpu,
  Laptop,
  Server,
  Database,
  Globe,
  Shield,
  Cloud,
  Smartphone,
  Bot,
  Layers
} from "lucide-react";

const categories = [
  {
    name: "Web Development",
    slug: "web-development",
    description: "Modern web development techniques and frameworks",
    icon: <Globe className="h-8 w-8" />,
    color: "bg-blue-500",
  },
  {
    name: "AI & Machine Learning",
    slug: "ai-ml",
    description: "Artificial Intelligence and ML innovations",
    icon: <Bot className="h-8 w-8" />,
    color: "bg-purple-500",
  },
  {
    name: "Cloud Computing",
    slug: "cloud-computing",
    description: "Cloud platforms and serverless architecture",
    icon: <Cloud className="h-8 w-8" />,
    color: "bg-sky-500",
  },
  {
    name: "Mobile Development",
    slug: "mobile-development",
    description: "iOS, Android, and cross-platform development",
    icon: <Smartphone className="h-8 w-8" />,
    color: "bg-green-500",
  },
  {
    name: "DevOps",
    slug: "devops",
    description: "Development operations and automation",
    icon: <Layers className="h-8 w-8" />,
    color: "bg-orange-500",
  },
  {
    name: "Cybersecurity",
    slug: "cybersecurity",
    description: "Security best practices and threat protection",
    icon: <Shield className="h-8 w-8" />,
    color: "bg-red-500",
  },
];

export function CategoryGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Explore Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
              <Card className="group p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg ${category.color} text-white`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
              </Card>      
          ))}
        </div>
      </div>
    </section>
  );
}