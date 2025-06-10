import { motion } from "framer-motion";
import ScrollUpButton from "../components/ScrollUpButton";
import Footer from "../sections/Footer";
import Projects from "../sections/Projects";
import Profil from "../sections/Profil";
import Qualifications from "../sections/Qualifications";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full theme-bg min-h-screen"
    >
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 dark:from-purple-900/20 dark:to-blue-900/20" />
        <div className="relative">
          <Profil />
        </div>
      </div>

      {/* Experience Section with Subtle Pattern */}
      <div className="relative bg-gray-50/50 dark:bg-gray-900/50">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6bTAgMmE0IDQgMCAxIDAgMCA4IDQgNCAwIDAgMCAwLTh6IiBmaWxsPSJjdXJyZW50Q29sb3IiIG9wYWNpdHk9Ii4yIi8+PC9nPjwvc3ZnPg==')] opacity-40" />
        <div className="relative">
          <Qualifications />
        </div>
      </div>

      {/* Projects Section with Different Background */}
      <div className="relative bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/30">
        <div className="relative">
          <Projects />
        </div>
      </div>

      {/* Improved Footer */}
      <div className="relative mt-20">
        <div className="absolute inset-0 bg-gradient-to-t from-purple-100/20 to-transparent dark:from-purple-950/20" />
        <Footer />
      </div>

      {/* Scroll Up Button */}
      <ScrollUpButton />
    </motion.div>
  );
}