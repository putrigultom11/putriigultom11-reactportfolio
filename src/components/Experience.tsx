
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Mobile Apps Developer Intern",
      company: "Rakamin Academy",
      duration: "Feb 2025 - Mar 2025",
      location: "Remote, Online",
      responsibilities: [
        "Developed a responsive Android news app using Kotlin, integrating RESTful APIs with Retrofit",
        "Implemented infinite scrolling and clean architecture to enhance performance and maintainability",
        "Collaborated within an Agile team using GitLab for version control and CI workflows",
        "Ensured device compatibility through systematic testing across various Android environments."
      ],
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Software Engineer Intern",
      company: "PT Umalo Sedia Tekno",
      duration: "Aug 2024 - Jan 2025",
      location: "Depok, West Java",
      responsibilities: [
        "Built full-featured e-commerce site with product listing, cart, checkout, and admin dashboard",
        "Developed 4 responsive company profile websites for diverse client sectors",
        "Implemented user authentication and content management features",
        "Conducted both manual and automated testing using Robot Framework and Selenium."
      ],
      color: "from-green-500 to-teal-500"
    }
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
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            My professional journey and the valuable experiences that have shaped my development skills.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-white shadow-lg`}></div>

                {/* Content */}
                <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-blue-100">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col lg:items-end text-sm text-slate-500">
                      <div className="flex items-center mb-1">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (idx * 0.1) }}
                        viewport={{ once: true }}
                        className="flex items-start text-slate-600"
                      >
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
