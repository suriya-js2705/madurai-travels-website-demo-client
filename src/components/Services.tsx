
import { Card, CardContent } from "@/components/ui/card";
import { Train, Car, MapPin, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Train,
      title: "Railway Station Pickup",
      description: "Seamless pick-up at Madurai Junction with comfortable, AC vehicles for an easy start to your local tour."
    },
    {
      icon: Car,
      title: "Car Rental Services", 
      description: "Flexible, city-wide cab rentals—book by the hour and kilometer. Pay for the ride, plus driver waiting time, as you explore Madurai's top attractions at your own pace."
    },
    {
      icon: MapPin,
      title: "Local Tour Packages",
      description: "Explore Madurai’s iconic temples, palaces, and cultural gems with our expertly curated sightseeing packages, designed for every traveler."
    },
    {
      icon: Clock,
      title: "24/7 Travel Support",
      description: "We’re here whenever you need us! Round-the-clock assistance for smooth arrivals and departures from the station or airport, ensuring a hassle-free experience."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Madurai Local Travels
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted partner for exploring Madurai's rich heritage and culture from the moment you arrive
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
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
