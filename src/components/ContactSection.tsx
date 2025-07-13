
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", destination: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Explore Madurai?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Contact us for instant bookings, station pickups, and customized Madurai tour packages
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-orange-400">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Visit Our Office</h4>
                    <p className="text-gray-300">Near Madurai Junction Railway Station<br />W Masi Street, Madurai, Tamil Nadu 625001</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-orange-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Call for Instant Booking</h4>
                    <p className="text-gray-300">+91 98765 43210<br />+91 87654 32109</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-orange-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-gray-300">bookings@maduraitravels.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-orange-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Service Hours</h4>
                    <p className="text-gray-300">24/7 Station & Airport Pickup<br />Office: 6AM - 10PM Daily</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-orange-900/30 rounded-lg p-6">
              <h4 className="font-semibold mb-3 text-orange-400">Quick Service Locations</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Madurai Junction Railway Station</li>
                <li>• Madurai Airport (IXM)</li>
                <li>• Major Hotels in Madurai</li>
                <li>• Bus Stands & Travel Hubs</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Book Your Madurai Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">Full Name</Label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-white">Phone</Label>
                    <Input 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <Label htmlFor="destination" className="text-white">Service Needed</Label>
                    <Input 
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                      placeholder="City Tour, Car Rental, etc."
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">Travel Details</Label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
                    placeholder="Arrival time, train/flight details, preferred pickup location..."
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3"
                >
                  Send Booking Request
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
