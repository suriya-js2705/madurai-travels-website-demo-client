

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Users, Clock, Phone } from "lucide-react";

const CarTariffs = () => {
  const phoneNumber = "+918123456789"; // Replace with your actual phone number
  
  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const carTariffs = [
    {
      name: "Mini",
      subtitle: "(Day Rent)",
      image: "https://www.carblogindia.com/wp-content/uploads/2017/03/2018-maruti-suzuki-swift-official-image-8-768x443.jpg",
      description: "Perfect for budget-friendly city travel, our Mini cars offer compact comfort and easy navigation through traffic—ideal for solo travelers or couples looking for an affordable ride.",
      rent: "₹1500/-",
      perKm: "(Rs. 10/km)",
      driverBata: "Driver Bata: Rs. 300 (Rs. 11/km)",
      minimumKm: "One Day Minimum 250kms (Rs.13/km)",
      additionalInfo: "Driver Bata: Rs. 300/-",
      isHighlighted: false
    },
    {
      name: "Sedan",
      subtitle: "(Day Rent)",
      image: "https://newsnext.live/wp-content/uploads/2023/02/Honda-City-Facelift-2023-launch-next-month-Features-and-other-details.jpg",
      description: "Experience smooth drives in our Sedan range, known for their elegant design, superior comfort, and spacious interiors—perfect for family outings or business trips with a touch of class.",
      rent: "₹1600/-",
      perKm: "(Rs. 12/km)",
      driverBata: "Driver Bata: Rs. 300 (Rs. 13/km)",
      minimumKm: "One Day Minimum 250kms (Rs.13/km)",
      additionalInfo: "Driver Bata: Rs. 300/-",
      isHighlighted: false
    },
    {
      name: "SUV",
      subtitle: "(Day Rent)",
      image: "https://awtobazar.in/wp-content/uploads/2019/11/Maruti-Suzuki-Ertiga-BS6-400x300.jpg",
      description: "Our SUVs are built for space, and comfort, offering a robust road presence, elevated seating, and dependable handling—ideal for group travel, long journeys, or adventurous hilly terrain rides",
      rent: "₹2200/-",
      perKm: "(Rs. 19/km)",
      driverBata: "Driver Bata: Rs. 300/- (Rs. 12/km)",
      minimumKm: "One Day Minimum 300kms (Rs.18/km)",
      additionalInfo: "Driver Bata: Rs. 300/-",
      isHighlighted: false
    },
    {
      name: "Innova Crysta",
      subtitle: "(Day Rent)",
      image: "https://stat.overdrive.in/wp-content/odgallery/2020/11/58046_2021_Toyota_innova_crysta_3.jpg",
      description: "A favorite among travelers, the Innova Crysta combines luxury with practicality. With plush seating, ample legroom, and top-tier reliability, it’s perfect for premium family or corporate travel.",
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
      image: "https://www.rstravelindia.com/blog/wp-content/uploads/2023/01/Luxury-Van-Rental-Kochi.jpg",
      description: "When you're traveling in a large group, our Tempo Travellers are the best fit. With generous seating, ample luggage space, and comfortable interiors, they ensure everyone enjoys the ride.",
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
                  onClick={handleCallNow}
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

