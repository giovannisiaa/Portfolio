import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import { useDarkMode } from '../../contexts/DarkModeContext';
import { useTranslation } from '../../contexts/LanguageContext';
import personalData from "../../data/personalData";
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  const { darkMode } = useDarkMode();
  const { translations } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [captchaToken, setCaptchaToken] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert('Por favor, completa el CAPTCHA.');
      return;
    }

    const dataToSend = {
      ...formData,
      'g-recaptcha-response': captchaToken
    };

    emailjs.send('service_o8j5oay', 'template_u6jp8me', dataToSend, 'c7ZyaP7XhrvqMD3-n')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensaje enviado con éxito!');
        window.location.reload();
      }, (err) => {
        console.error('FAILED...', err);
        alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      });
  };

  return (
    <section id='contact' className={`bg-gray-50 ${darkMode ? "bg-gray-800" : "bg-white"} py-20 px-4`}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">{translations("contact").getInTouch}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={`bg-gray ${darkMode ? "bg-gray-700" : "bg-white"} rounded-lg shadow-lg p-8`}>
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label className="block text-white-700 mb-2" htmlFor="name">{translations("contact").name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-white-700 mb-2" htmlFor="email">{translations("contact").email}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-white-700 mb-2" htmlFor="message">{translations("contact").message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none text-black focus:border-blue-500`}
                  required
                ></textarea>
              </div>
              <ReCAPTCHA className='flex justify-center mb-6'
                sitekey="6LfJALQqAAAAANzrUnfYsKCvMYcRwVTk0gQ7jJ0R"
                onChange={handleCaptchaChange}
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                {translations("contact").sendMessage}
              </button>
            </form>
          </div>

          <div className={`bg-gray-700 ${darkMode ? "bg-gray-700" : "bg-white"} rounded-lg shadow-lg p-8`}>
            <div className="flex flex-col space-y-4">
              <h3 className={`text-xl font-bold mb-4`}>{translations("contact").connectWithMe}</h3>
              <a
                href={personalData.socials.github}
                className="flex items-center space-x-3 text-white-700 hover:text-blue-600 transition"
              >
                <FaGithub className="text-2xl" />
                <span>GitHub</span>
              </a>
              <a
                href={personalData.socials.linkedin}
                className="flex items-center space-x-3 text-white-700 hover:text-blue-600 transition"
              >
                <FaLinkedin className="text-2xl" />
                <span>LinkedIn</span>
              </a>
              <button onClick={() => window.open(personalData.resumeCV)}
                className="flex items-center space-x-3 text-white-700 hover:text-blue-600 transition"
              >
                <FaDownload className="text-2xl" />
                <span>{translations("contact").downloadResume}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;