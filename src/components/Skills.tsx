
import { motion } from "framer-motion";

const Skills = () => {
  const programmingLanguages = [
    { 
      name: "JavaScript", 
      icon: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "Python", 
      icon: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "TypeScript", 
      icon: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "Java", 
      icon: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "C#", 
      icon: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "PHP", 
      icon: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?w=100&h=100&fit=crop&crop=center"
    }
  ];

  const databases = [
    { 
      name: "PostgreSQL", 
      icon: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "MongoDB", 
      icon: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "MySQL", 
      icon: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "Redis", 
      icon: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=100&h=100&fit=crop&crop=center"
    }
  ];

  const cloudDevOps = [
    { 
      name: "AWS", 
      icon: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "Docker", 
      icon: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "Kubernetes", 
      icon: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "Git", 
      icon: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "Jenkins", 
      icon: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=100&h=100&fit=crop&crop=center"
    },
    { 
      name: "GCP", 
      icon: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop&crop=center"
    }
  ];

  const SkillCategory = ({ title, skills, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-2xl font-bold text-slate-800 mb-6">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center space-y-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 hover:border-blue-300"
          >
            <img 
              src={skill.icon} 
              alt={skill.name}
              className="w-12 h-12 rounded object-cover"
            />
            <span className="text-sm font-medium text-slate-700 text-center">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

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
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto"></div>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <SkillCategory 
            title="Programming Languages" 
            skills={programmingLanguages} 
            delay={0}
          />
          <SkillCategory 
            title="Databases" 
            skills={databases} 
            delay={0.2}
          />
          <SkillCategory 
            title="Cloud & DevOps" 
            skills={cloudDevOps} 
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
