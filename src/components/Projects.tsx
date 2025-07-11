
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      image: "bg-gradient-to-br from-blue-500 to-purple-600",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Socket.io", "MongoDB", "Express.js", "JWT"],
      image: "bg-gradient-to-br from-green-500 to-teal-600",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Weather Analytics Dashboard",
      description: "Interactive weather dashboard with data visualization, forecasting, and location-based weather insights using external APIs.",
      tech: ["React", "Chart.js", "OpenWeather API", "TypeScript", "Redux"],
      image: "bg-gradient-to-br from-orange-500 to-red-600",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Social Media API",
      description: "RESTful API for social media platform with user management, post creation, comments, and real-time notifications.",
      tech: ["Node.js", "Express.js", "MongoDB", "Socket.io", "Cloudinary"],
      image: "bg-gradient-to-br from-indigo-500 to-pink-600",
      demoUrl: "#",
      codeUrl: "#"
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
            Here are some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden">
                <div className={`h-48 ${project.image} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="absolute top-4 right-4 space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="shadow-lg">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
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
                    <Button
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
                      onClick={() => window.open(project.demoUrl)}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-300"
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
