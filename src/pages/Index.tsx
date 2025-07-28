import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Star, Truck, Shield, Headphones } from "lucide-react";

// Import product images
import headphonesImg from "@/assets/headphones.jpg";
import smartphoneImg from "@/assets/smartphone.jpg";
import smartwatchImg from "@/assets/smartwatch.jpg";
import gamingMouseImg from "@/assets/gaming-mouse.jpg";
import keyboardImg from "@/assets/keyboard.jpg";
import webcamImg from "@/assets/webcam.jpg";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299,
      image: headphonesImg,
      rating: 5,
      reviewCount: 248,
    },
    {
      id: 2,
      name: "Latest Smartphone Pro",
      price: 899,
      image: smartphoneImg,
      rating: 4,
      reviewCount: 156,
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      price: 399,
      image: smartwatchImg,
      rating: 4,
      reviewCount: 89,
    },
    {
      id: 4,
      name: "Gaming Mouse RGB",
      price: 79,
      image: gamingMouseImg,
      rating: 5,
      reviewCount: 203,
    },
    {
      id: 5,
      name: "Wireless Mechanical Keyboard",
      price: 149,
      image: keyboardImg,
      rating: 4,
      reviewCount: 127,
    },
    {
      id: 6,
      name: "4K HD Webcam",
      price: 199,
      image: webcamImg,
      rating: 4,
      reviewCount: 74,
    },
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free shipping on orders over $100",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "Your payment information is safe",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Get help whenever you need it",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Discover Amazing
            <span className="block text-white/90">Tech Products</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto">
            Shop the latest technology and electronics with competitive prices and exceptional quality.
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 hover:shadow-lg text-lg px-8 py-4"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Shop Now
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-smooth">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked selection of the latest and greatest tech products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-smooth"
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Chatbot */}
      <Chatbot />

      <Footer />
    </div>
  );
};

export default Index;
