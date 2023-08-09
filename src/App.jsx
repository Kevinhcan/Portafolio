import React, { useState, useEffect } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import { FaMoon, FaSun } from "react-icons/fa";

const App = () => {
  // Estado para almacenar el modo actual (true: modo oscuro, false: modo claro)
  const [darkMode, setDarkMode] = useState(false);

  // Función para cambiar el modo entre oscuro y claro
  const changeDarkMode = () => {
    // Actualizar el estado para cambiar el modo y guardar en el localStorage
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    newDarkMode ? (localStorage.theme = "dark") : (localStorage.theme = "light");
  };

  // Escuchar cambios en las preferencias de color del sistema
  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemColorChange = (e) => {
      setDarkMode(e.matches);
    };
    prefersDarkMode.addListener(handleSystemColorChange);
    setDarkMode(prefersDarkMode.matches);

    return () => {
      prefersDarkMode.removeListener(handleSystemColorChange);
    };
  }, []);


  // Actualizar la clase del documento cuando cambie el estado del modo
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-slate-300 dark:bg-gray-900">
      <Sidenav changeDarkMode={changeDarkMode} darkMode={darkMode} />
      <button
            className="z-10 md:block hidden fixed text-yellow-400 bg-slate-800 items-center justify-center p-3.5 m-2 overflow-hidden font-medium dark:text-gray-100 rounded-full group shadow-lg shadow-gray-700 hover:scale-110 duration-100 dark:bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-xl"
            onClick={changeDarkMode}
          >
            {darkMode ? <FaMoon size={25} /> : <FaSun size={25} /> }
          </button>
      
      <Main />
      <About darkMode={darkMode} />
  {/*     <Education darkMode={darkMode} /> */}
    {/*   <Work darkMode={darkMode} /> */}
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
};

export default App;
