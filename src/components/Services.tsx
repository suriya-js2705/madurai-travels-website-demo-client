
import { Card, CardContent } from "@/components/ui/card";
import { Plane, MapPin, Camera, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Plane,
      title: "Domestic Flight Bookings",
      description: "Best deals on flights across India with seamless booking and 24/7 support"
    },
    {
      icon: MapPin,
      title: "Custom India Tours", 
      description: "Personalized itineraries showcasing India's diverse culture, heritage, and landscapes"
    },
    {
      icon: Camera,
      title: "Local Expert Guides",
      description: "Experienced local guides to show you authentic India beyond tourist spots"
    },
    {
      icon: Shield,
      title: "Travel Safety & Support",
      description: "Comprehensive travel insurance and round-the-clock assistance throughout India"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us for Indian Travel
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for exploring India's incredible diversity and rich heritage
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
