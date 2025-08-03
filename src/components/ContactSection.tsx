import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // New
import { MapPin, Phone, Mail, Clock, Star, Users, Car } from "lucide-react"; // New Icons
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    persons: "",      // New
    service: "",
    carType: "",      // New
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Booking Request Sent!",
      description: "Thank you for your inquiry. We'll contact you within the next few hours to confirm.",
    });
    // Reset all form fields
    setFormData({ name: "", email: "", phone: "", persons: "", service: "", carType: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Dedicated handler for the Select component
  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      carType: value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Explore Madurai?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Fill out the form for instant quotes and bookings. For immediate assistance, call us directly.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Enhanced Contact Information Panel */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 rounded-lg p-6 space-y-6">
              <h3 className="text-2xl font-semibold text-orange-400 border-b border-orange-400/20 pb-3 mb-6">Get In Touch</h3>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-orange-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Call for Instant Booking</h4>
                  <p className="text-gray-300 transition-colors hover:text-white">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-orange-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Email for Enquiries</h4>
                  <p className="text-gray-300 transition-colors hover:text-white">bookings@maduraitravels.com</p>
                </div>
              </div>
               <div className="flex items-start">
                <MapPin className="h-6 w-6 text-orange-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Our Office Location</h4>
                  <p className="text-gray-300">Near Madurai Junction, W Masi Street, Madurai, TN 625001</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-orange-400 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Service Hours</h4>
                  <p className="text-gray-300">24/7 Phone Support & Airport/Station Pickups</p>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-900/30 rounded-lg p-6">
              <h4 className="font-semibold mb-3 text-blue-400">We Value Your Feedback</h4>
              <a 
                href="https://g.page/r/YourBusinessID/review" // Replace with your link
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-lg font-semibold text-white hover:text-blue-400 transition-colors"
              >
                <Star className="h-5 w-5 mr-3 text-yellow-400" />
                Rate Us on Google
              </a>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Plan Your Trip</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 mt-2" placeholder="Your Name" />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 mt-2" placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} required className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 mt-2" placeholder="+91 98765 43210" />
                    </div>
                    <div>
                        <Label htmlFor="persons" className="text-gray-300">No. of Persons</Label>
                        <Input id="persons" name="persons" type="number" min="1" value={formData.persons} onChange={handleChange} required className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 mt-2" placeholder="e.g., 4" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="service" className="text-gray-300">Service Needed</Label>
                    <Input id="service" name="service" value={formData.service} onChange={handleChange} className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 mt-2" placeholder="Airport Pickup, City Tour..." />
                  </div>
                  <div>
                    <Label htmlFor="carType" className="text-gray-300">Preferred Car Segment</Label>
                    <Select name="carType" onValueChange={handleSelectChange} value={formData.carType}>
                        <SelectTrigger className="bg-gray-700 border-gray-600 text-white mt-2">
                            <SelectValue placeholder="Select a car type" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 text-white">
                            <SelectItem value="Mini">Mini (Indica, etc.)</SelectItem>
                            <SelectItem value="Sedan">Sedan (Dezire, Etios)</SelectItem>
                            <SelectItem value="SUV">SUV (Innova, Xylo)</SelectItem>
                            <SelectItem value="Van">Van (Tempo Traveller)</SelectItem>
                        </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-gray-300">Travel Details</Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={4} className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 mt-2" placeholder="Please provide flight/train details, arrival/departure times, and any other requests." />
                </div>
                
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 text-lg">
                  Get a Free Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;