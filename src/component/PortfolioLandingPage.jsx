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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [language, setLanguage] = useState("es");

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = [
    [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
    ],
    [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
    ],
    [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
    ],
  ];

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } else {
      setErrors(newErrors);
    }
  };

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
        projectImages={projectImages}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />

      <Technologies darkMode={darkMode} technologies={technologies} />

      <Contact darkMode={darkMode} />

    </div>
  );
};

export default PortfolioLandingPage;
