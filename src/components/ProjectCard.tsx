import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiChevronDown, FiChevronUp } from "react-icons/fi";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  liveDemoLink?: string;
  category: string[];
  tech?: string[];
  // Add new props for expanded content
  detailedDescription?: string;
  features?: string[];
  challenges?: string[];
}

const ProjectCard = ({
  title,
  description,
  image,
  link,
  category,
  liveDemoLink,
  tech = [],
  detailedDescription,
  features = [],
  challenges = [],
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ribbon = category[0] ?? "Project";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="theme-bg group rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm 
                 shadow-lg hover:shadow-xl transition-all"
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover object-center
                     transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-2 left-2 text-xs font-semibold tracking-wide
                     bg-purple-700/90 text-white rounded-full px-3 py-1">
          {ribbon}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6 space-y-4">
        <header className="flex justify-between items-start">
          <h3 className="text-lg font-bold">{title}</h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 hover:bg-purple-500/10 rounded-full transition-colors cursor-pointer"
            aria-label={isExpanded ? "Show less" : "Show more"}
          >
            {isExpanded ? (
              <FiChevronUp className="text-purple-400" />
            ) : (
              <FiChevronDown className="text-purple-400" />
            )}
          </button>
        </header>

        {/* Basic Description */}
        <p className={`text-sm text-gray-500 dark:text-gray-400 ${
          isExpanded ? '' : 'line-clamp-3'
        }`}>
          {description}
        </p>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4 pt-4"
            >
              {detailedDescription && (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-purple-400">Details</h4>
                  <p className="text-sm text-gray-400">{detailedDescription}</p>
                </div>
              )}

              {features.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-purple-400">Key Features</h4>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    {features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {challenges.length > 0 && (
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-purple-400">Technical Challenges</h4>
                  <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                    {challenges.map((challenge, idx) => (
                      <li key={idx}>{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {(tech.length ? tech : category).map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium bg-purple-100/10 text-purple-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project Links */}
        <div className="flex items-center justify-between gap-4 pt-4 mt-4 border-t border-gray-700/30">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium
              text-gray-300 hover:text-white
              bg-gray-700/50 hover:bg-gray-700
              rounded-lg transition-all duration-300
              hover:shadow-lg hover:shadow-purple-500/10
              group"
          >
            <FiGithub className="text-base transition-transform group-hover:scale-110" />
            <span>Source Code</span>
          </a>

          {liveDemoLink && (
            <a
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium
                bg-gradient-to-r from-purple-600 to-blue-600
                hover:from-purple-700 hover:to-blue-700
                text-white rounded-lg transition-all duration-300
                hover:shadow-lg hover:shadow-purple-500/20
                group"
            >
              <FiExternalLink className="text-base transition-transform group-hover:scale-110" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;