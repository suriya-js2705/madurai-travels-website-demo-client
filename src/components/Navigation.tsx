
import { Button } from "@/components/ui/button";
import { MapPin, Menu } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  onContactClick: () => void;
}

const Navigation = ({ onContactClick }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-teal-500" />
            <span className="text-xl font-bold text-gray-900">TravelCo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-700 hover:text-teal-500 transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('destinations')}
              className="text-gray-700 hover:text-teal-500 transition-colors"
            >
              Destinations
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-teal-500 transition-colors"
            >
              Services
            </button>
            <Button 
              onClick={onContactClick}
              className="bg-teal-500 hover:bg-teal-600 text-white"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block px-3 py-2 text-gray-700 hover:text-teal-500 transition-colors w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('destinations')}
                className="block px-3 py-2 text-gray-700 hover:text-teal-500 transition-colors w-full text-left"
              >
                Destinations
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-gray-700 hover:text-teal-500 transition-colors w-full text-left"
              >
                Services
              </button>
              <Button 
                onClick={onContactClick}
                className="w-full mt-2 bg-teal-500 hover:bg-teal-600 text-white"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
