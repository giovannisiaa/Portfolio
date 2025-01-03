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

  const projects = [
    {
      id: 1,
      title: "Argento Shoes",
      description: "Solución de comercio electrónico para una empresa de calzado con sistemas de gestión integrados.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028",
      demo: "https://demo.example.com",
      github: "https://github.com",
      category: "applications",
      technologies: ["Java", "MySQL", "JasperReports", "Swing"],
      videoId: "dQw4w9WgXcQ",
      longDescription: "El objetivo general del proyecto fue el desarrollo e implementación de una herramienta de software para una empresa de calzado. Dicho sistema, está integrado con un sistema encargado de gestionar la operatoria diaria de la fábrica, y otro encargado de soportar las tareas de registración y distribución de ventas mayoristas y minoristas a sus propias sucursales.",
      images: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
      ]
    },
    {
      id: 2,
      title: "Sistema de producto",
      description: "Aplicación web de gestión de productos en tiempo real con funciones de administración.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      demo: "https://demo.example.com",
      github: "https://github.com",
      category: "applications",
      technologies: ["React", "Java", "Mysql", "CSS", "Spring Boot"],
      videoId: "dQw4w9WgXcQ",
      longDescription: "Aplicación web donde el usuario podrá cargar los productos que venda en su negocio y mostrarlos al público. Se podrá modificar además distintos parámetros de la página, como la foto de portada, el título, la descripción, etc. Además, se tendrá un apartado especial para administrador donde podrá realizar la modificación de toda la página, como agregar nuevos productos, agregar nuevas categorías para los productos y modificar los detalles de la página, etc. Para acceder a la sección de administrador se contará con un usuario y contraseña previamente configurado para quien posea el sistema.",
      images: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
      ]
    },
    {
      id: 3,
      title: "Noviembre Cafe",
      description: "Landing page para una cafetería que muestra sus productos, la carta, ubicación y contacto.",
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd",
      demo: "https://demo.example.com",
      github: "https://github.com",
      category: "landing-pages",
      technologies: ["HTML", "CSS", "JavaScript"],
      videoId: "dQw4w9WgXcQ",
      longDescription: "Noviembre Cafe es una landing page diseñada para una cafetería. La página muestra una atractiva presentación de los productos de la cafetería, incluyendo imágenes y descripciones de los artículos del menú. Además, proporciona información detallada sobre la ubicación de la cafetería, con un mapa interactivo para facilitar la llegada de los clientes. También incluye una sección de contacto para que los clientes puedan comunicarse fácilmente con la cafetería para reservas o consultas.",
      images: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb"
      ]

    }
  ];


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
