import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
}

const ProductCard = ({ name, price, image, rating, reviewCount }: ProductCardProps) => {
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <Card className="group hover:shadow-lg transition-smooth border-border hover:border-primary/20 overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
          {name}
        </h3>
        
        <div className="flex items-center space-x-1 mb-3">
          {renderStars()}
          <span className="text-sm text-muted-foreground ml-2">
            ({reviewCount} reviews)
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-foreground">
            ${price}
          </span>
          
          <Button
            className="bg-gradient-primary hover:shadow-glow transition-smooth group/btn"
            size="sm"
          >
            <ShoppingCart className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-smooth" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;