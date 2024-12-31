import { Card } from "@/components/ui/card";

interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
}

interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category) => (
        <Card key={category.slug} className="group overflow-hidden">
          <div className="relative h-48">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0" />
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{category.name}</h3>
              <p className="text-sm text-gray-200">{category.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}