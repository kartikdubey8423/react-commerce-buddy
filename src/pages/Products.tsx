import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Chatbot from "@/components/Chatbot";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Grid, List } from "lucide-react";

// Import product images
import headphonesImg from "@/assets/headphones.jpg";
import smartphoneImg from "@/assets/smartphone.jpg";
import smartwatchImg from "@/assets/smartwatch.jpg";
import gamingMouseImg from "@/assets/gaming-mouse.jpg";
import keyboardImg from "@/assets/keyboard.jpg";
import webcamImg from "@/assets/webcam.jpg";
import laptopImg from "@/assets/laptop.jpg";
import tabletImg from "@/assets/tablet.jpg";
import speakerImg from "@/assets/speaker.jpg";
import chargerImg from "@/assets/charger.jpg";
import vrHeadsetImg from "@/assets/vr-headset.jpg";
import smartHomeImg from "@/assets/smart-home.jpg";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  featured?: boolean;
}

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const allProducts: Product[] = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299,
      image: headphonesImg,
      rating: 5,
      reviewCount: 248,
      category: "Audio",
      featured: true,
    },
    {
      id: 2,
      name: "Latest Smartphone Pro",
      price: 899,
      image: smartphoneImg,
      rating: 4,
      reviewCount: 156,
      category: "Mobile",
      featured: true,
    },
    {
      id: 3,
      name: "Smart Fitness Watch",
      price: 399,
      image: smartwatchImg,
      rating: 4,
      reviewCount: 89,
      category: "Wearables",
      featured: true,
    },
    {
      id: 4,
      name: "Gaming Mouse RGB",
      price: 79,
      image: gamingMouseImg,
      rating: 5,
      reviewCount: 203,
      category: "Gaming",
      featured: true,
    },
    {
      id: 5,
      name: "Wireless Mechanical Keyboard",
      price: 149,
      image: keyboardImg,
      rating: 4,
      reviewCount: 127,
      category: "Gaming",
      featured: true,
    },
    {
      id: 6,
      name: "4K HD Webcam",
      price: 199,
      image: webcamImg,
      rating: 4,
      reviewCount: 74,
      category: "Accessories",
      featured: true,
    },
    {
      id: 7,
      name: "Premium Ultrabook Laptop",
      price: 1299,
      image: laptopImg,
      rating: 5,
      reviewCount: 312,
      category: "Computers",
    },
    {
      id: 8,
      name: "Professional Tablet Pro",
      price: 649,
      image: tabletImg,
      rating: 4,
      reviewCount: 98,
      category: "Mobile",
    },
    {
      id: 9,
      name: "Premium Bluetooth Speaker",
      price: 159,
      image: speakerImg,
      rating: 4,
      reviewCount: 186,
      category: "Audio",
    },
    {
      id: 10,
      name: "Wireless Charging Station",
      price: 49,
      image: chargerImg,
      rating: 4,
      reviewCount: 142,
      category: "Accessories",
    },
    {
      id: 11,
      name: "VR Gaming Headset",
      price: 399,
      image: vrHeadsetImg,
      rating: 5,
      reviewCount: 267,
      category: "Gaming",
    },
    {
      id: 12,
      name: "Smart Home Assistant",
      price: 99,
      image: smartHomeImg,
      rating: 4,
      reviewCount: 178,
      category: "Smart Home",
    },
  ];

  const categories = [
    "all",
    "Audio",
    "Mobile",
    "Wearables", 
    "Gaming",
    "Accessories",
    "Computers",
    "Smart Home",
  ];

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "reviews":
          return b.reviewCount - a.reviewCount;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our complete collection of premium technology and electronics
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-40">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort Filter */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="reviews">Most Reviews</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex border border-border rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="rounded-none"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="rounded-none"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Active Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedCategory !== "all" && (
              <Badge variant="secondary" className="flex items-center gap-1">
                {selectedCategory}
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="ml-1 hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
            {searchTerm && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Search: "{searchTerm}"
                <button
                  onClick={() => setSearchTerm("")}
                  className="ml-1 hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing {filteredAndSortedProducts.length} of {allProducts.length} products
            </p>
          </div>

          {/* Products Grid */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className={`grid gap-6 ${
              viewMode === "grid" 
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" 
                : "grid-cols-1"
            }`}>
              {filteredAndSortedProducts.map((product) => (
                <div key={product.id} className="relative">
                  {product.featured && (
                    <Badge 
                      className="absolute top-2 left-2 z-10 bg-gradient-primary"
                    >
                      Featured
                    </Badge>
                  )}
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No products found
              </h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search or filter criteria
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Chatbot */}
      <Chatbot />

      <Footer />
    </div>
  );
};

export default Products;