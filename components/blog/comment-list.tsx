import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { formatDistanceToNow } from "date-fns";

interface Comment {
  id: number;
  name: string;
  email: string;
  content: string;
  date: string;
}

interface CommentListProps {
  comments: Comment[];
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
}

export function CommentList({ comments }: CommentListProps) {
  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <Card key={comment.id} className="p-6">
          <div className="flex items-start gap-4">
            <Avatar className="w-12 h-12 bg-primary text-white flex items-center justify-center">
              <span className="text-lg font-semibold">{getInitials(comment.name)}</span>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-semibold">{comment.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {formatDistanceToNow(new Date(comment.date), { addSuffix: true })}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}