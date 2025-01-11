import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useDarkMode } from "../../contexts/DarkModeContext";
import { useTranslation } from "../../contexts/LanguageContext";

const Header = () => {
  const { language, setLanguage, translations } = useTranslation();
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <>
      {/* Header */}
      <header className={`fixed w-full ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md z-50`}>
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold hidden-450">Giovanni Sia</div>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setLanguage(language === "es" ? "en" : "es")}
                className="text-blue-600 hover:text-blue-800 hidden-350"
              >
                {language === "es" ? "EN" : "ES"}
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 hidden-350"
              >
                {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
              </button>
              <a href="#about" className={`hover:text-blue-600 transition-colors`}>{translations('header').about}</a>
              <a href="#projects" className={`hover:text-blue-600 transition-colors`}>{translations('header').projects}</a>
              <a href="#contact" className={`hover:text-blue-600 transition-colors`}>{translations('header').contact}</a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;