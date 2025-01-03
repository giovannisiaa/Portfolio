import React, { useState } from "react";
import Header from "./Header/Header";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Technologies from "./Technologies/Technologies";
import translations from '../data/translations.json';
import { useDarkMode } from "../contexts/DarkModeContext";

const PortfolioLandingPage = () => {
  const { darkMode } = useDarkMode();
  const [language, setLanguage] = useState("es");

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} transition-colors duration-300`}>

      <Header language={language} setLanguage={setLanguage} />

      <About translations={translations} language={language} />

      <Projects />

      <Technologies />

      <Contact />

    </div>
  );
};

export default PortfolioLandingPage;
