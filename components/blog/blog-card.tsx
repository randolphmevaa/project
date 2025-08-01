import Link from "next/link";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { BlogPost } from "@/lib/types";
import { formatDate } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { id, title, excerpt, image, date, author, category } = post;

  return (
    <Card className="overflow-hidden group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge
          className="absolute top-4 left-4"
          variant="secondary"
        >
          {category}
        </Badge>
      </div>
      <CardContent className="flex-1 pt-6">
        <h3 className="font-bold text-xl mb-2 line-clamp-2">
          <Link href={`/blog/${id}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
          {excerpt}
        </p>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2" />
            <span>{author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{formatDate(date)}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <Link 
          href={`/blog/${id}`} 
          className="text-primary font-medium hover:underline"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
}