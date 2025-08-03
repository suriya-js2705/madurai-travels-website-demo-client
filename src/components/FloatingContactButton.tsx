
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface FloatingContactButtonProps {
  onClick: () => void;
}

const FloatingContactButton = ({ onClick }: FloatingContactButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 bg-teal-500 hover:bg-teal-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse"
      size="lg"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Contact Us</span>
    </Button>
  );
};

export default FloatingContactButton;
