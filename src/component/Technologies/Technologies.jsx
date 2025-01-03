import React from 'react';
import technologies from '../../data/technologies';

const Technologies = ({ darkMode }) => {
  return (
    <section id="technologies" className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-100"} px-6`}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Technologies</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="flex flex-col items-center">
              <tech.icon className="text-6xl text-white-700 hover:text-blue-600 transition-colors duration-300" />
              <span className="mt-2 text-white-600">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;