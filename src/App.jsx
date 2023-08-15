import React, { useState, useEffect } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import { FaMoon, FaSun } from "react-icons/fa";
import Makeit from "./components/Makeit";
import { useTranslation } from "react-i18next";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {

  const [loading, setLoading] = useState(true);
  // Estado para almacenar el modo actual (true: modo oscuro, false: modo claro)
  const [darkMode, setDarkMode] = useState(false);
  const [t, i18n] = useTranslation("global");
  // Función para cambiar el modo entre oscuro y claro
  const changeDarkMode = () => {
    // Actualizar el estado para cambiar el modo y guardar en el localStorage
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    newDarkMode
      ? (localStorage.theme = "dark")
      : (localStorage.theme = "light");

      
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

  useEffect(() => {
    // Simula un tiempo de carga (por ejemplo, 2 segundos)
    setTimeout(() => {
      setLoading(false); // Cambia el estado para mostrar el contenido principal
    }, 2000);
  }, []);

  if (loading) {
    return <LoadingScreen />; // Muestra la pantalla de carga mientras se carga
  }

  //Toogle para alternas los idiomas

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'es' : 'en'; // Cambia 'es' si prefieres otro idioma

    i18n.changeLanguage(newLanguage);
    window.location.reload();
    localStorage.setItem('language', newLanguage);

  };

  return (
    <div className="bg-slate-300 dark:bg-gray-900">
      <Sidenav changeDarkMode={changeDarkMode} t={t} darkMode={darkMode} />
          <button
            className="z-10 md:block hidden fixed text-yellow-400 bg-slate-800 items-center justify-center p-3.5 m-2 overflow-hidden font-medium dark:text-gray-100 rounded-full group shadow-lg shadow-gray-700 hover:scale-110 duration-100 dark:bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-xl"
            onClick={changeDarkMode}
          >
               {darkMode ? <FaMoon size={25} /> : <FaSun size={25} />}
          </button>
          <button onClick={toggleLanguage} className=" font-semibold dark:text-gray-200 text-gray-900 text-lg fixed z-10 p-5 md:translate-x-[70%]">EN/ES</button>
      <Main t={t} i18n={i18n} />
      <About darkMode={darkMode} i18n={i18n} t={t} />
      {/*     <Education darkMode={darkMode} /> */}
      {/*   <Work darkMode={darkMode} /> */}
      <Projects darkMode={darkMode} i18n={i18n} t={t} />
      <Contact darkMode={darkMode} i18n={i18n} t={t} />
      <Makeit t={t} i18n={i18n} />
    </div>
  );
};

export default App;
