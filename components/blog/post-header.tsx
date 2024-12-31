import Image from "next/image";

interface PostHeaderProps {
  title: string;
  author: string;
  date: string;
  image: string;
}

export function PostHeader({ title, author, date, image }: PostHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <div className="text-muted-foreground mb-8">
        Published on {date} by {author}
      </div>
      <Image 
        src={image} 
        alt={title}
        width={800}
        height={400}
        className="w-full h-[400px] object-cover rounded-lg"
      />
    </div>
  );
}