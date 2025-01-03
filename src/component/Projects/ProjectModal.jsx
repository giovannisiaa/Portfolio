import React, { useState } from 'react';
import { FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProjectModal = ({ darkMode, selectedProject, setSelectedProject, projectImages }) => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    selectedProject && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelectedProject(null);
        }}
      >
        <div className={`${darkMode ? "bg-gray-800" : "bg-white"} rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative`}>
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          >
            <FaTimes size={24} />
          </button>

          {/* Image Carousel */}
          <div className="relative h-96">
            <img
              src={projectImages[selectedProject.id - 1][currentImageIndex]}
              alt={`Project ${currentImageIndex + 1}`}
              className="w-full h-full object-cover rounded-t-lg"
            />
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? projectImages[selectedProject.id - 1].length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              onClick={() => setCurrentImageIndex((prev) => (prev === projectImages[selectedProject.id - 1].length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <FaArrowRight size={20} />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {projectImages[selectedProject.id - 1].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full ${currentImageIndex === index ? "bg-white" : "bg-gray-400"}`}
                />
              ))}
            </div>
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-600"} mb-4`}>
              {selectedProject.longDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-blue-100 text-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProjectModal;