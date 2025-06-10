import { useState, useEffect,useRef } from "react";
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
       className="w-3/5 p-3 mb-5 border border-[#433232] rounded 
          focus:shadow-[inset_2px_2px_15px_#8707ff] 
          focus:outline-none 
          dark:focus:shadow-[inset_2px_2px_15px_#ff00ff]
          placeholder:text-gray-500
          dark:placeholder:text-gray-400
          dark:bg-gray-800
          dark:text-white
          transition-colors duration-200"
      />
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 p-2 sm:p-5 text-[#333] font-sans test-base leading-relaxed shadow-lx hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`bg-[#67e1ff] rounded-[12px] shadow-[0_8px_16px_rgba(0,0,0,0.2)]
                  hover:shadow-[0_16px_32px_rgba(0,0,0,0.3)] p-2 relative transform hover:-translate-y-2 transition-all duration-500 ease-in-out
            ${expandedCards.includes(course.id) ? "h-auto" : ""} `}
            >
              <h2 className="font-bold sm:text-center text-start text-black font-display-swap font-weight-[1.1em]">
                {course.title}
              </h2>
              <span
                className="text-[1.2em] text-white bg-[#1b233d] rounded-[10px] px-[5px] shadow-[0_4px_8px_rgba(0,0,0,0.1)] 
         absolute top-[7px] right-[20px] transition-transform duration-300 
         hover:bg-[#044a94] hover:-translate-y-[2px] 
         max-[800px]:top-0 max-[800px]:right-[10px]"
              >
                {course.semester}
              </span>
              <p>
                {expandedCards.includes(course.id)
                  ? course.description
                  : window.innerWidth > 800
                  ? `${course.description.substring(0, 240)}....`
                  : course.title.length > 41
                  ? `${course.description.substring(0, 120)}....`
                  : `${course.description.substring(0, 200)}....`}
                <span
                  className="text-blue-700 hover:text-blue-800 cursor-pointer mt-2"
                  onClick={() => handleReadMore(course.id)}
                >
                  {expandedCards.includes(course.id)
                    ? "Read Less"
                    : "Read More"}
                </span>
              </p>
            </div>
          ))
        ) : (
          <p>No Result Found</p>
        )}
      </div>
    </div>
  );
}
