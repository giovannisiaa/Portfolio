import React, { useState } from 'react';
import categories from '../../data/categories';
import ProjectsModal from './ProjectModal';
import projects from '../../data/projects';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useTranslation } from '../../contexts/LanguageContext';

const Projects = () => {
  const { darkMode } = useDarkMode();
  const { language, translations } = useTranslation();

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <>
      <section id="projects" className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-100"} px-6`}>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{translations("projects").title}</h2>

          {/* Category Filter */}
          <div className="flex justify-center mb-8 space-x-4">
            {categories[language].map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${selectedCategory === category.id
                  ? "bg-blue-600 text-white"
                  : darkMode
                    ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`${darkMode ? "bg-gray-700" : "bg-white"} rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer`}
              >
                <img
                  src={project.image}
                  alt={project.title[language]}
                  className="w-full h-48 "
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title[language]}</h3>
                  <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>{project.description[language]}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-sm rounded bg-blue-50 text-blue-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end space-x-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                      onClick={(e) => e.stopPropagation()}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectsModal
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
      />

    </>
  );
};

export default Projects;