

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Users, Clock, Phone } from "lucide-react";

const CarTariffs = () => {
  const carTariffs = [
    {
      name: "Mini",
      subtitle: "(Day Rent)",
      image: "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "We give our best cabs on rent to customers at an affordable price.",
      rent: "₹1500/-",
      perKm: "(Rs. 10/km)",
      driverBata: "",
      minimumKm: "",
      isHighlighted: false
    },
    {
      name: "Sedan",
      subtitle: "(Day Rent)",
      image: "https://images.unsplash.com/photo-1549399265-f8d6e96da83c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "We give our best cabs on rent to customers at an affordable price.",
      rent: "₹1600/-",
      perKm: "",
      driverBata: "Driver Bata: Rs. 300 (Rs. 11/km)",
      minimumKm: "One Day Minimum 250kms (Rs.13/km)",
      additionalInfo: "Driver Bata: Rs. 300/-",
      isHighlighted: false
    },
    {
      name: "SUV",
      subtitle: "(Day Rent)",
      image: "https://images.unsplash.com/photo-1594736797933-d0401ba6fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "We give our best cabs on rent to customers at an affordable price.",
      rent: "₹2200/-",
      perKm: "",
      driverBata: "Driver Bata: Rs. 300/- (Rs. 12/km)",
      minimumKm: "One Day Minimum 300kms (Rs.18/km)",
      additionalInfo: "Driver Bata: Rs. 300/-",
      isHighlighted: false
    },
    {
      name: "Innova Crysta",
      subtitle: "(Day Rent)",
      image: "https://images.unsplash.com/photo-1604780252198-86c6495fc473?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "We give our best cabs on rent to customers at an affordable price.",
      rent: "₹2200/-",
      perKm: "",
      driverBata: "Driver Bata: Rs. 300/- (Rs. 12/km)",
      minimumKm: "One Day Minimum 300kms (Rs.18/km)",
      additionalInfo: "Driver Bata: Rs. 300/-",
      isHighlighted: true
    },
    {
      name: "Tempo Traveller",
      subtitle: "(Day Rent)",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      description: "We give our best cabs on rent to customers at an affordable price.",
      rent: "₹2700/-",
      perKm: "(Rs. 17/km)",
      driverBata: "Driver Bata: Rs. 400/-",
      minimumKm: "One Day Minimum 350kms (Rs.25/km)",
      additionalInfo: "Driver Bata: Rs. 400/-",
      isHighlighted: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Car <span className="text-red-600">Tariffs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible car rental options for your Madurai travel needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {carTariffs.map((car, index) => (
            <Card 
              key={index} 
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
                car.isHighlighted ? 'ring-2 ring-orange-500 shadow-lg' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {car.isHighlighted && (
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Popular
                  </div>
                )}
              </div>
              <CardContent className="p-4">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{car.name} <span className="text-base font-normal">{car.subtitle}</span></h3>
                  <div className="w-8 h-0.5 bg-orange-500 mx-auto mb-3"></div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{car.description}</p>
                
                <div className="space-y-2 text-sm text-gray-700 mb-4">
                  <div className="font-bold text-lg">
                    Rent: {car.rent} {car.perKm && <span className="text-sm font-normal">{car.perKm}</span>}
                  </div>
                  {car.driverBata && (
                    <div>{car.driverBata}</div>
                  )}
                  {car.minimumKm && (
                    <div>{car.minimumKm}</div>
                  )}
                  {car.additionalInfo && (
                    <div>{car.additionalInfo}</div>
                  )}
                </div>
                
                <Button 
                  className={`w-full ${
                    car.isHighlighted 
                      ? 'bg-orange-500 hover:bg-orange-600' 
                      : 'bg-blue-600 hover:bg-blue-700'
                  } text-white font-semibold py-2`}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarTariffs;

