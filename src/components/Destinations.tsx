
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";

interface DestinationsProps {
  onContactClick: () => void;
}

const Destinations = ({ onContactClick }: DestinationsProps) => {
  const destinations = [
    {
      name: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "From $899",
      rating: 4.9,
      description: "Stunning sunsets and pristine white architecture"
    },
    {
      name: "Bali, Indonesia", 
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "From $699",
      rating: 4.8,
      description: "Tropical paradise with rich culture and beautiful beaches"
    },
    {
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
      price: "From $1299",
      rating: 4.9,
      description: "Modern metropolis blending tradition with innovation"
    },
    {
      name: "Machu Picchu, Peru",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "From $1199", 
      rating: 4.7,
      description: "Ancient Incan citadel high in the Andes Mountains"
    },
    {
      name: "Paris, France",
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "From $999",
      rating: 4.8, 
      description: "City of lights, romance, and world-class cuisine"
    },
    {
      name: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "From $799",
      rating: 4.6,
      description: "Luxury shopping, ultramodern architecture, and desert adventures"
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked destinations that promise unforgettable experiences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                  <span className="text-sm font-semibold">{destination.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-teal-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">{destination.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{destination.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-teal-600">{destination.price}</span>
                  <Button 
                    className="bg-teal-500 hover:bg-teal-600 text-white"
                    onClick={onContactClick}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
