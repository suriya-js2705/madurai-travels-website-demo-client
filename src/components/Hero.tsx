
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700">
      <div className="absolute inset-0 bg-black/30"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6 animate-fade-in">
          <MapPin className="h-8 w-8 mr-2 text-teal-400" />
          <span className="text-teal-400 font-semibold text-lg tracking-wide">EXPLORE INCREDIBLE INDIA</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          Discover India's
          <span className="block text-teal-400">Hidden Gems</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto animate-fade-in">
          From the backwaters of Kerala to the deserts of Rajasthan, experience the incredible 
          diversity and beauty of India with our expertly crafted local tours.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            onClick={onContactClick}
          >
            Plan Your Indian Adventure
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg font-semibold transition-all duration-300"
            onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore Destinations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
