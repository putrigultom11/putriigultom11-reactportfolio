import { Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  const jobTitles = [
    "Web & Mobile Developer",
    "Frontend Developer",
    "Data Analyst",
    "Quality Assurance",
    "UI/UX Designer"
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-100 relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-12 items-center gap-8"
        >
          {/* Kolom Kiri Kosong */}
          <div className="hidden md:block md:col-span-1" />

          {/* FOTO + EFEK */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="col-span-12 md:col-span-4 flex justify-center md:justify-start relative"
          >
            <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-30 animate-pulse z-0"></div>

            <img
              src="/putri.JPG"
              alt="Putri Tamara Gultom"
              className="relative w-60 h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-white shadow-xl z-10"
            />
          </motion.div>

          {/* TEKS */}
          <div className="col-span-12 md:col-span-7 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              HEY THERE, I'M <br /> PUTRI TAMARA GULTOM
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              <span className="font-semibold text-slate-800">
                <TypewriterText words={jobTitles} />
              </span>
              <br />
              Passionate about creating innovative solutions and building scalable applications.
              Ready to contribute to cutting-edge technology teams.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <a
                href="/CV_Putri Tamara Gultom.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="animated-gradient text-white font-semibold py-3 px-8 hover:scale-105 transition-transform duration-300"
                >
                  <Download className="mr-2" size={20} />
                  Download CV
                </Button>
              </a>
              <a href="mailto:putriigultom11@gmail.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white py-3 px-8 hover:scale-105 transition-all duration-300"
                >
                  <Mail className="mr-2" size={20} />
                  Hire Me
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
