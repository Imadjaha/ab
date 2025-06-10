import { LuMoon, LuSun } from "react-icons/lu";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DarkModeSwitcher() {
  const [theme, setTheme] = useState(() => {
    // Check localStorage first, if not set, default to "dark"
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    // Set dark mode as default on first load
    if (!localStorage.getItem("theme")) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  // Rest of the component remains the same
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        onClick={toggleTheme}
        className={`
          p-2 rounded-full
          bg-gray-100 dark:bg-gray-800
          text-gray-900 dark:text-gray-100
          shadow-md hover:shadow-lg
          transition-all duration-300
          cursor-pointer
          ring-1 ring-gray-200 dark:ring-gray-700
          hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600
        `}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: theme === "light" ? 0 : 180 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-6 h-6 flex items-center justify-center"
        >
          {theme === "light" ? (
            <LuMoon className="w-5 h-5" />
          ) : (
            <LuSun className="w-5 h-5" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}