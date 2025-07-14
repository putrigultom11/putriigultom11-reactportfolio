
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  const jobTitles = [
    "Web Developer",
    "Result-Oriented Developer",
    "Full Stack Developer", 
    "Frontend Developer",
    "Backend Developer"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 leading-tight">
              HEY, I'M JOHN SMITH
            </h1>
          </motion.div>
          
          {/* Typewriter Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A <span className="font-semibold text-slate-800">
                <TypewriterText words={jobTitles} />
              </span> building and managing Websites and Web Applications that leads to the success of the overall product
            </p>
          </motion.div>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button 
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              PROJECTS
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
