import React from "react";
import Projectsitem from "../items/Projectsitem";
import AleatorioImg from "../../public/Aleatorio.png";
import usuariosImg from "../../public/Usuarios.png";
import pokedexImg from "../../public/Pokedex.png";
import climaImg from "../../public/Clima.png";



const Projects = ({darkMode, t, i18n}) => {
  return (
    <div className="px-8 md:mx-10 text-[#fffdff]">
      <div id="projects" className="m-auto max-w-[1024px]">
      <h1 className={` ${darkMode ? 'gradient-text' : 'gradient-text-sun'} text-4xl font-bold text-center pb-2 `}>
        {t("projects.projects")}
      </h1>
      <p className={` ${darkMode ? 'gradient-p' : 'gradient-p-sun'} text-lg text-justify py-8`}>
      {t("projects.text")}
      </p>
      
      <div className="grid sm:grid-cols-2 gap-12">
        <a href="https://amazing-mandazi-b5a11f.netlify.app/">
          <Projectsitem img={AleatorioImg} title={t("projects.aleatorio")} />
        </a>
        <a href="https://wondrous-truffle-7b72f5.netlify.app/">
          <Projectsitem img={usuariosImg} title={t("projects.users")} />
          </a>
          <a href="https://thunderous-sopapillas-626440.netlify.app/">
          <Projectsitem img={pokedexImg} title={t("projects.pokedex")} />
          </a>
        <a href="https://astonishing-kleicha-8335db.netlify.app/">
          <Projectsitem img={climaImg} title={t("projects.weather")} />
          </a>
      </div>
    </div>
    </div>
  );
};

export default Projects;
