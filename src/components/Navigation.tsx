
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">JS</span>
            </div>
            <span className="text-xl font-bold text-slate-800">JOHN SMITH</span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              HOME
            </a>
            <a href="#about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              ABOUT
            </a>
            <a href="#projects" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              PROJECTS
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
