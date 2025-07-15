import Scrollspy from "react-scrollspy";
import { motion } from "framer-motion";

const Navigation = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Brand Name */}
          <a
            href="#home"
            className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors flex items-center gap-2"
            aria-label="Homepage"
          >
            <span className="text-yellow-500">★</span>
            Portfolio
          </a>

          {/* Navigation Links with Scrollspy */}
          <Scrollspy
            items={["home", "about", "experience", "projects", "contact"]}
            currentClassName="text-indigo-600 font-semibold"
            componentTag="div"
            className="hidden md:flex items-center space-x-8"
            offset={-80} // sesuaikan tinggi navbar kamu
          >
            <a href="#home" className="text-slate-700 hover:text-indigo-600 transition-colors">
              HOME
            </a>
            <a href="#about" className="text-slate-700 hover:text-indigo-600 transition-colors">
              ABOUT
            </a>
            <a href="#experience" className="text-slate-700 hover:text-indigo-600 transition-colors">
              EXPERIENCE
            </a>
            <a href="#projects" className="text-slate-700 hover:text-indigo-600 transition-colors">
              PROJECTS
            </a>
            <a href="#contact" className="text-slate-700 hover:text-indigo-600 transition-colors">
              CONTACT
            </a>
          </Scrollspy>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
