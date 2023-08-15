import React from "react";
import Workitem from "../items/Workitem";



const data = [
  {
    year: 2018,
    title: "Croydon",
    duration: "2 meses",
    habilitie:"- Comunicación acertiva",
    habilitie2:"- Satisfacción de los clientes",
    /*   "Desempeñé el rol de asesor de ventas, interactuando directamente con los clientes para proporcionarles información sobre los productos y servicios de la empresa. Esta experiencia me permitió desarrollar habilidades sólidas en comunicación, empatía y satisfacción del cliente.", */
  },
  {
    year: 2021,
    title: "Equipos y controles industriales",
    duration: "Enero 2021 - Actualidad",
    habilitie:"- Busqueda e interpretación de documentación",
    habilitie2:"- Liderar proyectos y equipos de trabajo de manera eficiente",
    habilitie3:"- Rapida adaptabilidad a los distintos entronos de trabajo",
    habilitie4:"- Trabajo en equipo",
    habilitie5:"- Conocimientos tecnicos de distinos campos tecnologicos",

      /* "Mi camino en Equipos y Controles Industriales comenzó como aprendiz, donde tuve la oportunidad de aprender sobre el mundo de la industria. Durante esos primeros 6 meses, mi enfoque principal fue atender y reparar garantías. Debido a mi dedicación, esfuerzo y rapido aprendizaje la empresa tomó la desición de contratarme directamente como Técnico de Servicios. Aquí, mi papel cambió ya que enfrenté labores más complejas, desde el mantenimiento preventivo y correctivo hasta el soporte en campo para diagnósticos y reparaciones, debido a ésto me encontraba constantemente buscando e investigando documentación técnica de los equipos que manejaba. A medida que asumía más responsabilidades, se me dió la labor de liderar algunos servicios y mantener contacto directo con clientes importantes como Ecopetrol, Cenit, Aqualia latinoameríca, Pepsico etc. Mi tiempo en Equipos y Controles Industriales fue ha sido una etapa de crecimiento y aprendizaje que me impulsó hacia adelante.", */
  },
];

const Work = ({darkMode, i18n}) => {
  return (
    <div id="work" className="max-w-[1024px] m-auto md:pl-20 p-4 py-16 ">
      
      <h1 className={` ${darkMode ? 'gradient-text' : 'gradient-text-sun'} text-4xl font-bold text-center `}>Work</h1>
      
      {data.map((item, idx) => (
        <Workitem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          habilitie={item.habilitie}
          habilitie2={item.habilitie2}
          habilitie3={item.habilitie3}
          habilitie4={item.habilitie4}
          habilitie5={item.habilitie5}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
};

export default Work;
