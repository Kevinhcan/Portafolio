import React, { useState, useEffect } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

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
    <div className=" bg-slate-100 dark:bg-gray-900">
      <Sidenav changeDarkMode={changeDarkMode} darkMode={darkMode} />
      <Main />
      <Work />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default App;
