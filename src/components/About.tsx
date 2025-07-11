
import { motion } from "framer-motion";
import { Code, Heart, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and efficient code"
    },
    {
      icon: Heart,
      title: "Passionate",
      description: "Love for continuous learning and growth"
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-600 leading-relaxed">
              I'm a recent Software Engineering graduate with a passion for creating 
              innovative digital solutions. My journey in tech has been driven by 
              curiosity and a desire to solve complex problems through elegant code.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I specialize in full-stack development with expertise in modern 
              JavaScript frameworks, cloud technologies, and database design. 
              I'm always eager to learn new technologies and contribute to 
              meaningful projects that make a difference.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              When I'm not coding, you can find me exploring new tech trends, 
              contributing to open-source projects, or mentoring fellow developers 
              in the community.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
