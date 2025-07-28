import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Globe, Award, ArrowRight, Heart, Zap, Shield } from "lucide-react";

const About = () => {
  const stats = [
    { number: "10K+", label: "Happy Customers", icon: Users },
    { number: "500+", label: "Products", icon: Globe },
    { number: "98%", label: "Satisfaction Rate", icon: Star },
    { number: "24/7", label: "Support", icon: Award },
  ];

  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description: "Everything we do is centered around delivering exceptional customer experiences.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We constantly seek out the latest and greatest technology to bring to our customers.",
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Your data and transactions are protected with industry-leading security measures.",
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Visionary leader with 15+ years in tech retail",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Tech expert ensuring cutting-edge solutions",
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Customer Success",
      description: "Dedicated to exceptional customer experiences",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 transition-smooth animate-fade-in">
            About TechStore
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Redefining Tech Shopping
            <span className="block text-white/90">Experience</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto animate-fade-in">
            We're passionate about bringing you the latest technology with unmatched quality, service, and innovation.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group animate-fade-in hover-scale">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Founded in 2020, TechStore began with a simple mission: to make cutting-edge technology accessible to everyone. What started as a small online store has grown into a trusted destination for tech enthusiasts worldwide.
                </p>
                <p>
                  We believe that technology should enhance lives, not complicate them. That's why we carefully curate our product selection, ensuring that every item meets our high standards for quality, innovation, and value.
                </p>
                <p>
                  Today, we serve customers across the globe, partnering with leading brands to bring you the latest in smartphones, computers, gaming gear, and smart home technology.
                </p>
              </div>
              <Button className="mt-6 bg-gradient-primary hover:shadow-glow transition-smooth group">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="aspect-video bg-gradient-secondary rounded-lg overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gradient-primary opacity-20 flex items-center justify-center">
                  <div className="text-6xl text-white/50">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-smooth border-border hover:border-primary/20 animate-fade-in">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind TechStore
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="group hover:shadow-lg transition-smooth border-border hover:border-primary/20 animate-fade-in hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                    <div className="text-3xl text-white">👤</div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-smooth">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;