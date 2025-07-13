
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";

interface HeroProps {
  onContactClick: () => void;
}

const Hero = ({ onContactClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-900 via-red-800 to-pink-700">
      <div className="absolute inset-0 bg-black/40"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
        }}
      ></div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center mb-6 animate-fade-in">
          <MapPin className="h-8 w-8 mr-2 text-orange-400" />
          <span className="text-orange-400 font-semibold text-lg tracking-wide">MADURAI LOCAL TRAVELS</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          Explore Historic
          <span className="block text-orange-400">Madurai</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto animate-fade-in">
          Just arrived at Madurai Railway Station or Airport? Discover the temple city's 
          magnificent heritage with our local tour packages, car rentals, and guided trips.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
            onClick={onContactClick}
          >
            Book Your Madurai Tour
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-orange-900 px-8 py-3 text-lg font-semibold transition-all duration-300"
            onClick={() => document.getElementById('destinations')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Tour Packages
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">50+</div>
            <div>Tour Packages</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">24/7</div>
            <div>Station Pickup</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">AC</div>
            <div>Car Rentals</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-400">Local</div>
            <div>Expert Guides</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
