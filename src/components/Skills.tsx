
import { motion } from "framer-motion";

const Skills = () => {
  const programmingLanguages = [
    {
      name: "HTML/CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    {
      name: "PHP",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      name: "Laravel",
      icon: "/laravel.png"
    },
    {
      name: "Kotlin",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      name: "Golang",
      icon: "/golang.png"
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    }
  ];

  const databases = [
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    }
  ];

  const testingTools = [
    {
      name: "Postman",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
    },
    {
      name: "Selenium",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg"
    },
    {
      name: "Katalon Studio",
      icon: "/katalon.png"
    },
    {
      name: "Robot Framework",
      icon: "/robot.png"
    }
  ];


  const SkillCategory = ({ title, skills, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="mb-16"
    >
      <h3 className="text-2xl font-bold text-slate-800 mb-8 text-left">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-16 h-16 mb-3 flex items-center justify-center">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <span className="text-sm text-slate-600 text-center font-medium">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

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
            title="Testing Tools"
            skills={testingTools}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
