// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import { MapPin, Calendar, Users, Star } from "lucide-react";

// interface TourPackagesProps {
//   onContactClick: () => void;
// }

// const TourPackages = ({ onContactClick }: TourPackagesProps) => {
//   const packages = [
//     {
//       name: "Tamilnadu Tour Package",
//       image: "https://images.unsplash.com/photo-1545157668-6f4a4c5de5c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       destinations: [
//         "Kanyakumari", "Rameswaram", "Madurai", "Kodaikanal", "Ooty", 
//         "Palani", "Pollachi", "Thiruchendur", "Kanchipuram", "Chennai"
//       ],
//       duration: "7-10 Days",
//       price: "From ₹15,999",
//       rating: 4.9
//     },
//     {
//       name: "Karnataka Tour Package",
//       image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80", 
//       destinations: [
//         "Mysore Palace", "Bangalore Tours", "Abbey Falls", "Coorg", 
//         "Wonderla", "Garden", "Sree Virupaksha Temple"
//       ],
//       duration: "4-6 Days",
//       price: "From ₹10,999",
//       rating: 4.8
//     },
//     {
//       name: "Honeymoon Tour Package",
//       image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       destinations: [
//         "Ooty", "Kodaikanal", "Munnar", "Coonoor", "Coimbatore", 
//         "Chennai", "Kanchipuram", "Mahabalipuram", "Pondicherry", "Trichy"
//       ],
//       duration: "5-8 Days",
//       price: "From ₹18,999",
//       rating: 4.9
//     },
//     {
//       name: "Corporate Tour Package",
//       image: "https://images.unsplash.com/photo-1605538883669-825200433431?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       destinations: [
//         "Chennai", "Aurovile", "Hogenakkal", "Mahabalipuram", 
//         "Kanyakumari", "Kanchiuram", "Srirangam", "Yercaud", "Munnar", "Ooty"
//       ],
//       duration: "3-5 Days",
//       price: "From ₹12,999",
//       rating: 4.7
//     },
//     {
//       name: "Temple Tour Package",
//       image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       destinations: [
//         "Murugan Temples", "Navagraha", "Kanchipuram", "Rameswaram", 
//         "Thanjavur", "Kumbakonam", "Velankanni", "Tiruvannamalai"
//       ],
//       duration: "4-7 Days",
//       price: "From ₹8,999",
//       rating: 4.8
//     },
//     {
//       name: "Hills Station Tour Package",
//       image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       destinations: [
//         "Ooty", "Kodaikanal", "Yelagiri", "Yercaud", "Trekking", 
//         "Munnar", "Kolli Hills", "Kotagiri", "Javadi Hills", "Coonoor", "Kolukkumalai"
//       ],
//       duration: "5-8 Days",
//       price: "From ₹14,999",
//       rating: 4.9
//     },
//     {
//       name: "Family Tour Package",
//       image: "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       destinations: [
//         "Madurai", "Chidambaram", "Mahabalipuram", "Rameshwaram", 
//         "Thanjavur", "Velankanni", "Kanchipuram", "Kanyakumari", "Trichy"
//       ],
//       duration: "6-9 Days",
//       price: "From ₹16,999",
//       rating: 4.8
//     },
//     {
//       name: "Wildlife Tour Package",
//       image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       destinations: [
//         "Mudumalai", "Valparai", "Anamalai Tiger Reserve", "Masinagudi", 
//         "Satyamangalam", "Mundanthurai Tiger Reserve", "Megamalai", "Kalakkad"
//       ],
//       duration: "4-6 Days",
//       price: "From ₹13,999",
//       rating: 4.7
//     },
//     {
//       name: "Student Tour Package",
//       image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//       destinations: [
//         "Munnar", "Kerala", "Ooty", "Kodaikanal", "Agra", "Cochin"
//       ],
//       duration: "4-7 Days",
//       price: "From ₹9,999",
//       rating: 4.6
//     }
//   ];

//   const customPackage = {
//     name: "Custom Package Available",
//     image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
//     description: "Plan your perfect trip with us! Customize destinations, duration, and activities according to your preferences.",
//     duration: "Flexible",
//     price: "Custom Quote",
//     rating: 5.0,
//     isCustom: true
//   };

//   return (
//     <section className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Tour <span className="text-red-600">Packages</span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//             Discover incredible destinations across South India with our curated tour packages
//           </p>
//         </div>
        
//         <div className="relative max-w-6xl mx-auto">
//           <Carousel className="w-full" opts={{ align: "start", loop: true }}>
//             <CarouselContent className="-ml-2 md:-ml-4">
//               {packages.map((pkg, index) => (
//                 <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
//                   <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full">
//                     <div className="relative overflow-hidden">
//                       <img 
//                         src={pkg.image} 
//                         alt={pkg.name}
//                         className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
//                       />
//                       <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center">
//                         <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
//                         <span className="text-sm font-semibold">{pkg.rating}</span>
//                       </div>
//                     </div>
//                     <CardContent className="p-6 flex flex-col h-full">
//                       <div className="text-center mb-4">
//                         <h3 className="text-xl font-bold text-red-600 mb-2">{pkg.name}</h3>
//                       </div>
                      
//                       <div className="flex-1 mb-4">
//                         <div className="text-blue-600 text-sm leading-relaxed">
//                           {pkg.destinations.join(", ")}
//                         </div>
//                       </div>
                      
//                       <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//                         <div className="flex items-center">
//                           <Calendar className="h-4 w-4 mr-1" />
//                           <span>{pkg.duration}</span>
//                         </div>
//                         <div className="flex items-center">
//                           <Users className="h-4 w-4 mr-1" />
//                           <span>2-8 People</span>
//                         </div>
//                       </div>
                      
//                       <div className="flex items-center justify-between mt-auto">
//                         <span className="text-xl font-bold text-orange-600">{pkg.price}</span>
//                         <Button 
//                           className="bg-orange-500 hover:bg-orange-600 text-white"
//                           onClick={onContactClick}
//                         >
//                           Book Now
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </CarouselItem>
//               ))}
              
//               {/* Custom Package Card - Enhanced & Special */}
//               <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
//                 <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full border-4 border-gradient-to-r from-orange-400 to-red-400 bg-gradient-to-br from-orange-50 via-white to-red-50 relative transform hover:scale-105">
//                   {/* Special Badge */}
//                   <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
//                     <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full shadow-lg">
//                       <span className="text-sm font-bold tracking-wide">✨ CUSTOMIZE YOUR JOURNEY ✨</span>
//                     </div>
//                   </div>
                  
//                   {/* Animated Border */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-lg opacity-75 blur-sm animate-pulse"></div>
//                   <div className="relative bg-white rounded-lg m-1">
//                     <div className="relative overflow-hidden rounded-t-lg">
//                       <img 
//                         src={customPackage.image} 
//                         alt={customPackage.name}
//                         className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//                       <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full px-4 py-2 flex items-center shadow-lg">
//                         <Star className="h-5 w-5 text-white fill-current mr-1" />
//                         <span className="text-sm font-bold">{customPackage.rating}</span>
//                       </div>
//                       <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
//                         <span className="text-sm font-bold text-orange-600 flex items-center">
//                           <MapPin className="h-4 w-4 mr-1" />
//                           PERSONALIZED PLANNING
//                         </span>
//                       </div>
//                     </div>
                    
//                     <CardContent className="p-8 flex flex-col h-full bg-gradient-to-b from-white to-orange-50/30">
//                       <div className="text-center mb-6">
//                         <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
//                           {customPackage.name}
//                         </h3>
//                         <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
//                       </div>
                      
//                       <div className="flex-1 mb-6">
//                         <div className="text-gray-700 text-base leading-relaxed text-center p-4 bg-white/60 rounded-lg border border-orange-100">
//                           {customPackage.description}
//                           <div className="mt-3 text-sm text-orange-600 font-semibold">
//                             • Choose Your Destinations • Set Your Budget • Pick Your Dates
//                           </div>
//                         </div>
//                       </div>
                      
//                       <div className="flex items-center justify-center gap-8 text-sm text-gray-600 mb-6 bg-white/80 rounded-lg py-3">
//                         <div className="flex items-center">
//                           <Calendar className="h-5 w-5 mr-2 text-orange-500" />
//                           <span className="font-semibold">{customPackage.duration}</span>
//                         </div>
//                         <div className="flex items-center">
//                           <Users className="h-5 w-5 mr-2 text-orange-500" />
//                           <span className="font-semibold">Any Group Size</span>
//                         </div>
//                       </div>
                      
//                       <div className="flex flex-col items-center gap-4 mt-auto">
//                         <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
//                           {customPackage.price}
//                         </span>
//                         <Button 
//                           className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 hover:from-orange-600 hover:via-red-600 hover:to-orange-600 text-white border-0 py-4 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
//                           onClick={onContactClick}
//                         >
//                           🎯 Plan My Perfect Trip
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </div>
//                 </Card>
//               </CarouselItem>
//             </CarouselContent>
//             <CarouselPrevious className="left-4" />
//             <CarouselNext className="right-4" />
//           </Carousel>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TourPackages;


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users, Star } from "lucide-react";

interface TourPackagesProps {
  onContactClick: () => void;
}

const TourPackages = ({ onContactClick }: TourPackagesProps) => {
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
      name: "Tamilnadu Tour Package",
      image: "https://blog.redbus.in/wp-content/uploads/2022/02/shutterstock_158974373.jpg",
      destinations: [
        "Kanyakumari", "Rameswaram", "Madurai", "Kodaikanal", "Ooty", 
        "Palani", "Pollachi", "Thiruchendur", "Kanchipuram", "Chennai"
      ],
      duration: "7-10 Days",
      price: "From ₹15,999",
      rating: 4.9
    },
    {
      name: "Karnataka Tour Package",
      image: "https://photographylife.com/wp-content/uploads/2015/07/DP2M0153c-1536x1024.jpg", 
      destinations: [
        "Mysore Palace", "Bangalore Tours", "Abbey Falls", "Coorg", 
        "Wonderla", "Garden", "Sree Virupaksha Temple"
      ],
      duration: "4-6 Days",
      price: "From ₹10,999",
      rating: 4.8
    },
    {
      name: "Honeymoon Tour Package",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      destinations: [
        "Ooty", "Kodaikanal", "Munnar", "Coonoor", "Coimbatore", 
        "Chennai", "Kanchipuram", "Mahabalipuram", "Pondicherry", "Trichy"
      ],
      duration: "5-8 Days",
      price: "From ₹18,999",
      rating: 4.9
    },
    {
      name: "Corporate Tour Package",
      image: "https://www.nationaldaycalendar.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cg_faces:center%2Cq_auto:eco%2Cw_768/MjAzNTMxOTc2MzcwNTYyMzk2/website-feature---celebration-of-life-day--january-22.png",
      destinations: [
        "Chennai", "Aurovile", "Hogenakkal", "Mahabalipuram", 
        "Kanyakumari", "Kanchiuram", "Srirangam", "Yercaud", "Munnar", "Ooty"
      ],
      duration: "3-5 Days",
      price: "From ₹12,999",
      rating: 4.7
    },
    {
      name: "Temple Tour Package",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      destinations: [
        "Murugan Temples", "Navagraha", "Kanchipuram", "Rameswaram", 
        "Thanjavur", "Kumbakonam", "Velankanni", "Tiruvannamalai"
      ],
      duration: "4-7 Days",
      price: "From ₹8,999",
      rating: 4.8
    },
    {
      name: "Hills Station Tour Package",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      destinations: [
        "Ooty", "Kodaikanal", "Yelagiri", "Yercaud", "Trekking", 
        "Munnar", "Kolli Hills", "Kotagiri", "Javadi Hills", "Coonoor", "Kolukkumalai"
      ],
      duration: "5-8 Days",
      price: "From ₹14,999",
      rating: 4.9
    },
  ];

  const customPackage = {
    name: "Custom Package Available",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    description: "Plan your perfect trip with us! Customize destinations, duration, and activities according to your preferences.",
    duration: "Flexible",
    price: "Custom Quote",
    rating: 5.0,
  };

  return (
    <section id="tourpackages" className="py-20 bg-gray-50">
      {/* The rest of your component code remains the same */}
    
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
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
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-red-600 mb-2">{pkg.name}</h3>
                </div>
                
                <div className="flex-grow mb-4">
                  <p className="text-blue-600 text-sm leading-relaxed">
                    {pkg.destinations.join(", ")}
                  </p>
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
          ))}
          
          {/* Custom Package Card - Spanning full width on large screens */}
          <div className="md:col-span-2 lg:col-span-3">
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full border-4 border-gradient-to-r from-orange-400 to-red-400 bg-gradient-to-br from-orange-50 via-white to-red-50 relative transform hover:scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full shadow-lg">
                  <span className="text-sm font-bold tracking-wide">✨ CUSTOMIZE YOUR JOURNEY ✨</span>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 rounded-lg opacity-75 blur-sm animate-pulse"></div>
              <div className="relative bg-white rounded-lg m-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={customPackage.image} 
                    alt={customPackage.name}
                    className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full px-4 py-2 flex items-center shadow-lg">
                    <Star className="h-5 w-5 text-white fill-current mr-1" />
                    <span className="text-sm font-bold">{customPackage.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg">
                    <span className="text-sm font-bold text-orange-600 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      PERSONALIZED PLANNING
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-8 flex flex-col h-full bg-gradient-to-b from-white to-orange-50/30">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
                      {customPackage.name}
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="flex-1 mb-6">
                    <div className="text-gray-700 text-base leading-relaxed text-center p-4 bg-white/60 rounded-lg border border-orange-100">
                      {customPackage.description}
                      <div className="mt-3 text-sm text-orange-600 font-semibold">
                        • Choose Your Destinations • Set Your Budget • Pick Your Dates
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-8 text-sm text-gray-600 mb-6 bg-white/80 rounded-lg py-3">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                      <span className="font-semibold">{customPackage.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-orange-500" />
                      <span className="font-semibold">Any Group Size</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center gap-4 mt-auto">
                    <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      {customPackage.price}
                    </span>
                    <Button 
                      className="w-full bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 hover:from-orange-600 hover:via-red-600 hover:to-orange-600 text-white border-0 py-4 text-lg font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                      onClick={onContactClick}
                    >
                      🎯 Plan My Perfect Trip
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </div>
      </section>
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
      
    </section>
  );
};

export default TourPackages;