
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MapPin, Calendar, Users, Star } from "lucide-react";

interface TourPackagesProps {
  onContactClick: () => void;
}

const TourPackages = ({ onContactClick }: TourPackagesProps) => {
  const packages = [
    {
      name: "Tamilnadu Tour Package",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      destinations: [
        "Kanyakumari", "Rameswaram", "Madurai", "Kodaikanal", "Ooty", 
        "Palani", "Pollachi", "Thiruchendur", "Kanchipuram", "Chennai"
      ],
      duration: "7-10 Days",
      price: "From ₹15,999",
      rating: 4.9
    },
    {
      name: "Kerala Tour Package", 
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      destinations: [
        "Munnar", "Kovalam", "Kumarakom", "Trivandrum", "Kochi", 
        "Alleppey", "Thekkady", "Poovar", "Vagamon", "Palakkad", "Kozhikode"
      ],
      duration: "5-8 Days",
      price: "From ₹12,999",
      rating: 4.8
    },
    {
      name: "Karnataka Tour Package",
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
      destinations: [
        "Mysore Palace", "Bangalore Tours", "Abbey Falls", "Coorg", 
        "Wonderla", "Garden", "Sree Virupaksha Temple"
      ],
      duration: "4-6 Days",
      price: "From ₹10,999",
      rating: 4.7
    },
    {
      name: "Madurai Local Tour",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      destinations: [
        "Meenakshi Temple", "Thirumalai Nayakkar Palace", "Gandhi Memorial Museum", 
        "Alagar Temple", "Pazhamudhir Solai", "Vandiyur Mariamman Temple"
      ],
      duration: "1-2 Days",
      price: "From ₹1,999",
      rating: 4.9
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tour <span className="text-red-600">Packages</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover incredible destinations across South India with our curated tour packages
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {packages.map((pkg, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="relative overflow-hidden">
                      <img 
                        src={pkg.image} 
                        alt={pkg.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                        <span className="text-sm font-semibold">{pkg.rating}</span>
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-red-600 mb-2">{pkg.name}</h3>
                      </div>
                      
                      <div className="flex-1 mb-4">
                        <div className="text-blue-600 text-sm leading-relaxed">
                          {pkg.destinations.join(", ")}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{pkg.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          <span>2-8 People</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xl font-bold text-orange-600">{pkg.price}</span>
                        <Button 
                          className="bg-orange-500 hover:bg-orange-600 text-white"
                          onClick={onContactClick}
                        >
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
