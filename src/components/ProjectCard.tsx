import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  id?: number; // optional if coming from constants
  title: string;
  description: string;
  image: string;
  link: string;
  liveDemoLink?: string;
  category: string[]; // e.g. ["AI & ML"]
  tech?: string[]; // optional extra tags if you store them separately
}

const ProjectCard = ({
  title,
  description,
  image,
  link,
  category,
  liveDemoLink,
  tech = [],
}: ProjectCardProps) => {
  // first category is used for the ribbon badge
  const ribbon = category[0] ?? "Project";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="theme-bg group rounded-xl overflow-hidden bg-gray-800/50 backdrop-blur-sm
                 shadow-lg hover:shadow-xl transition-shadow"
    >
      {/* ──────────────── Image with badge & hover scale ──────────────── */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover object-center
                     transition-transform duration-300 group-hover:scale-105"
        />

        {/* Ribbon badge */}
        <span
          className="absolute top-2 left-2 text-xs font-semibold tracking-wide
                     bg-purple-700/90 text-white rounded-full px-3 py-1 flex items-center gap-1"
        >
          {ribbon}
        </span>
      </div>

      {/* ──────────────── Card Content ──────────────── */}
      <div className="p-6 space-y-4">
        <header>
          <h3 className="text-lg font-bold ">{title}</h3>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
            {description}
          </p>
        </header>

        {/* Tech badges */}
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

        {/* Project Links Section */}
        <div className="flex items-center justify-between gap-4 pt-4 mt-4 border-t border-gray-700/30">
          {/* Source Code Button */}
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

          {/* Live Demo Button */}
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
