import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import image from "../../assets/perfil.jpg";
import { useTranslation } from '../../contexts/LanguageContext';

const About = () => {
  const { translations } = useTranslation();

  return (
    <section id="about" className="pt-24 pb-16 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={image}
            alt="Profile"
            className="w-48 h-48 rounded-full shadow-lg"
          />
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold mb-2">{translations("about").greeting}</h1>
            <h2 className="text-2xl text-blue-600 mb-4">{translations("about").role}</h2>
            <p className="text-lg text-white-600 mb-6">{translations("about").description}</p>
            <div className="flex space-x-4 items-center">
              <FaGithub className="text-2xl hover:text-gray-700 cursor-pointer" />
              <FaLinkedin className="text-2xl hover:text-blue-600 cursor-pointer" />
              <FaEnvelope className="text-2xl hover:text-red-500 cursor-pointer" />
              <a
                href="/path-to-your-cv.pdf"
                download
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                <FaDownload /> {translations("about").downloadCV}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;