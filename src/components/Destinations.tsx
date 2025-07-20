
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Star, Clock, Users } from "lucide-react";

interface DestinationsProps {
  onContactClick: () => void;
}

const Destinations = ({ onContactClick }: DestinationsProps) => {
  const phoneNumber = "+918123456789"; // Replace with your actual phone number
  const whatsappNumber = "+918123456789"; // Replace with your actual WhatsApp number
  
  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi, I need a taxi for instant pickup in Madurai");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };
  const packages = [
    {
      name: "Meenakshi Temple Tour",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "From ₹599",
      duration: "3 Hours",
      rating: 4.9,
      group: "2-8 People",
      description: "Visit the magnificent Meenakshi Amman Temple with expert local guide"
    },
    {
      name: "Thirumalai Nayakkar Palace", 
      image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "From ₹799",
      duration: "2 Hours",
      rating: 4.8,
      group: "2-6 People",
      description: "Explore the grand Indo-Saracenic architectural marvel and its history"
    },
    {
      name: "Gandhi Memorial Museum",
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "From ₹499",
      duration: "1.5 Hours", 
      rating: 4.7,
      group: "2-8 People",
      description: "Learn about India's freedom struggle and Mahatma Gandhi's legacy"
    },
    {
      name: "Full City Tour Package",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "From ₹1,999",
      duration: "8 Hours",
      rating: 4.9,
      group: "2-6 People",
      description: "Complete Madurai sightseeing including temples, palace, markets & lunch"
    },
    {
      name: "Car Rental - Half Day",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "From ₹1,299",
      duration: "4 Hours",
      rating: 4.8,
      group: "Self Drive",
      description: "AC car rental with driver for flexible local exploration"
    },
    {
      name: "Airport Transfer + City Tour",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "From ₹2,499",
      duration: "6 Hours", 
      rating: 4.9,
      group: "2-6 People",
      description: "Airport pickup with guided city tour before your onward journey"
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Madurai Tour Packages & Rentals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Perfect for travelers arriving at Madurai Railway Station or Airport - explore the temple city with ease
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
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
              <CardContent className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-orange-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{pkg.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{pkg.group}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-orange-600">{pkg.price}</span>
                  <Button 
                    className="bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={onContactClick}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-orange-50 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Just Arrived in Madurai?</h3>
            <p className="text-gray-600 mb-6">
              Our representatives are available at Madurai Junction Railway Station and Madurai Airport 
              for instant bookings and immediate service. No advance reservation needed!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={handleCallNow}
              >
                Call for Instant Pickup
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50"
                onClick={handleWhatsApp}
              >
                WhatsApp Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
