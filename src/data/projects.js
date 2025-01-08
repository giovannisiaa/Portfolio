import wordle1 from '../assets/wordleClone/wordle1.jpg';
import wordle2 from '../assets/wordleClone/wordle2.jpg';
import wordle3 from '../assets/wordleClone/wordle3.jpg';  


import sistemProduct1 from '../assets/sistemProduct/sistemProduct1.png';
import sistemProduct2 from '../assets/sistemProduct/sistemProduct2.png';
import sistemProduct3 from '../assets/sistemProduct/sistemProduct3.png';
import sistemProduct4 from '../assets/sistemProduct/sistemProduct4.png';
import sistemProduct5 from '../assets/sistemProduct/sistemProduct5.png';
import sistemProduct6 from '../assets/sistemProduct/sistemProduct6.png';
import sistemProduct7 from '../assets/sistemProduct/sistemProduct7.png';
import sistemProduct8 from '../assets/sistemProduct/sistemProduct8.png';
import sistemProduct9 from '../assets/sistemProduct/sistemProduct9.png';

import cafe1 from '../assets/noviembreCafe/cafe1.png';
import cafe2 from '../assets/noviembreCafe/cafe2.png';
import cafe3 from '../assets/noviembreCafe/cafe3.png';
import cafe4 from '../assets/noviembreCafe/cafe4.png';

import argentoShoes from '../assets/argentoShoes/argentoShoes1.png';


const projects =[
  {
    "id": 1,
    "title": {
      "es": "Argento Shoes",
      "en": "Argento Shoes"
    },
    "description": {
      "es": "Solución de comercio electrónico para una empresa de calzado con sistemas de gestión integrados.",
      "en": "E-commerce solution for a footwear company with integrated management systems."
    },
    "image": argentoShoes,
    "demo": "https://www.youtube.com/watch?v=YawYgWzxTy0",
    "github": "https://github.com/giovannisiaa/TP-Empresa-De-Calzado",
    "category": "applications",
    "technologies": [
      "Java",
      "MySQL",
      "JasperReports",
      "Swing"
    ],
    "videoId": "dQw4w9WgXcQ",
    "longDescription": {
      "es": "El objetivo general del proyecto fue el desarrollo e implementación de una herramienta de software para una empresa de calzado. Dicho sistema, está integrado con un sistema encargado de gestionar la operatoria diaria de la fábrica, y otro encargado de soportar las tareas de registración y distribución de ventas mayoristas y minoristas a sus propias sucursales.",
      "en": "The general objective of the project was the development and implementation of a software tool for a footwear company. This system is integrated with a system responsible for managing the daily operations of the factory, and another responsible for supporting the tasks of registration and distribution of wholesale and retail sales to its own branches."
    },
    "images": [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
    ]
  },
  {
    "id": 2,
    "title": {
      "es": "Sistema de producto",
      "en": "Product System"
    },
    "description": {
      "es": "Aplicación web de gestión de productos en tiempo real con funciones de administración.",
      "en": "Real-time product management web application with administration functions."
    },
    "image": sistemProduct1,
    "demo": "https://leonelsubelza.github.io/Sistema-Productos/",
    "github": "https://github.com/giovannisiaa/Sistema-Productos",
    "category": "applications",
    "technologies": [
      "React",
      "Java",
      "Mysql",
      "CSS",
      "Spring Boot"
    ],
    "longDescription": {
      "es": "Aplicación web donde el usuario podrá cargar los productos que venda en su negocio y mostrarlos al público. Se podrá modificar además distintos parámetros de la página, como la foto de portada, el título, la descripción, etc. Además, se tendrá un apartado especial para administrador donde podrá realizar la modificación de toda la página, como agregar nuevos productos, agregar nuevas categorías para los productos y modificar los detalles de la página, etc. Para acceder a la sección de administrador se contará con un usuario y contraseña previamente configurado para quien posea el sistema.",
      "en": "Web application where the user can upload the products they sell in their business and display them to the public. Various page parameters can also be modified, such as the cover photo, title, description, etc. Additionally, there will be a special section for the administrator where they can modify the entire page, such as adding new products, adding new categories for products, and modifying page details, etc. To access the administrator section, a pre-configured username and password will be required for the system owner."
    },
    "images": [
      sistemProduct1,
      sistemProduct2,
      sistemProduct3,
      sistemProduct4,
      sistemProduct5,
      sistemProduct6,
      sistemProduct7,
      sistemProduct8,
      sistemProduct9
    ]
  },
  {
    "id": 3,
    "title": {
      "es": "Noviembre Cafe",
      "en": "November Cafe"
    },
    "description": {
      "es": "Landing page para una cafetería que muestra sus productos, la carta, ubicación y contacto.",
      "en": "Landing page for a cafe that showcases its products, menu, location, and contact information."
    },
    "longDescription": {
      "es": "Noviembre Cafe es una landing page diseñada para una cafetería. La página muestra una atractiva presentación de los productos de la cafetería, incluyendo imágenes y descripciones de los artículos del menú. Además, proporciona información detallada sobre la ubicación de la cafetería, con un mapa interactivo para facilitar la llegada de los clientes. También incluye una sección de contacto para que los clientes puedan comunicarse fácilmente con la cafetería.",
      "en": "November Cafe is a landing page designed for a cafe. The page features an attractive presentation of the cafe's products, including images and descriptions of menu items. It also provides detailed information about the cafe's location, with an interactive map to help customers find their way. Additionally, it includes a contact section so customers can easily get in touch with the cafe."
    },
    "image": cafe1,
    "demo": "https://giovannisiaa.github.io/Noviembre-Cafe.github.io/",
    "github": "https://github.com/giovannisiaa/Noviembre-Cafe.github.io.git",
    "category": "websites",
    "technologies": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "images": [
      cafe1,
      cafe2,
      cafe3,
      cafe4
    ]
  },
  {
    "id": 4,
    "title": {
      "es": "Wordle-Clone",
      "en": "Wordle-Clone"
    },
    "description": {
      "es": "Un clon del popular juego Wordle, donde los jugadores adivinan una palabra de cinco letras en seis intentos.",
      "en": "A clone of the popular Wordle game, where players guess a five-letter word in six attempts."
    },
    "longDescription": {
      "es": "Wordle-Clone es una versión del popular juego de adivinanzas de palabras. Los jugadores tienen seis intentos para adivinar una palabra de cinco letras. Después de cada intento, el juego proporciona pistas sobre qué letras están en la palabra correcta y en la posición correcta. Es una excelente manera de mejorar el vocabulario y las habilidades de deducción.",
      "en": "Wordle-Clone is a version of the popular word guessing game. Players have six attempts to guess a five-letter word. After each guess, the game provides clues about which letters are in the correct word and in the correct position. It's a great way to improve vocabulary and deduction skills."
    },
    "image": wordle1,
    "demo": "https://giovannisiaa.github.io/Wordle-Clon/",
    "github": "https://github.com/giovannisiaa/Wordle-Clon.git",
    "category": "websites",
    "technologies": [
      "React",
      "CSS",
      "JavaScript"
    ],
    "images": [
      wordle1,
      wordle2,
      wordle3
    ]
  }
]

export default projects;