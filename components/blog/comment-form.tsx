"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

interface CommentFormProps {
  onSubmit: (comment: { name: string; email: string; content: string }) => void;
}

export function CommentForm({ onSubmit }: CommentFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    content: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.content.trim()) return;
    
    onSubmit(formData);
    setFormData({ name: "", email: "", content: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          placeholder="Your name"
          required
        />
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          placeholder="Your email"
          required
        />
      </div>
      <Textarea
        value={formData.content}
        onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
        placeholder="Write your comment..."
        className="h-32"
        required
      />
      <Button type="submit" className="w-full md:w-auto">
        <Send className="w-4 h-4 mr-2" />
        Post Comment
      </Button>
    </form>
  );
}