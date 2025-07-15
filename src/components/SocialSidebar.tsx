import { motion } from "framer-motion";
import { Linkedin, Mail, MessageCircleMore, Github } from "lucide-react";
import { useState, useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { FaWhatsapp } from "react-icons/fa";

const GithubDropdown = () => (
  <Popover>
    <PopoverTrigger asChild>
      <button
        aria-label="GitHub Accounts"
        className="w-12 h-12 bg-white shadow-lg rounded-lg flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
      >
        <Github size={20} />
      </button>
    </PopoverTrigger>
    <PopoverContent className="w-48 text-sm">
      <p className="font-semibold mb-2">Personal GitHub :</p>
      <ul className="space-y-1">
        <li>
          <a
            href="https://github.com/putriitr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-indigo-600"
          >
            putriitr
          </a>
        </li>
        <li>
          <a
            href="https://github.com/putrigultom11"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-indigo-600"
          >
            putrigultom11
          </a>
        </li>
      </ul>
    </PopoverContent>
  </Popover>
);

const SocialSidebar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/putrigultom07",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:putriigultom11@gmail.com",
      label: "Email"
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/6282277263370", 
      label: "WhatsApp"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : -50
      }}
      transition={{ duration: 0.3 }}
      className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="flex flex-col space-y-4">
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + index * 0.1 }}
            className="w-12 h-12 bg-white shadow-lg rounded-lg flex items-center justify-center text-slate-600 hover:text-blue-600 hover:shadow-xl transition-all duration-300"
            aria-label={social.label}
          >
            <social.icon size={20} />
          </motion.a>
        ))}

        {/* GitHub Dropdown */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7 + socialLinks.length * 0.1 }}
        >
          <GithubDropdown />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SocialSidebar;
