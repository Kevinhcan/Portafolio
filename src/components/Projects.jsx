import React from "react";
import Projectsitem from "../items/Projectsitem";
import AleatorioImg from "../../public/Aleatorio.png";
import usuariosImg from "../../public/Usuarios.png";
import pokedexImg from "../../public/Pokedex.png";
import climaImg from "../../public/Clima.png";



const Projects = ({darkMode}) => {
  return (
    <div id="projects" className="max-w-[1024px] m-auto md:pl-20 p-4 py-16">
      <h1 className={` ${darkMode ? 'gradient-text' : 'gradient-text-sun'} text-4xl font-bold text-center pb-2 `}>
        Projects
      </h1>
      <p className={` ${darkMode ? 'gradient-p' : 'gradient-p-sun'} text-lg text-justify py-8`}>
        En mi paso por Academlo tuve la oportunidad de desarrollar diversos proyectos donde implementé mis conocimientos sobre los distinos frameworks y lenguajes de programación 
      </p>
      
      <div className="grid sm:grid-cols-2 gap-12">
        <div>
          <Projectsitem img={AleatorioImg} title="Aleatorio App" />
        </div>
        <div>
          <Projectsitem img={usuariosImg} title="Usuarios App" />
        </div>
        <div>
          <Projectsitem img={pokedexImg} title="Pokedex App" />
        </div>
        <div>
          <Projectsitem img={climaImg} title="Clima App" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
