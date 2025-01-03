import React, { useState } from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Technologies from "./Technologies/Technologies";
import translations from '../data/translations.json';

const PortfolioLandingPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  const [language, setLanguage] = useState("es");

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} transition-colors duration-300`}>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} language={language} setLanguage={setLanguage} />

      <About translations={translations} language={language} />

      <Projects
        darkMode={darkMode}
      />

      <Technologies darkMode={darkMode} />

      <Contact darkMode={darkMode} />

    </div>
  );
};

export default PortfolioLandingPage;
