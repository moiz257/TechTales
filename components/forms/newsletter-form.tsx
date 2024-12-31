"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendEmail } from "@/lib/email";
import toast from "react-hot-toast";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      await sendEmail({
        email,
        subject: "New Newsletter Subscription",
        message: `New newsletter subscription from: ${email}`
      });
      toast.success("Successfully subscribed to newsletter!");
      setEmail("");
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
      <Input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary"
        required
      />
      <Button 
        type="submit" 
        variant="secondary" 
        size="lg"
        disabled={loading}
      >
        {loading ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  );
}