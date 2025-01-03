import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon, FaDownload, FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { SiJavascript, SiReact, SiNodedotjs, SiPython, SiDocker } from "react-icons/si";
import Header from "./Header/Header";
import About from "./About/About";
import Projects from "./Projects/Projects";
import ProjectModal from "./Projects/ProjectModal";
import Contact from "./Contact/Contact";
import Technologies from "./Technologies/Technologies";
import translations from '../data/translations.json';
import projects from "../data/projects.json";

const PortfolioLandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const [language, setLanguage] = useState("es");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "applications", name: "Applications" },
    { id: "landing-pages", name: "Landing Pages" }
  ];

  const technologies = [
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiReact, name: "React" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiPython, name: "Python" },
    { icon: SiDocker, name: "Docker" }
  ];

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} transition-colors duration-300`}>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} language={language} setLanguage={setLanguage} />

      <About translations={translations} language={language} />

      <Projects
        darkMode={darkMode}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        filteredProjects={filteredProjects}
        setSelectedProject={setSelectedProject}
      />

      <ProjectModal
        darkMode={darkMode}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />

      <Technologies darkMode={darkMode} technologies={technologies} />

      <Contact darkMode={darkMode} />

    </div>
  );
};

export default PortfolioLandingPage;
