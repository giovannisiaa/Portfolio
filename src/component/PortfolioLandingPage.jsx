import React, { useState } from "react";
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

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} transition-colors duration-300`}>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} language={language} setLanguage={setLanguage} />

      <About translations={translations} language={language} />

      <Projects
        darkMode={darkMode}
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

      <Technologies darkMode={darkMode} />

      <Contact darkMode={darkMode} />

    </div>
  );
};

export default PortfolioLandingPage;
