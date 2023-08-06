import React from "react";
import Projectsitem from "../items/Projectsitem";
import AleatorioImg from "../../public/Aleatorio.png";
import usuariosImg from "../../public/Usuarios.png";
import pokedexImg from "../../public/Pokedex.png";
import climaImg from "../../public/Clima.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1024px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center pb-2 gradient-text">
        Projects
      </h1>
      <p className="text-center gradient-p py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nam atque
        tenetur corrupti aspernatur, voluptates natus perferendis numquam quos
        nostrum reprehenderit sint quisquam necessitatibus assumenda obcaecati
        quam earum quidem dignissimos.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <a href="https://amazing-mandazi-b5a11f.netlify.app" target="_blank" rel="noopener noreferrer">
        <Projectsitem img={AleatorioImg} title="Aleatorio App" />
        </a>
        <a href="https://wondrous-truffle-7b72f5.netlify.app" target="_blank" rel="noopener noreferrer">
        <Projectsitem img={usuariosImg} title="Usuarios App" />
        </a>
        <a href="https://thunderous-sopapillas-626440.netlify.app" target="_blank" rel="noopener noreferrer">
        <Projectsitem img={pokedexImg} title="Pokedex App" />
        </a>
        <a href="https://astonishing-kleicha-8335db.netlify.app" target="_blank" rel="noopener noreferrer">
        <Projectsitem img={climaImg} title="Clima App" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
