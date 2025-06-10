import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

interface ProjectCardProps {
  id?: number;               // optional if coming from constants
  title: string;
  description: string;
  image: string;
  link: string;
  category: string[];        // e.g. ["AI & ML"]
  tech?: string[];           // optional extra tags if you store them separately
}

const ProjectCard = ({
  title,
  description,
  image,
  link,
  category,
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

        {/* Hover overlay with buttons */}
        <div
          className="absolute inset-0 bg-black/60 opacity-0
                     group-hover:opacity-100 transition-opacity
                     flex items-center justify-center gap-4"
        >
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700
                       text-white text-sm font-medium px-4 py-2 rounded-lg
                       transition-transform transform hover:scale-105"
          >
            <FiGithub className="text-base" />
            Source Code
          </a>

          {/* Live demo if using GitHub Pages link */}
          {link.includes("github.io") && (
            <a
              href={link.replace("github.com", "github.io")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700
                         text-white text-sm font-medium px-4 py-2 rounded-lg
                         transition-transform transform hover:scale-105"
            >
              <FiExternalLink className="text-base" />
              Live Demo
            </a>
          )}
        </div>
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
  { (tech.length ? tech : category).map((tag, idx) => (
      <span
        key={idx}
        className="px-3 py-1 text-xs font-medium bg-purple-100/10 text-purple-300 rounded-full"
      >
        {tag}
      </span>
    ))
  }
</div>


        {/* Source-code link row (always visible, bottom-left) */}
        <div className="flex items-center gap-2 text-gray-400 text-sm pt-2">
          <FiGithub />
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-colors"
          >
            Source Code
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
