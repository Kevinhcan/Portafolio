import React from 'react'
import Educationitem from '../items/Educationitem';

const data = [
    {
      year: 2021,
      title: "Tecnologo Diseño e integración de automatismos mecatronicos - SENA",
      duration: "Febrero 2019 - Julio 2021",
      details:" Diseño de interfaces y funcionalidades dinámicas",
      details2:" Arduino",
      details3:" C++",
     /*    "Mi formación en Diseño e Integración de Automatismos Mecatronicos me ha dotado de una base sólida en la creación y control de sistemas mecatrónicos. Durante mis estudios, adquirí destrezas en la definición y proyección de soluciones automatizadas según requerimientos específicos. Un aspecto destacado de mi educación fue el aprendizaje de la programación con Arduino y C++, lo cual amplió mi comprensión de la programación y su aplicación en proyectos prácticos. Esta habilidad ha resultado esencial en mi enfoque hacia el desarrollo web, donde aplico las bases adquiridas sobre control y lógica en la creación de interfaces y funcionalidades dinámicas. Además, mi perfil de egresado abarca desde diseñador de máquinas y equipos hasta integrador de soluciones automatizadas. Esta versatilidad se traduce en un enfoque fresco y creativo en el diseño de soluciones en el ámbito del desarrollo web. Mi formación sólida y mi enfoque en la innovación me permiten enfrentar desafíos técnicos con confianza y encontrar soluciones efectivas para el mundo digital." */
    },
    {
      year: 2022,
      title: "Desarrollador Web Full-Stack y Ciencias de la computación - Academlo",
      duration: "Octubre 2022 - Julio 2023",
      details:
      "",
      /* "En mi camino de aprendizaje, obtuve un certificado en Desarrollo Web Full Stack, donde exploré desde los fundamentos de HTML, CSS y JavaScript hasta las tecnologías más actuales como ReactJS, Tailwind y Node.js. Mientras descubría el mundo del desarrollo, encontré un gusto especial por el frontend, donde pude fusionar diseño y funcionalidad para crear interfaces atractivas, mi pasión por el frontend me motiva a perfeccionar mis habilidades y ofrecer experiencias web destacables." */
    },
  ];

const Education = ({darkMode}) => {
  return (
    <div id="work" className="max-w-[1024px] m-auto md:pl-20 p-4 py-16 ">
      
    <h1 className={` ${darkMode ? 'gradient-text' : 'gradient-text-sun'} text-4xl font-bold text-center pb-6 `}>Education</h1>
    
    {data.map((item, idx) => (
      <Educationitem
        key={idx}
        year={item.year}
        title={item.title}
        duration={item.duration}
        details={item.details}
        details2={item.details2}
        details3={item.details3}
        darkMode={darkMode}
      />
    ))}
  </div>
);
};


export default Education