
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { 
      name: "React", 
      level: 90, 
      color: "from-blue-500 to-cyan-500",
      icon: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "Node.js", 
      level: 85, 
      color: "from-green-500 to-emerald-500",
      icon: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "TypeScript", 
      level: 80, 
      color: "from-blue-600 to-indigo-600",
      icon: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "PostgreSQL", 
      level: 75, 
      color: "from-indigo-500 to-purple-500",
      icon: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "Docker", 
      level: 70, 
      color: "from-blue-400 to-blue-600",
      icon: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "AWS", 
      level: 65, 
      color: "from-orange-500 to-red-500",
      icon: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "Python", 
      level: 80, 
      color: "from-yellow-500 to-orange-500",
      icon: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "MongoDB", 
      level: 75, 
      color: "from-green-600 to-green-700",
      icon: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop&crop=center"
    }
  ];

  const tools = [
    "JavaScript", "HTML5", "CSS3", "Git", "GitHub", "VS Code", 
    "Figma", "Postman", "Jest", "Redux", "Tailwind CSS", "Express.js"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Core Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Core Technologies</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <img 
                        src={skill.icon} 
                        alt={skill.name}
                        className="w-8 h-8 rounded object-cover"
                      />
                      <span className="text-lg font-medium text-slate-700">{skill.name}</span>
                    </div>
                    <span className="text-sm text-slate-500">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-8">Tools & Frameworks</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center border border-blue-100 hover:border-blue-300"
                >
                  <span className="text-slate-700 font-medium">{tool}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
