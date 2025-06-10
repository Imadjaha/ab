import { useState, useEffect, useRef } from "react";
import { courses } from "../constants";

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus input when component mounts
    inputRef.current?.focus();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value.toLowerCase());
  };
  // DESC Sort
  const sortedCourses = [...courses].sort((a, b) => b.id - a.id);

  const filteredCourses = sortedCourses.filter((course) => {
    return (
      course.title.toLowerCase().includes(searchQuery) ||
      course.semester.toLowerCase().includes(searchQuery) ||
      course.description.toLowerCase().includes(searchQuery)
    );
  });

  const handleReadMore = (id: number): void => {
    setExpandedCards((prevExpandedCards: number[]) =>
      prevExpandedCards.includes(id)
        ? prevExpandedCards.filter((cardId) => cardId !== id)
        : [...prevExpandedCards, id]
    );
  };

  return (
    <div className="flex flex-col items-center w-full theme-bg max-w-7xl mx-auto p-6">
      <input
        type="text"
        placeholder="Search Keywords"
        ref={inputRef}
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full md:w-3/5 p-4 mb-8 border border-gray-200 rounded-xl
          focus:shadow-[0_0_20px_rgba(135,7,255,0.3)] 
          focus:outline-none 
          dark:focus:shadow-[0_0_20px_rgba(255,0,255,0.3)]
          placeholder:text-gray-400
          dark:placeholder:text-gray-500
          dark:bg-gray-800
          dark:text-white
          dark:border-gray-700
          transition-all duration-300"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700
                shadow-lg hover:shadow-2xl p-6 relative transform hover:-translate-y-1 
                transition-all duration-300 ease-in-out
                ${expandedCards.includes(course.id) ? "h-auto" : ""}`}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">
                  {course.title}
                </h2>
                <span className="ml-4 px-3 py-1 text-sm font-medium bg-purple-100 dark:bg-purple-900 
                  text-purple-700 dark:text-purple-100 rounded-full">
                  {course.semester}
                </span>
              </div>
              
              <div className="prose dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {expandedCards.includes(course.id)
                    ? course.description
                    : window.innerWidth > 800
                    ? `${course.description.substring(0, 240)}...`
                    : course.title.length > 41
                    ? `${course.description.substring(0, 120)}...`
                    : `${course.description.substring(0, 200)}...`}
                  <button
                    className="ml-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 
                      dark:hover:text-purple-300 font-medium cursor-pointer transition-colors"
                    onClick={() => handleReadMore(course.id)}
                  >
                    {expandedCards.includes(course.id)
                      ? "Read Less"
                      : "Read More"}
                  </button>
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No courses found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}