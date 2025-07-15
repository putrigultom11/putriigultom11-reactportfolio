
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "FerryPass – Ferry Booking Ticket System",
      description: "Full-featured ferry ticketing platform built with Laravel and React, enabling digital ticket booking, vehicle classification, and QR-based payments via Midtrans. Includes chatbot with NLP integration, RESTful API architecture, and validated through SUS & UAT testing.",
      tech: ["REST API", "Flutter", "Tailwind CSS", "MySQL", "React", "Laravel", "NLP", "Selenium", "Midtrans"],
      imageUrl: "/kmp.webp",
      demoUrl: "#",
      codeUrl: "https://github.com/ImmanuelPartogi/TA-Kel-13"
    },
    {
      title: "Newsly – Android News Reader Application",
      description: "Real-time Android news app developed in Kotlin with infinite scrolling, clean architecture, and live data integration using NewsAPI. Supports Retrofit-based API calls and optimized for performance on various Android devices.",
      tech: ["Kotlin", "REST API", "Retrofit", "Android"],
      imageUrl: "/rakamin.png",
      demoUrl: "",
      codeUrl: "https://github.com/putriitr/NewsApp"
    },
    {
      title: "Company Profile Website Suite",
      description: "Suite of customizable company profile websites with user authentication, admin CMS, and full CRUD functionality. Built with Laravel and Tailwind CSS, tested using Cypress and Selenium to ensure responsive UI and backend reliability.",
      tech: ["Laravel", "HTML/CSS", "Tailwind CSS", "Cypress", "JavaScript", "MySQL", "Selenium"],
      imageUrl: "/compro-gsa.jpeg",
      demoUrl: "#",
      codeUrl: "https://github.com/putrigultom11/GSA-Compro"
    },
    // {
    //   title: "Labtek & Labverse – ECommerce Website",
    //   description: "Dual e-commerce platforms featuring product management, shopping cart, checkout integration, and admin dashboards. Developed with Laravel and Tailwind CSS, integrated with Midtrans for payments and tested via Cypress.",
    //   tech: ["Laravel", "Tailwind CSS", "HTML", "PHP", "MySQL", "Midtrans", "Cypress"],
    //   imageUrl: "/rakamin.png",
    //   demoUrl: "#",
    //   codeUrl: "https://github.com/iqbalsiagian17/Umalo-Ags"
    // },
    {
      title: "Purnama Balige Hotel Reservation System",
      description: "A hotel booking system developed with PHP and Laravel, supporting room reservations, microservice architecture, and Midtrans payment gateway. Includes automated testing with Katalon and responsive front-end UI.",
      tech: ["Laravel", "Tailwind CSS", "HTML", "PHP", "MySQL", "REST API", "Katalon"],
      imageUrl: "/hotel-booking.png",
      demoUrl: "#",
      codeUrl: "https://github.com/putriitr/PA2Kel07_purnamaHotel"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Projects that highlight my practical experience in software development, system design, and modern technologies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="shadow-lg">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {/* <Button
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                      onClick={() => window.open(project.demoUrl)}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button> */}
                    <Button
                      variant="outline"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                      onClick={() => window.open(project.codeUrl)}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
