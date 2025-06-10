import ScrollUpButton from "../components/ScrollUpButton";
import Footer from "../sections/Footer";
import Projects from "../sections/Projects";

export default function Home() {
  return (
    <div className="w-full theme-bg pt-16">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">
          Hi, I'm <span className="text-purple-600">Aimad Bouchouaf</span>
        </h1>
        <p className="text-lg mb-4">
          A passionate Full-Stack Developer specializing in building exceptional
          digital experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="list-disc list-inside">
              <li>Full-Stack Development</li>
              <li>React & TypeScript</li>
              <li>Node.js & Express</li>
              <li>Database Design</li>
            </ul>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Interests</h2>
            <ul className="list-disc list-inside">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Software Architecture</li>
              <li>Cloud Computing</li>
            </ul>
          </div>
        </div>
        <div>
          <Projects />
        </div>
      </div>
      <Footer />
      <ScrollUpButton />
    </div>
  );
}
