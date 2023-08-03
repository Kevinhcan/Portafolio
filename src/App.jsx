import React, { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
      <About />
      <Contact />
      {/* //TODO sección personal y descarga de CV
      //TODO cambio de lenguaje
      //TODO Poner multimedia e interacción
      //Todo conforme baje se renderice
      //TODO 
 */}
    </>
  );
}

export default App;
