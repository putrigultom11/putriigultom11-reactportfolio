
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-300">
              © 2025 Putri Tamara Gultom.
            </p>
          </div>
          <div className="flex items-center space-x-2 text-slate-300">
            <span>Made with lots of</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
