
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star } from "lucide-react";

interface DestinationsProps {
  onContactClick: () => void;
}

const Destinations = ({ onContactClick }: DestinationsProps) => {
  const destinations = [
    {
      name: "Goa",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "From ₹8,999",
      rating: 4.8,
      description: "Golden beaches, vibrant nightlife, and Portuguese heritage"
    },
    {
      name: "Kerala Backwaters", 
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "From ₹12,999",
      rating: 4.9,
      description: "Serene houseboats, lush greenery, and tranquil waterways"
    },
    {
      name: "Rajasthan Heritage",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
      price: "From ₹15,999",
      rating: 4.7,
      description: "Majestic palaces, desert safaris, and royal experiences"
    },
    {
      name: "Himachal Pradesh",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "From ₹11,999", 
      rating: 4.8,
      description: "Snow-capped mountains, hill stations, and adventure sports"
    },
    {
      name: "Tamil Nadu Temples",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "From ₹9,999",
      rating: 4.6, 
      description: "Ancient temples, rich culture, and South Indian heritage"
    },
    {
      name: "Kashmir Valley",
      image: "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "From ₹18,999",
      rating: 4.9,
      description: "Paradise on earth with stunning lakes and valleys"
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Discover Incredible India
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the diverse beauty of India - from beaches to mountains, heritage to adventure
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
