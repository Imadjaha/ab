import { motion } from "framer-motion";
import { BsBriefcase } from "react-icons/bs";

export default function Qualifications() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
     <section className="w-full py-8 sm:py-16">
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="max-w-4xl mx-auto px-4 sm:px-6"
      >
        <motion.h2
          variants={item}
          className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 
                     bg-gradient-to-r from-purple-600 to-blue-600 
                     text-transparent bg-clip-text"
        >
          Professional Experience
        </motion.h2>

        <motion.div variants={item} className="relative">
          {/* Timeline line - Improved visibility */}
          <div className="absolute left-0 transform -translate-x-px 
                         h-full w-1 bg-gradient-to-b from-purple-600 
                         via-blue-600 to-purple-600 opacity-50 sm:opacity-100"></div>

          {/* 3M Experience */}
          <div className="relative flex sm:flex-row flex-col sm:items-center mb-8 sm:mb-16">
            <div className="flex-1 sm:pr-8 sm:text-right order-2 sm:order-1 pl-8 sm:pl-0 sm:ml-6 ml-0">
              <motion.div
                variants={item}
                className="bg-white/10 backdrop-blur-sm dark:bg-gray-800/50 
                           p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl 
                           transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-bold text-purple-600 
                             dark:text-purple-400 mb-2 break-words">
                  Working Student Software Engineering
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                  3M, Neuss
                </p>
                <div className="flex items-center justify-end text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <BsBriefcase className="mr-2" />
                  September 2024 - Present
                </div>
                <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  <li className="flex items-center justify-end gap-2">
                    <span>
                      Design and implementation of Dash and Plotly components
                    </span>
                    <span className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></span>
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>
                      Integration of JavaScript for dynamicclient-side
                      interactions
                    </span>
                    <span className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></span>
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>Utilizing GraphQL for efficient data management</span>
                    <span className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></span>
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span> Contributing to machine learning tasks</span>
                    <span className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></span>
                  </li>
                  <li className="flex items-center justify-end gap-2">
                    <span>
                      Working with AWS Cloud services for application
                      enhancement
                    </span>
                    <span className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></span>
                  </li>
                </ul>
              </motion.div>
            </div>
             {/* Timeline dot - Improved mobile visibility */}
            <div className="absolute left-0  transform -translate-x-1/2 
                           flex items-center justify-center order-1 sm:order-2 top-1/2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 
                            border-purple-600 bg-white dark:bg-gray-800 
                            shadow-md"></div>
            </div>
          </div>

          {/* Zwilling Experience */}
                   <div className="relative flex sm:flex-row flex-col sm:items-center">
            <div className="flex-1 sm:pl-8 order-2 pl-8 sm:pl-8">
              <motion.div
                variants={item}
                className="bg-white/10 backdrop-blur-sm dark:bg-gray-800/50 
                           p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl 
                           transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  Working Student Laboratory
                </h3>
                <p className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                  Zwilling J.A. Henckels, Solingen
                </p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <BsBriefcase className="mr-2" />
                  March 2023 - September 2024
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                    <span>
                      Administrative tasks in setting up the LIMS system
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                    <span>Integration of SQL queries into the frontend</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                    <span>Troubleshooting and optimization of SQL queries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></span>
                    <span>Creation of dashboards for data visualization</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          {/* Timeline dot */}
            <div className="absolute left-0  transform -translate-x-1/2 
                           flex items-center justify-center order-1 top-1/2 sm:-translate-y-1/2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 
                            border-blue-600 bg-white dark:bg-gray-800 
                            shadow-md"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
