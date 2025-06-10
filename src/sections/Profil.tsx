import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profileBio } from "../constants";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiSpringboot,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
  SiGraphql,
  SiGitlab,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiFlask,
  SiJunit5,
} from "react-icons/si";

import { FaJava, FaAws } from "react-icons/fa";

// Add this after your socialLinks constant
const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Python", icon: SiPython },
      { name: "Flask", icon: SiFlask },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    name: "Database & APIs",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "RESTful APIs", icon: FaAws },
      { name: "GraphQL", icon: SiGraphql },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "GitLab CI/CD", icon: SiGitlab },
      { name: "JUnit", icon: SiJunit5 },
    ],
  },
];

const socialLinks = [
  {
    href: "https://github.com/Imadjaha",
    icon: FiGithub,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/aimad-bouchouaf",
    icon: FiLinkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:imadjaha1@gmail.com",
    icon: FiMail,
    label: "Email",
  },
];

export default function Profile() {
  return (
    <section className="w-full py-16 theme-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
            className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
          >
            Aimad Bouchouaf
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300"
          >
            Full-Stack Developer & Computer Science Student
          </motion.h2>

          {/* Animated Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-6 mt-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 
                         text-gray-600 hover:text-purple-600 
                         dark:text-gray-400 dark:hover:text-purple-400 
                         transition-colors shadow-md hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Bio Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <div
            dangerouslySetInnerHTML={{ __html: profileBio }}
            className="space-y-6 text-gray-600 dark:text-gray-300"
          />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 space-y-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                    }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
                       rounded-lg p-3 flex items-center gap-2
                       shadow-md border border-gray-200 dark:border-gray-700
                       hover:border-purple-400 dark:hover:border-purple-500
                       transition-all duration-300"
                  >
                    <skill.icon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
