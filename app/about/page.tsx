import { Card } from "@/components/ui/card";
import { Code, Users, Lightbulb, Target, Rocket, Heart, Star } from "lucide-react";
import { NewsletterForm } from "@/components/forms/newsletter-form";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About TechTales</h1>
          <p className="text-xl">
            Your premier destination for staying up-to-date with the latest
            developments in technology, programming, and web development.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 text-lg">
                Our mission is to provide high-quality, accessible content that helps
                developers and technology enthusiasts stay informed and improve their
                skills. We believe in the power of knowledge sharing and community
                building.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="p-6 text-center hover:shadow-lg transition-all">
                  {feature.icon}
                  <h3 className="font-semibold mt-4">{feature.title}</h3>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="p-6 text-center hover:shadow-xl transition-all">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-20 bg-gradient-to-r from-primary/90 to-blue-600/90 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8 opacity-90">
            Be part of our growing community of developers and tech enthusiasts.
            Share your experiences, connect with fellow developers, and stay updated
            with the latest tech trends.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm text-white border-0">
                {benefit.icon}
                <h3 className="text-lg font-semibold my-3">{benefit.title}</h3>
                <p className="opacity-90">{benefit.description}</p>
              </Card>
            ))}
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mt-12">
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="mb-6 opacity-90">
              Get weekly updates on the latest tech trends and tutorials.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}

const features = [
  {
    title: "Quality Content",
    icon: <Code className="h-8 w-8 text-primary mx-auto" />,
  },
  {
    title: "Community",
    icon: <Users className="h-8 w-8 text-primary mx-auto" />,
  },
  {
    title: "Innovation",
    icon: <Lightbulb className="h-8 w-8 text-primary mx-auto" />,
  },
  {
    title: "Growth",
    icon: <Target className="h-8 w-8 text-primary mx-auto" />,
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Editor in Chief",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    bio: "10+ years of experience in tech journalism and web development.",
  },
  {
    name: "Michael Chen",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    bio: "Full-stack developer with a passion for teaching and open source.",
  },
  {
    name: "Emma Wilson",
    role: "Content Strategist",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    bio: "Specializes in creating engaging technical content and tutorials.",
  },
];

const benefits = [
  {
    title: "Learn & Grow",
    description: "Access exclusive tutorials and resources to enhance your skills",
    icon: <Rocket className="h-8 w-8 mx-auto mb-2" />,
  },
  {
    title: "Connect",
    description: "Network with fellow developers and industry experts",
    icon: <Heart className="h-8 w-8 mx-auto mb-2" />,
  },
  {
    title: "Stay Updated",
    description: "Get the latest updates on tech trends and best practices",
    icon: <Star className="h-8 w-8 mx-auto mb-2" />,
  },
];