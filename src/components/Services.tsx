
import { Card, CardContent } from "@/components/ui/card";
import { Plane, MapPin, Camera, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Flight Bookings",
      description: "Best deals on domestic and international flights with 24/7 support"
    },
    {
      icon: MapPin,
      title: "Custom Itineraries", 
      description: "Personalized travel plans tailored to your preferences and budget"
    },
    {
      icon: Camera,
      title: "Guided Tours",
      description: "Expert local guides to show you hidden gems and cultural experiences"
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive coverage to protect your journey and peace of mind"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for the perfect trip, all in one place
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-500 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
