import {
  BookText,
  Briefcase,
  Facebook,
  GraduationCap,
  HomeIcon,
  PenLine,
  University,
  UserRound,
  Wrench,
} from "lucide-react";
import { FaCss3Alt, FaSass } from "react-icons/fa";
import { TbBrandFigma, TbBrandTypescript, TbSeo } from "react-icons/tb";

export const itemsNavbar = [
  {
    title: "Inicio",
    icon: <HomeIcon className="w-6 h-6" color="#fff" strokeWidth={2} />,
    link: "inicio",
  },
  {
    title: "Trabajos",
    icon: <Briefcase className="w-6 h-6 " color="#fff" strokeWidth={2} />,
    link: "portfolio",
  },
  {
    title: "Sobre mi",
    icon: <BookText className="w-6 h-6 " color="#fff" strokeWidth={2} />,
    link: "sobre-mi",
  },
  {
    title: "Herramientas",
    icon: <Wrench className="w-6 h-6 " color="#fff" strokeWidth={2} />,
    link: "stack",
  },
  {
    title: "Contacto",
    icon: <UserRound className="w-6 h-6" color="#fff" strokeWidth={2} />,
    link: "contacto",
  },
];

export const NavBarIcons = [
  {
    name: "Inicio",
    icon: <HomeIcon className="w-6 h-6" strokeWidth={2} />,
    link: "/",
  },
  {
    name: "Trabajos",
    icon: <Briefcase className="w-6 h-6" strokeWidth={2} />,
    link: "/portafolios",
  },
  {
    name: "Sobre mi",
    icon: <UserRound className="w-6 h-6" strokeWidth={2} />,
    link: "/sobre-mi",
  },
];

export const footerNavPages = [
  {
    id: 1,
    title: "Inicio",
    link: "/",
  },
  {
    id: 2,
    title: "Trabajos",
    link: "/portafolios",
  },
  {
    id: 3,
    title: "Sobre mi",
    link: "/sobre-mi",
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "Youtube",
    icon: <i className="ri-youtube-fill"></i>,
    span: <span className="link-description">Youtube</span>,
    src: "#",
  },
  {
    id: 2,
    title: "WhatsApp",
    icon: <i className="ri-whatsapp-fill"></i>,
    span: <span className="link-description">WhatsApp</span>,
    src: "https://api.whatsapp.com/send?phone=5492804031239",
  },
  {
    id: 3,
    title: "Github",
    icon: <i className="ri-github-line"></i>,
    span: <span className="link-description">GitHub</span>,
    src: "https://github.com/Marcos-Pines1",
  },
  {
    id: 4,
    title: "LinkedIn",
    icon: <i className="ri-linkedin-box-line"></i>,
    span: <span className="link-description">LinkedIn</span>,
    src: "https://www.linkedin.com/in/marcos-morua-a7b326295",
  },
];

export const sliderImgNum = [
  {
    id: 1,
    title: "Portafolio imagen",
    src: "/1.png",
  },
  {
    id: 2,
    title: "Portafolio imagen",
    src: "/2.png",
  },
  {
    id: 3,
    title: "Imitación de la pagina de Aorus",
    src: "/3.png",
  },
];

export const sliderImgABC = [
  {
    id: 1,
    title: "CRM imagen",
    src: "/a.png",
  },
  {
    id: 2,
    title: "Portafolio vista mobil",
    src: "/b.png",
  },
  {
    id: 3,
    title: "Portafolio vista tablet",
    src: "/c.png",
  },
];

export const sliderImgXYZ = [
  {
    id: 1,
    title: "Pagina de Negocio",
    src: "/x.png",
  },
  {
    id: 2,
    title: "E-Commerce Imagen",
    src: "/y.png",
  },
  {
    id: 3,
    title: "Portafolio vista mobil",
    src: "/z.png",
  },
];

export const heroIcons = [
  {
    id: 1,
    title: "Youtube",
    icon: <i className="ri-youtube-line"></i>,
    src: "https://www.youtube.com/@MarcosDevYT",
  },
  {
    id: 2,
    title: "Github",
    icon: <i className="ri-github-line "></i>,
    src: "https://github.com/MarcosDevYT",
  },
  {
    id: 3,
    title: "LinkedIn",
    icon: <i className="ri-linkedin-box-line "></i>,
    src: "https://www.linkedin.com/in/marcos-morua-a7b326295",
  },
];

export const portfolioFilter = [
  {
    id: 1,
    title: "Todos",
    filtro: "todos",
  },
  {
    id: 2,
    title: "Información",
    filtro: "información",
  },
  {
    id: 3,
    title: "Negocio",
    filtro: "negocio",
  },
  {
    id: 4,
    title: "Portafolio",
    filtro: "portafolio",
  },
];

export const portfolioCards = [
  {
    id: 1,
    title: "CRM Con indexDB",
    categorias: ["HTML", "CSS", "JavaScript"],
    text: `CRM cuyo rol te permite crear, gestionar, editar y eliminar los clientes que quieras. Hecho con indexDB para almacenar los datos en el navegador`,
    filtro: "información",
    src: "/a.png",
    link: "https://marcospines-crm.netlify.app/",
  },
  {
    id: 2,
    title: "Pagina inspirada de Aorus",
    categorias: ["HTML", "SASS", "JavaScript", "Bootstrap", "SEO"],
    filtro: "información",
    text: `Sitio web inspirado en el diseño de la tarjeta gráfica Aorus, compuesto por tres páginas completamente responsivas. Incorpora animaciones avanzadas y utiliza frameworks de JavaScript junto con Bootstrap. Optimizado para SEO y desarrollado con HTML5, CSS, SASS y JavaScript para un rendimiento eficiente y visualmente atractivo.`,
    src: "/3.png",
    link: "https://marcospines-aorusinpiration.netlify.app/",
  },
  {
    id: 3,
    title: "Rocket Commerce",
    text: `E-commerce profesional con funciones completas de compra, incluyendo proceso de pago, administración de perfil, carrito de compras y cambio de modo oscuro/claro. Utiliza localStorage para almacenar de forma segura los datos del usuario y mejorar la experiencia personalizada.`,
    categorias: ["HTML", "CSS", "JavaScript"],
    filtro: "negocio",
    src: "/y.png",
    link: "https://marcospines-eccomerce.netlify.app/",
  },
  {
    id: 4,
    title: "Portafolio personal",
    text: `Portafolio personal con un tema dark/light, que incorpora múltiples funcionalidades avanzadas. Incluye ventanas modales interactivas para los proyectos y servicios, filtro de contenido, y secciones clave: Inicio, Sobre Mí, Portafolios, Experiencia, Servicios y Formulario de Contacto.`,
    categorias: ["HTML", "CSS", "JavaScript", "SEO"],
    filtro: "portafolio",
    src: "/2.png",
    link: "https://marcospines-dev.netlify.app/",
  },
  {
    id: 5,
    title: "Pagina de Negocio",
    text: `Desarrollo de página web personalizada con barra lateral de navegación para acceder rápidamente a las secciones de Inicio, Información, clientes y Contacto, adaptada a las necesidades específicas del cliente o empresa`,
    categorias: ["HTML", "CSS", "JavaScript"],
    filtro: "negocio",
    src: "/x.png",
    link: "https://marcospines-negocio1.netlify.app/",
  },
  {
    id: 6,
    title: "Portafolio personal",
    text: `Desarrollo de portafolio web totalmente personalizable, con una barra de navegación superior que facilita el acceso a cinco secciones clave: Inicio, Sobre Mí, Servicios, Proyectos y Formulario de Contacto`,
    categorias: ["HTML", "CSS", "JavaScript"],
    filtro: "portafolio",
    src: "/1.png",
    link: "https://marcospines-portfolio1.netlify.app/",
  },
  {
    id: 7,
    title: "Portafolio personal",
    text: `Desarrollo de portafolio web totalmente personalizable, con una barra de navegación superior que facilita el acceso a cinco secciones clave: Inicio, Sobre Mí, Servicios, Proyectos y Formulario de Contacto.`,
    categorias: ["HTML", "CSS", "JavaScript"],
    filtro: "portafolio",
    src: "/b.png",
    link: "https://marcospines-portfolio2.netlify.app/",
  },

  {
    id: 8,
    title: "Pagina de negocio",
    text: `Desarrollo de página web completamente personalizable según las necesidades del cliente o empresa. La estructura incluye una barra lateral de navegación para un acceso rápido a cuatro secciones principales: Inicio, Información, Galería de Imágenes y Formulario de Contacto`,
    categorias: ["HTML", "CSS", "JavaScript"],
    filtro: "negocio",
    src: "/c.png",
    link: "https://marcospines-negocio2.netlify.app/",
  },
];

export const stackIcons = [
  {
    id: 1,
    title: "Next",
    icon: <i className="ri-nextjs-fill text-2xl md:text-4xl"></i>,
  },
  {
    id: 2,
    title: "React",
    icon: <i className="ri-reactjs-line text-2xl md:text-4xl"></i>,
  },
  {
    id: 3,
    title: "Tailwind",
    icon: <i className="ri-tailwind-css-fill text-2xl md:text-4xl"></i>,
  },
  {
    id: 4,
    title: "Node",
    icon: <i className="ri-nodejs-line text-2xl md:text-4xl"></i>,
  },
  {
    id: 5,
    title: "TypeScript",
    icon: <TbBrandTypescript className="svg-stack" />,
  },
  {
    id: 6,
    title: "SEO",
    icon: <TbSeo className="svg-stack" />,
  },
  {
    id: 7,
    icon: <FaSass className="svg-stack" />,
    title: "Sass",
  },
  {
    id: 8,
    icon: <TbBrandFigma className="svg-stack" />,
    title: "Figma",
  },
  {
    id: 9,
    icon: <i className="ri-bootstrap-line text-2xl md:text-4xl"></i>,
    title: "Bootstrap",
  },
  {
    id: 10,
    icon: <FaCss3Alt className="svg-stack" />,
    title: "CSS",
  },
  {
    id: 11,
    icon: <i className="ri-html5-fill text-2xl md:text-4xl"></i>,
    title: "HTML",
  },
  {
    id: 12,
    icon: <i className="ri-javascript-line text-2xl md:text-4xl"></i>,
    title: "JavaScript",
  },
];

export const linksContact = [
  {
    id: 1,
    title: "Youtube",
    icon: <i className="ri-youtube-line "></i>,
    link: "https://www.youtube.com/@MarcosDevYT",
  },
  {
    id: 2,
    title: "WhatsApp",
    icon: <i className="ri-whatsapp-line "></i>,
    link: "https://wa.me/5492804031239",
  },
  {
    id: 3,
    title: "Github",
    icon: <i className="ri-github-line "></i>,
    link: "https://github.com/MarcosDevYT",
  },
  {
    id: 4,
    title: "LinkedIn",
    icon: <i className="ri-linkedin-box-line "></i>,
    link: "https://www.linkedin.com/in/marcos-morua-a7b326295",
  },
  {
    id: 5,
    title: "Fiverr",
    icon: <Facebook strokeWidth={1} size={"3rem"} />,
    link: "https://es.fiverr.com/s/DB0aQdP",
  },
];

export const portfolioParalax = [
  {
    title: "CRM indexDB",
    thumbnail: "/portadas/crm.png",
  },
  {
    title: "Rocket Comerce",
    thumbnail: "/portadas/eccomerce.png",
  },
  {
    title: "Negocio 2",
    thumbnail: "/portadas/negocio-2.png",
  },
  {
    title: "Portfolio 3",
    thumbnail: "/portadas/portfolio-3.png",
  },
  {
    title: "Portfolio 1",
    thumbnail: "/portadas/portfolio-1.png",
  },
  {
    title: "Sitio Aorus inspiración",
    thumbnail: "/portadas/sitio.png",
  },
  {
    title: "Negocio 1",
    thumbnail: "/portadas/negocio-1.png",
  },
  {
    title: "Portfolio 2",
    thumbnail: "/portadas/portfolio-2.png",
  },
  {
    title: "Coffe Commerce",
    thumbnail: "/portadas/coffee.png",
  },
  {
    title: "Travel Page",
    thumbnail: "/portadas/travel.png",
  },
  {
    title: "To-do Click",
    thumbnail: "/portadas/todo-click.png",
  },
  {
    title: "Coffe Commerce",
    thumbnail: "/portadas/coffee.png",
  },
  {
    title: "Travel Page",
    thumbnail: "/portadas/travel.png",
  },
];

export const dataFormation = [
  {
    icon: <University size={40} />,
    title: "Experiencias",
    info: "Comencé mi carrera desarrollando páginas web básicas y portafolios con HTML, CSS y JavaScript durante mi formación en una escuela técnica en informática. Este inicio me permitió adquirir experiencia práctica y afianzar mis habilidades en diseño y desarrollo frontend.",
  },
  {
    icon: <GraduationCap size={40} />,
    title: "Formación",
    info: "Soy Técnico en Informática Profesional y Personal, con certificaciones destacadas como las de Meta, donde aprendí JavaScript, control de versiones con Git y GitHub, y desarrollo frontend con React, HTML y CSS. En CoderHouse, completé el certificado de Desarrollo Web y actualmente curso su carrera de Desarrollo Full Stack, consolidando mis conocimientos en tecnologías modernas.",
  },
  {
    icon: <PenLine size={40} />,
    title: "Futura Formación",
    info: "Planeo especializarme en desarrollo frontend con React, Next.js y Tailwind, y realizar un diplomado en Desarrollo Full Stack en CoderHouse para mantenerme actualizado y expandir mi expertise.",
  },
];

export const dataCertificados = [
  {
    src: "/certificados/certificado-1.png",
    title: "Certificado de Desarrollo web, Coderhouse",
  },
  {
    src: "/certificados/coderhouse-javascript.png",
    title: "Certificado de Javascript, Coderhouse",
  },
  {
    src: "/certificados/certificado-2.png",
    title: "Certificado de Javascript, Meta",
  },
  {
    src: "/certificados/certificado-3.png",
    title: "Certificado de Control de versiones. Meta",
  },
  {
    src: "/certificados/certificado-4.png",
    title: "Certificado de Introducción al Frontend, Meta",
  },
  {
    src: "/certificados/certificado-5.png",
    title: "Certificado de Responsive Web Design, FreeCodeCamp",
  },
  {
    src: "/certificados/certificado-6.png",
    title: "Certificado de SEO, Hubspot Academy",
  },
  {
    src: "/certificados/certificado-7.png",
    title:
      "Certificado de Fundamentos Profesionales en Desarrollo Web, EdutinAcademy",
  },
];
