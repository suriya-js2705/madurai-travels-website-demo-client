
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import ContactPopup from "@/components/ContactPopup";
import FloatingContactButton from "@/components/FloatingContactButton";

const Index = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactPopupOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Navigation onContactClick={handleContactClick} />
      <Hero onContactClick={handleContactClick} />
      <Services />
      <Destinations onContactClick={handleContactClick} />
      <Testimonials />
      <ContactSection />
      <ContactPopup 
        isOpen={isContactPopupOpen} 
        onClose={() => setIsContactPopupOpen(false)} 
      />
      <FloatingContactButton onClick={handleContactClick} />
    </div>
  );
};

export default Index;
