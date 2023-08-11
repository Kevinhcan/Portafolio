import React from "react";
import Projectsitem from "../items/Projectsitem";
import AleatorioImg from "../../public/Aleatorio.png";
import usuariosImg from "../../public/Usuarios.png";
import pokedexImg from "../../public/Pokedex.png";
import climaImg from "../../public/Clima.png";



const Projects = ({darkMode}) => {
  return (
    <div className="px-8 mx-10 mx:m-0 text-[#fffdff]">
      <div id="projects" className="m-auto max-w-[1024px]">
      <h1 className={` ${darkMode ? 'gradient-text' : 'gradient-text-sun'} text-4xl font-bold text-center pb-2 `}>
        Projects
      </h1>
      <p className={` ${darkMode ? 'gradient-p' : 'gradient-p-sun'} text-lg text-justify py-8`}>
        En mi paso por Academlo tuve la oportunidad de desarrollar diversos proyectos donde implementé mis conocimientos sobre los distinos frameworks y lenguajes de programación 
      </p>
      
      <div className="grid sm:grid-cols-2 gap-12">
        <a href="https://amazing-mandazi-b5a11f.netlify.app/">
          <Projectsitem img={AleatorioImg} title="Aleatorio App" />
        </a>
        <a href="https://wondrous-truffle-7b72f5.netlify.app/">
          <Projectsitem img={usuariosImg} title="Usuarios App" />
          </a>
          <a href="https://thunderous-sopapillas-626440.netlify.app/">
          <Projectsitem img={pokedexImg} title="Pokedex App" />
          </a>
        <a href="https://astonishing-kleicha-8335db.netlify.app/">
          <Projectsitem img={climaImg} title="Clima App" />
          </a>
      </div>
    </div>
    </div>
  );
};

export default Projects;
