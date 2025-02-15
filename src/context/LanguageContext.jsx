import React, { createContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    menus: {
      home: "Home",
      about: "About",
      skills: "Skills",
      studies: "Studies",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      language: "Language",
    },
    welcome: {
      title: "Hey there,",
      p1: "My name is Sebastián",
      p2: "I am a Software Developer",
      b1: "Get in touch",
      b2: "Download Resume",
    },
    about: {
      title: "About me",
      description:
        "My name is Sebastian and I am a passionate software developer dedicated to building robust and efficient solutions. I have worked with technologies such as Django, Python, JavaScript, React, HTML, and CSS, always striving to optimize performance and scalability in every project. I take pride in my responsibility, commitment, and attention to detail, values that I apply to every line of code to ensure high-quality results and meet user needs.",
    },
    contact: "Contact",
    skills: "Skills",
    projects: {
      title: "Projects",
      proj: [
        {
          title: "BotChef",
          description:
            "Recipe Generator App is a React-based project that uses the Hugging Face API to generate cooking recipes based on a list of ingredients provided by the user. It integrates a backend powered by Node.js and Express to securely manage API tokens.",
          technologies:
            "ReactJs, ExpressJs, Bootstrap, Mistral AI, HuggingFace",
          url: "https://botchef-react.vercel.app/",
          viewProject: "Link",
        },
      ],
    },
    education: {
      title: "Studies and Certifications",
      degrees: [
        {
          title: "Systems Engineering",
          institution:
            "Corporación Unificada Nacional de Educación Superior (CUN)",
          year: "2025-Present",
        },
        {
          title: "Associate Degree in Software Analysis and Development",
          institution: "SENA",
          year: "2022-2024",
        },
        {
          title: "Full Stack Web Development Certificate",
          institution: "Cymetria - TalentoTech",
          year: "2024",
        },
        {
          title: "Google Cybersecurity Professional Certificate",
          institution: "Google - Coursera",
          year: "2024",
        },
        {
          title: "Oracle Next Education - BackEnd",
          institution: "Oracle - Alura",
          year: "In course",
        },
      ],
    },
    experience: {
      title: "Experience",
      jobs: [
        {
          position: "Intern",
          company: "Banco Popular S.A.",
          period: "January 2024 - July 2024",
          description: [
            "Bash scripting",
            "Computers configuration",
            "VPN appication support",
            "Tools instalation",
          ],
        },
      ],
    },
  },
  es: {
    menus: {
      home: "Inicio",
      about: "Acerca de",
      skills: "Tecnologías",
      studies: "Estudios",
      experience: "Experiencia",
      projects: "Proyectos",
      contact: "Contacto",
      language: "Idioma",
    },
    welcome: {
      title: "Hola,",
      p1: "Me llamo Sebastián",
      p2: "Soy un Desarrollador de Software",
      b1: "Contáctame",
      b2: "Descargar Curriculum",
    },
    about: {
      title: "Acerca de mí",
      description:
        "Me llamo Sebastián y soy un desarrollador de software apasionado por crear soluciones robustas y eficientes. He trabajado con tecnologías como Django, Python, JavaScript, React, HTML y CSS, siempre buscando optimizar el rendimiento y la escalabilidad de los proyectos. Me caracterizo por mi responsabilidad, compromiso y atención al detalle, valores que aplico en cada línea de código para garantizar resultados de calidad y satisfacer las necesidades de los usuarios.",
    },
    contact: "Contacto",
    skills: "Tecnologías",
    projects: {
      title: "Proyectos",
      proj: [
        {
          title: "BotChef",
          description:
            "La app de generación de recetas es un proyecto basado en React que utiliza la API de Hugging Face para generar recetas de cocina a partir de una lista de ingredientes proporcionada por el usuario. Integra un backend impulsado por Node.js y Express para gestionar de manera segura los tokens de la API.",
          technologies:
            "ReactJs, ExpressJs, Bootstrap, Mistral AI, HuggingFace",
          url: "https://botchef-react.vercel.app/",
          viewProject: "Link",
        },
      ],
    },
    education: {
      title: "Estudios y certificaciones  ",
      degrees: [
        {
          title: "Ingeniería de Sistemas",
          institution:
            "Corporación Unificada Nacional de Educación Superior (CUN)",
          year: "2025-Actualidad",
        },
        {
          title: "Tecnólogo en Análisis y Desarrollo de Software",
          institution: "SENA",
          year: "2022-2024",
        },
        {
          title: "Certificación en Desarrollo Web Full Stack",
          institution: "Cymetria - TalentoTech",
          year: "2024",
        },
        {
          title: "Certificado profesional de Ciberseguridad de Google",
          institution: "Google - Coursera",
          year: "2024",
        },
        {
          title: "Oracle Next Education - BackEnd",
          institution: "Oracle - Alura",
          year: "En curso",
        },
      ],
    },
    experience: {
      title: "Experiencia Profesional",
      jobs: [
        {
          position: "Aprendiz Sena",
          company: "Banco Popular S.A.",
          period: "Enero 2024 - Julio 2024",
          description: [
            "Creación de scripts en bash",
            "Configuración de equipos",
            "Soporte aplicación de VPN",
            "Instalación de herramientas",
          ],
        },
      ],
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  const switchLanguage = (lang) => setLanguage(lang);

  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
