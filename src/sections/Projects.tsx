import { useState, useMemo } from "react";
import { FiFilter, FiSearch } from "react-icons/fi";
import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";

const categories = [
  "All Projects",
  "Typescript",
  "Python",
  "Javascript",
  "Java",
  "Spring Boot",
  "ReactJs",
  "NextJs",
];

const Projects = () => {
  const [activeCat, setActiveCat] = useState<string>("All Projects");
  const [query, setQuery] = useState<string>("");

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const inCategory =
        activeCat === "All Projects" || p.category.includes(activeCat);
      const inSearch =
        query.trim() === "" ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      return inCategory && inSearch;
    });
  }, [activeCat, query]);

  return (
    <section className="w-full py-12 theme-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* ───────────────── Filter & Search Bar ───────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          {/* Filter */}
          <div className="flex items-center gap-3 flex-wrap">
            <FiFilter className="text-xl text-gray-400" />
            <span className="text-sm font-medium ">Filter:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 py-1.5 rounded-full text-sm transition-colors cursor-pointer
                  ${
                    activeCat === cat
                      ? "bg-purple-600 text-white"
                      : "bg-gray-700/40  hover:bg-gray-600/40"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex-grow lg:flex-grow-0 lg:ml-auto">
            <label className="relative block">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full lg:w-80 bg-gray-700/40 outline-none text-sm 
                           rounded-lg py-2.5 pl-10 pr-4 dark:placeholder:text-gray-400
                           focus:ring-2 focus:ring-purple-600"
              />
            </label>
          </div>
        </div>

        {/* ───────────────── Project Cards ───────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
