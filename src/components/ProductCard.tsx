import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Star, ShoppingCart, Heart, Eye } from "lucide-react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviewCount: number;
}

const ProductCard = ({ name, price, image, rating, reviewCount }: ProductCardProps) => {
  const { toast } = useToast();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 transition-smooth ${
          index < rating
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart!",
      description: `${name} has been added to your cart.`,
    });
  };

  const handleToggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast({
      title: isWishlisted ? "Removed from Wishlist" : "Added to Wishlist",
      description: `${name} ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    });
  };

  return (
    <Card 
      className="group hover:shadow-lg transition-smooth border-border hover:border-primary/20 overflow-hidden hover-lift animate-fade-in"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-smooth"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
        
        {/* Action buttons overlay */}
        <div className={`absolute top-4 right-4 flex flex-col space-y-2 transition-smooth ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
          <Button
            size="sm"
            variant="secondary"
            className="w-10 h-10 p-0 rounded-full bg-white/90 hover:bg-white shadow-md"
            onClick={handleToggleWishlist}
          >
            <Heart className={`w-4 h-4 transition-smooth ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-600'}`} />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="w-10 h-10 p-0 rounded-full bg-white/90 hover:bg-white shadow-md"
          >
            <Eye className="w-4 h-4 text-gray-600" />
          </Button>
        </div>

        {/* Sale badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md animate-pulse">
            SALE
          </div>
        </div>
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
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground line-through">
              ${Math.round(price * 1.2)}
            </span>
            <span className="text-2xl font-bold text-foreground">
              ${price}
            </span>
          </div>
          
          <Button
            onClick={handleAddToCart}
            className="bg-gradient-primary hover:shadow-glow transition-smooth group/btn pulse-glow"
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