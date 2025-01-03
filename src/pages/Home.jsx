import React from "react";
import Header from "../component/Header/Header";
import About from "../component/About/About";
import Projects from "../component/Projects/Projects";
import Technologies from "../component/Technologies/Technologies";
import Contact from "../component/Contact/Contact";
import { useDarkMode } from "../contexts/DarkModeContext";

const Home = () => {
  const { darkMode } = useDarkMode();

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} transition-colors duration-300`}>
      <Header />
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
};

export default Home;